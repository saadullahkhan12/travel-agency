// src/Database/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        MyApp
      </div>
      <nav className="space-x-4">
        <Link to={"/signin"} className="hover:text-gray-400">sigin</Link>
        <Link to={"/signup"} className="hover:text-gray-400">sign up</Link>
      </nav>
    </header>
  );
};

export default Header;
