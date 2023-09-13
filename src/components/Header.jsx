import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="text-box">
        <h1>
          John Wich 3: <br />
          Parabellum
        </h1>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <Link to="" style={{ width: "200px" }}>
          <AiFillPlayCircle />
          <span>WATCH TRAILER</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
