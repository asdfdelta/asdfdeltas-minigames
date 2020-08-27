import React from "react";
import { Link, useLocation, useResolvedLocation } from "react-router-dom";

const baseNavClasses = [
  "whitespace-no-wrap",
  "transition-colors",
  "duration-500",
  "ease-in-out",
  "hover:bg-dark-lime",
  "px-3",
  "py-1",
  "text-white",
  "font-bold",
  "w-auto",
  "mr-1",
  "cursor-pointer",
];

const navTextCss = [
  "hidden",
  "sm:inline-block",
  "uppercase",
  "border-l-2",
  "ml-1",
  "pl-2",
  "border-white",
];

const Navbar = () => {
  return (
    <nav className="--fade-in">
      <ul className="flex mt-1">
        <InternalNavItem to="blog" iconString="fas fa-pen-nib" name="blog" />
        <InternalNavItem
          to="portfolio"
          iconString="fas fa-folder"
          name="portfolio"
        />
        <InternalNavItem to="resume" iconString="fas fa-award" name="resume" />
        <InternalNavItem
          to="contact"
          active
          iconString="fas fa-envelope"
          name="contact"
        />
        <ExternalNavItem
          path="https://github.com/xdega"
          iconString="fab fa-github"
          name="github"
        />
        <span className="bg-light-lime py-1 p-3 flex-grow"></span>
      </ul>
    </nav>
  );
};

const InternalNavItem = ({ to, iconString, name }) => {
  const location = useLocation();
  const resolvedLocation = useResolvedLocation(to);
  const defaultLocation = location.pathname === "/" && name === "blog";
  const backgroundClass =
    defaultLocation || location.pathname === resolvedLocation.pathname
      ? "bg-dark-lime"
      : "bg-light-lime";

  return (
    <li className={`${baseNavClasses.join(" ")} ${backgroundClass}`}>
      <Link to={to}>
        <i className={`${iconString} fa-lg`}></i>
        <span className={navTextCss.join(" ")}>{name}</span>
      </Link>
    </li>
  );
};

const ExternalNavItem = ({ path, iconString, name }) => {
  return (
    <li className={`${baseNavClasses.join(" ")} bg-light-lime`}>
      <a href={path} target="_blank">
        <i className={`${iconString} fa-lg`}></i>
        <span className={navTextCss.join(" ")}>{name}</span>
      </a>
    </li>
  );
};

export default Navbar;