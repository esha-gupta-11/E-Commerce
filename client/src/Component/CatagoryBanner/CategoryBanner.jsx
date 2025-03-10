import { useState, useEffect } from "react";

const CategoryBanner = ({ title, imageSrc, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="mt-29">
      <div className="flex">
        <div className="left-div flex">
          <img src={imageSrc} alt={title} className="w-[720px]" />
        </div>
        <div className="right-div flex w-[800px] bg-green-50 text-center pt-10 flex-col justify-center -mt-15">
          <p className="text-5xl  font-serif italic">
            {texts[currentIndex][0]}
          </p>
          <p className="text-3xl text-gray-600 mt-2 font-mono">
            {texts[currentIndex][1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
