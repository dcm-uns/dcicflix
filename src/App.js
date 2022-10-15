import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedias" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
