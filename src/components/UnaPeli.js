import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";

function UnaPeli({fetchUrl, idioma}) {

    const [movie, setMovie] = useState([]);
    
  // Obtener una Pelicula de la URL indicada
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl,idioma]);


  // Mostramos la información. Los campos de movie dependerán del JSON obtenido.
  // Mostramos Title y Plot
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

export default UnaPeli;
