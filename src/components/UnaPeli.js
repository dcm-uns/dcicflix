// UnaPeli es un clone de Banner.js 
// que muestra una sola pelicula definida por fetchURL, con precio.

import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";


function UnaPeli({fetchUrl, idioma}) {

    const [movie, setMovie] = useState([]);
    
  // Obtener una Pelicula de la URL indicada
  useEffect(() => {
    async function fetchData() {
      // En el microservicio queremos configurar el idioma
      //    const request = await axios.get(fetchUrl + "&lang=" + idioma);
      // pero por ahora usamos la URL configurada en requests
      const request = await axios.get(fetchUrl);
      setMovie(request.data.movie_results[0]);
      return request;
    }
    fetchData();
  }, [fetchUrl,idioma]);


  // Mostramos la información. Los campos de movie dependerán del JSON obtenido.
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.original_title}
        </h1>
        <h1 className="banner__description">
          {movie.overview}
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