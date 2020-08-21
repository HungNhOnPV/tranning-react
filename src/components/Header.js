import React, { useState, useEffect } from "react";
import "../scss/Header.scss";
import logo from "../images/logo-is.png";

const Header = (props) => {
  return (
    <header className="header">
      <a href="index.html" className="logo">
        <img src={logo} alt="logo" />
        <span>amazing</span>
      </a>
      <div className="input">
        <div className="input__search">
          <input
            type="text"
            className="input__search__box"
            id="q"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Search a product"
            role="textbox"
            spellCheck="false"
            value=""
            name=""
          />
        </div>
        <span className="btn">
          <a className="btn__search"><i className="fa fa-search"></i></a>
        </span>
      </div>
    </header>
  );
};

export default Header;
