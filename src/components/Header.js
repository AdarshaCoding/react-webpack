import React from "react";

const Title = () => {
  return (
    <div>
      <h3>Adarsha</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
