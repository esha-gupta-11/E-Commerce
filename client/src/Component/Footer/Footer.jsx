import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 mt-12">
      <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><NavLink to='/AboutUs'>About us</NavLink></li>
            <li><NavLink to='/ContactUs'>Contact us</NavLink></li>
            <li><NavLink to=''>Magazine</NavLink></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Collections</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><NavLink to='/skincare'>Skincare</NavLink></li>
            <li><NavLink to='/hygiene'>Hygiene</NavLink></li>
            <li><NavLink to='/personalcare'>Personal care</NavLink></li>
            <li><NavLink to='/lipcare'>Lip Care</NavLink></li>
            <li><NavLink to='/haircare'>Hair Care</NavLink></li>
          
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold">Privacy & Terms</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Return & Cancellation Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-black mt-2">RG Biocosmetic Private Limited,<br />
            C-65 Okhla Phase 1, New Delhi 110020, India.</p>
          <p className="text-black mt-2 phone-icon-black">📞 +91 67894567344</p>
          <p className="text-black mt-2">✉ sorainfo@gmail.com</p>
        </div>
      </div>


      <div className="text-center text-black mt-10 border-t border-gray-700 pt-5">
        <div className="flex justify-center space-x-5">
          <NavLink to='#' className="text-black">📘</NavLink>
          <NavLink to='#' className="text-black">📸</NavLink>
          <NavLink to='#' className="text-black">▶</NavLink>
        </div>
        <p className="mt-3">Copyright © 2025 Sora Industries Ltd.</p>
       
      </div>
    </footer>
  );
};

export default Footer;