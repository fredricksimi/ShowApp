import { Navbar } from "./components/Navbar";
import { TrendingMovies } from "./components/TrendingMovies";
import { TrendingShows } from "./components/TrendingShows";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "ShowApp - Home";
  });
  return (
    <>
      <Navbar />
      <div className="container md:px-24 px-8 mx-auto mt-5">
        <h3 className="text-black font-bold text-2xl mb-3 mt-12">Trending Movies</h3>
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-2 gap-3 mt-8">
          <TrendingMovies />
        </div>
        <h3 className="text-black font-bold text-2xl mb-3 mt-12">Trending Shows</h3>
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-2 gap-3 mt-8">
          <TrendingShows />
        </div>
      </div>
    </>
  );
};
