import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import TopMovie from "./components/TopMovie";
import requests from "./requests";


function App() {
  return (
    <div className="App">
      <Nav />
      {/*<Banner />*/}
      <TopMovie />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedias" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
