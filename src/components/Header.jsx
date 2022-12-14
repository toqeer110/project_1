import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <nav>
        <h1>Techy Dev</h1>
        <main>
          <HashLink to={"/#Home"}>Home</HashLink>
          <Link to={"/Contact"}>Contact</Link>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#brands"}>Brands</HashLink>
          <Link to={"/Services"}>Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
