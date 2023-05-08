import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
