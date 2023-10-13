import { Navbar } from "./components/Navbar";
import { TrendingMovies } from "./components/TrendingMovies";
import { TrendingShows } from "./components/TrendingShows";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="mt-5">
          <b>Trending Movies</b>
        </h3>
        <div className="row">
          <TrendingMovies />
        </div>
        <h3 className="mt-5">
          <b>Trending Shows</b>
        </h3>
        <div className="row">
          <TrendingShows />
        </div>
      </div>
    </>
  );
};
