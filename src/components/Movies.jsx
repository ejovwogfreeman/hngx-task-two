import React from "react";
import movie from "../images/movie.png";
import "../css/Movies.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = [
    {
      id: 1,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 2,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 3,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 4,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 5,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 6,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 7,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 8,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 9,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 10,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 11,
      image: movie,
      duration: "USA, 2016 - Current",
      title: "Spier Man",
      rating: "89/100",
      percent: "87%",
      tags: ["Action", "Adventure", "Horror"],
    },
    {
      id: 12,
      image: movie,
      duration: "USA, 2016 - Current",
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
            <Link to={`movie/${x.id}`}>
              <img src={x.image} alt="" />
              <small>{x.duration}</small>
              <h4>{x.title}</h4>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <small>{x.rating}</small>
                <small>{x.percent}</small>
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
