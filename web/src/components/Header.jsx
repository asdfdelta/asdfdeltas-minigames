import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="flex --fade-in">
        <div className="p-3 py-1 bg-dark-lime text-center">
          <h1 className="text-5xl font-bold uppercase text-white leading-none font-header">
            {title}
          </h1>
        </div>
      <span className="hidden xs:block ml-1 flex-grow bg-light-lime --fade-in"></span>
    </header>
  );
};

export default Header;