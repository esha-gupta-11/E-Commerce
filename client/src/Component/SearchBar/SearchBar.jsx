import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const suggestions = [
  "SkinCare",
  "Hygiene",
  "PersonalCare",
  "HairCare",
  "LipCare",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentSuggestion, setCurrentSuggestion] = useState(-1); // Tracks highlighted suggestion
  const [backgroundText, setBackgroundText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (query) {
      const matchingSuggestion = suggestions.find((item) =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );

      setFilteredSuggestions(
        suggestions.filter((item) =>
          item.toLowerCase().startsWith(query.toLowerCase())
        )
      );

      if (
        matchingSuggestion &&
        matchingSuggestion.toLowerCase() !== query.toLowerCase()
      ) {
        setBackgroundText(
          matchingSuggestion.replace(new RegExp(`^${query}`, "i"), query)
        );
      } else {
        setBackgroundText("");
      }
    } else {
      setFilteredSuggestions([]);
      setBackgroundText("");
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setCurrentSuggestion(-1); // Reset highlighted index
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]); // Hide dropdown
    navigate(`/${suggestion}`); // Navigate
  };

  const handleSearch = () => {
    const formattedQuery = query.replace(/\s+/g, ""); // Remove spaces
    if (suggestions.includes(formattedQuery)) {
      setFilteredSuggestions([]); // Hide dropdown
      navigate(`/${formattedQuery}`); // Navigate
    } else {
      alert("Page not found");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Move down in the dropdown
      setCurrentSuggestion((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      // Move up in the dropdown
      setCurrentSuggestion((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (currentSuggestion >= 0 && filteredSuggestions.length > 0) {
        // If a suggestion is highlighted, select it
        setQuery(filteredSuggestions[currentSuggestion]);
        setFilteredSuggestions([]);
        navigate(`/${filteredSuggestions[currentSuggestion]}`);
      } else {
        // Otherwise, perform a normal search
        handleSearch();
      }
    }
  };

  const clearSearch = () => {
    setQuery("");
    setFilteredSuggestions([]);
    setBackgroundText("");
    setCurrentSuggestion(-1);
  };

  return (
    <div className="relative w-64 mx-auto mt-2">
      <div className="flex items-center border border-gray-300 rounded-full bg-white relative shadow-sm h-8">
        <FaSearch
          className="text-gray-500 ml-2 cursor-pointer"
          size={14}
          onClick={handleSearch}
        />

        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-full px-3 py-1 text-gray-300 pointer-events-none text-sm leading-tight">
            {backgroundText}
          </div>

          <input
            type="text"
            className="w-full px-3 py-1 text-sm leading-tight outline-none text-gray-800 bg-transparent relative z-10"
            placeholder={`Search ${
              suggestions[currentSuggestion !== -1 ? currentSuggestion : 0]
            }...`}
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Handle keyboard navigation
          />
        </div>

        {query && (
          <IoClose
            className="text-gray-500 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-700 z-20"
            size={16}
            onClick={clearSearch}
          />
        )}
      </div>

      {filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 w-57 bg-white border border-gray-300 shadow-lg rounded-b-lg z-50 max-h-48 overflow-y-auto ml-3.5">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-3 py-2 text-sm font-medium cursor-pointer transition-all ${
                index === currentSuggestion
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
              onMouseEnter={() => setCurrentSuggestion(index)}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
