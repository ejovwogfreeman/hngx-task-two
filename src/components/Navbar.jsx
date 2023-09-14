import React, { useState, useEffect } from "react";
import logo from "../images/tv.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       setLoading(true);
  //       const apiKey = "0bc0be4bcf9e9d819c6a7c589e08852e";
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
  //       );
  //       const data = await response.json();
  //       setSearchResults(data.results);
  //     } catch (error) {
  //       console.error("Error fetching movie data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Fetch movies when the search query changes
  //   if (searchQuery.trim() !== "") {
  //     fetchMovies();
  //   } else {
  //     setSearchResults([]);
  //   }
  // }, [searchQuery]);

  // console.log(searchQuery);
  // console.log(searchResults);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ background: "transparent" }}>
        <img src={logo} alt="" />
        <span>MovieBox</span>
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="what do you want to watch?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BsSearch />
      </div>
      <div className="auth">
        <span>Sign In</span>
        <div className="icon">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
