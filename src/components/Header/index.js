import Drawer from "./Drawer";
import React from "react";
import Button from "../Button";
import "./styles.css";
import { NearbyOff } from "@mui/icons-material";

function Header({ themeChanger }) {
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      <div className="links-flex">
        <Button text={"theme"} onClick={themeChanger} />
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/search">
          <p className="links">Search</p>
        </a>
        <a href="/about-us">
          <p className="links">About Us</p>
        </a>
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;
