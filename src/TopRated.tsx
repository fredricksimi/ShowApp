import { Navbar } from "./components/Navbar";
import { TopRatedShows } from "./components/TopRatedShows";
import { TopRatedMovies } from "./components/TopRatedMovies";
import { useEffect } from 'react'
import Filter from "./components/Filter";

export const TopRated = () => {
  useEffect(() => {
    document.title = "ShowApp - Top Rated";
  })
  return (
    <>
      <Navbar />
      <Filter />
      <div className="container">
        <h3 className="mt-5">
          <b>Top Rated Shows</b>
        </h3>
        <div className="row">
          <TopRatedShows />
        </div>
        <h3 className="mt-5">
          <b>Top Rated Movies</b>
        </h3>
        <div className="row">
          <TopRatedMovies />
        </div>
      </div>
    </>
  );
};
