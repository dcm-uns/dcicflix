// que muestra una sola pelicula definida por fetchURL, con un precio.
//
// DATOS
//    movie.imagenFondo
//    movie.titulo
//    movie.resumen
//    movie.precio
//    movie.personas

import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";


function UnaPeli({ fetchUrl }) {

  const [movie, setMovie] = useState([]);

  // Obtener una Pelicula de la URL indicada
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  // Mostramos la información. Los campos de movie dependerán del JSON obtenido.
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie.imagenfondo})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.titulo}
        </h1>
        <h1 className="banner__description">
          {movie.resumen}
        </h1>
        <h1 className="banner__likes">
          A {movie.personas} les gusta esta pelicula
        </h1>
        <h1 className="banner__precio">
          {movie.precio} bitcoins
        </h1>

      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default UnaPeli;


/* 
// Esta es una consulta que puede hacerse
// en caso de que CORS traiga problemas.

const test = await axios.get("https://cors-anywhere.herokuapp.com/{URL completa}",{
  headers: {
    "ngrok-skip-browser-warning": "1",
    "access-control-allow-origin": "*",
  }
});

 */