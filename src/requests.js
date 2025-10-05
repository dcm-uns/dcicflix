// KEY de TMDB
const API_KEY = "62e9afa9b26ec1658e4f7c572663a19b";

// coleccion de URLs que proveen json.
// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchStarWars: `find/tt2527338?api_key=${API_KEY}&language=en-US&external_source=imdb_id`,
  fetchFake: "https://dcm-uns.github.io/pelicula.js",
  fetchFakeComentario: "https://dcm-uns.github.io/comentario.js"
};
export default requests;

