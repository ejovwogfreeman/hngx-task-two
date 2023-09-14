import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Loader from "./components/Loader";

function App() {
  let [movies, setMovies] = useState([]);
  let apiKey = "0bc0be4bcf9e9d819c6a7c589e08852e";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  const topTen = movies.slice(0, 10);

  return (
    <BrowserRouter>
      {!movies || movies.length <= 0 ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home topTen={topTen} />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
