import { Navbar } from "./components/Navbar";
import { TopRatedShows } from "./components/TopRatedShows";
import { TopRatedMovies } from "./components/TopRatedMovies";
import { useEffect } from 'react'

export const TopRated = () => {
  useEffect(() => {
    document.title = "ShowApp - Top Rated";
  })
  return (
    <>
      <Navbar />
      <div className="container md:px-24 px-8 mx-auto mt-5">
      <h1 className="text-black font-bold text-2xl mb-3 mt-12">Top Rated Shows</h1>
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-2 gap-3 mt-8">
          <TopRatedShows />
        </div>
        <h3 className="mt-5">
          <b>Top Rated Movies</b>
        </h3>
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-2 gap-3 mt-8">
          <TopRatedMovies />
        </div>
      </div>
    </>
  );
};
