import React from "react";
import "../css/Movies.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import img1 from "../images/imbd.png";
import img2 from "../images/fruit.png";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Movies = ({ topTen, searchResults, loading }) => {
  const handleAddToFavorite = (title) => {
    toast.success(title + " HAS BEEN ADDEDD TO FAVORITE");
  };
  console.log(searchResults);
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
        {loading ? (
          <Loader />
        ) : searchResults.length > 0 ? (
          <>
            {searchResults.map((x) => {
              return (
                <Link
                  className="movie-card"
                  data-testid="movie-card"
                  to={`movie/${x.id}`}
                  key={x.id}
                >
                  <div className="svg-box">
                    {searchResults[0].title === x.title ? (
                      <span>TV SERIES</span>
                    ) : (
                      <small></small>
                    )}
                    <AiFillHeart
                      onClick={() => handleAddToFavorite(x.title.toUpperCase())}
                    />
                  </div>
                  <img
                    data-testid="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                    alt=""
                    className="img"
                  />
                  <small
                    data-testid="movie-release-date"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    {x.release_date}
                  </small>
                  <h4 data-testid="movie-title">{x.original_title}</h4>
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
                        <small>{x.popularity}/100</small>
                      </span>
                      <span>
                        <img src={img2} alt="" />
                        <small>{x.popularity}%</small>
                      </span>
                    </div>
                  </span>
                  <small>Action, Adventure, Horror</small>
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {topTen.map((x) => {
              return (
                <Link
                  className="movie-card"
                  data-testid="movie-card"
                  to={`movie/${x.id}`}
                  key={x.id}
                >
                  <div className="svg-box">
                    {topTen[0].title === x.title ? (
                      <span>TV SERIES</span>
                    ) : (
                      <small></small>
                    )}
                    <AiFillHeart
                      onClick={() => handleAddToFavorite(x.title.toUpperCase())}
                    />
                  </div>
                  <img
                    data-testid="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                    alt=""
                    className="img"
                  />
                  <small
                    data-testid="movie-release-date"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    {x.release_date}
                  </small>
                  <h4 data-testid="movie-title">{x.original_title}</h4>
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
                        <small>{x.popularity}/100</small>
                      </span>
                      <span>
                        <img src={img2} alt="" />
                        <small>{x.popularity}%</small>
                      </span>
                    </div>
                  </span>
                  <small>Action, Adventure, Horror</small>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
