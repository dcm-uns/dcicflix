import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function TopMovie() {

  const [movie, setMovie] = useState([]);

  // Obtener el listado de peliculas originales de Netflix
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.miTopMovie);
      console.log(request.data);
      setMovie(
        request.data
      );
      return request;
    }
    fetchData();
  }, []);


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie.Poster})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.Title}
        </h1>
        <h1 className="banner__description">
          {movie.Plot}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default TopMovie;
