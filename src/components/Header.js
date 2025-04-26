import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <h3 className="cursor-pointer text-lg">Adarsha</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between px-10 font-bold p-2 shadow-sm">
      <Link to={"/"}>
        <Title />
      </Link>
      <ul className="flex gap-5">
        <li className="cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
