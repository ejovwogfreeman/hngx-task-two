import React from "react";
import SideNav from "../components/SideNav";
import { FaPlay } from "react-icons/fa";
import rectangle from "../images/rectangle1.png";
import "../css/Movie.css";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import rectangle2 from "../images/rectangle2.png";
import { Link } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { FiMenu } from "react-icons/fi";

const Movie = () => {
  return (
    <div>
      <SideNav />
      <div className="movie-container">
        <div className="movie-header">
          <img src={rectangle} alt="" />
          <div className="play-icon">
            <div className="play">
              <FaPlay />
            </div>
            <span>Watch Trailer</span>
          </div>
        </div>
        <div className="movie-text">
          <div className="top">
            <div className="left">
              <span>Top Gun: Maverick • 2022 • PG-13 • 12h 10m </span>
              <small>Action</small>
              <small>Drama</small>
            </div>
            <div className="right">
              <AiFillStar />
              <span>8.5</span>
              <span>|</span>
              <span>350k</span>
            </div>
          </div>
          <div className="main">
            <div className="left">
              <p className="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur iure ipsam natus ullam sapiente, fugit perferendis
                repellat vitae. Tenetur nesciunt quibusdam ducimus reprehenderit
                praesentium ipsa, amet aliquid eum accusantium consequatur
                adipisci vero voluptate totam neque nihil eos, cupiditate
                explicabo quam! Libero esse voluptas, temporibus officiis, error
                et, velit in neque animi hic omnis laudantium quae voluptates.
                voluptatem.
              </p>{" "}
              <br />
              <p>
                <span>Director:</span>&nbsp;
                <span>John Doe</span>
              </p>{" "}
              <br />
              <p>
                <span>Writers:</span>&nbsp;
                <span>John Doe, Mary Smith</span>
              </p>{" "}
              <br />
              <p>
                <span>Stars:</span>&nbsp;
                <span>John Doe, Mary Smith, Morgan Freeman</span>
              </p>{" "}
              <br /> <br />
              <div className="rated">
                <span className="first">Top rated movie #65</span>
                <span className="second">
                  <span>Awards 9 nominations</span> <AiOutlineDown />
                </span>
              </div>
            </div>
            <div className="right">
              <Link>
                <ImTicket />
                <span>See Showtimes</span>
              </Link>
              <Link>
                <FiMenu />
                <span>More watch options</span>
              </Link>
              <div className="img-box">
                <img src={rectangle2} alt="" />
                <span>
                  <FiMenu />
                  <small>The Best Movies and shows in september</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
