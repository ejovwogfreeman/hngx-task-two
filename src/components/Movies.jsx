import React from "react";
import movie from "../images/movie.png";
import "../css/Movies.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import img1 from "../images/imbd.png";
import img2 from "../images/fruit.png";

const Movies = () => {
  const movies = [
    {
      id: 1,
      image: movie,
      durationdate: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 2,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 3,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 4,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 5,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 6,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 7,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 8,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 9,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 10,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 11,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 12,
      image: movie,
      date: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
  ];
  return (
    <div className="movies-container">
      <section>
        <h3>Featured Movies</h3>
        <Link>
          <span>see more</span>
          <MdOutlineArrowForwardIos />
        </Link>
      </section>
      <div className="movies">
        {movies.map((x) => {
          return (
            <Link
              className="movie-card"
              data-testId="movie-card"
              to={`movie/${x.id}`}
            >
              <div className="svg-box">
                {x.id === 1 ? <span>TV SERIES</span> : <small></small>}
                <AiFillHeart />
              </div>
              <img
                data-testId="movie-poster"
                src={x.image}
                alt=""
                className="img"
              />
              <small data-testId="movie-release-date">{x.date}</small>
              <h4 data-testid="movie-title">{x.title}</h4>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="ratings">
                  <span>
                    <img src={img1} alt="" />
                    <small>{x.percent}</small>
                  </span>
                  <span>
                    <img src={img2} alt="" />
                    <small>{x.rating}</small>
                  </span>
                </div>
              </span>
              <small>{x.tags.join()}</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
