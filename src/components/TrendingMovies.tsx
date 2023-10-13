import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export const TrendingMovies = () => {
  function getYear(thedate: string) {
    const d = new Date(thedate);
    return d.getFullYear();
  }

  const [tmovies, setTmovies] = useState<Movie[]>([]);

  useEffect(() => {
    const API_KEY = "b7c76c452048ffd45da7273b7620bb43";
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theTrendingMovies = response.data.results as Movie[];
        setTmovies(theTrendingMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {tmovies.map((movie) => (
        <div key={movie.id} className="col-md-2">
          <div className="d-flex justify-content-center mt-5">
            <Link to={`movie-details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="img-fluid"
                alt={movie.id.toString()}
              />
            </Link>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>{getYear(movie.release_date)}</p>
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <Link to={`movie-details/${movie.id}`}>
            <p className="text-center">
              <b>{movie.title}</b>
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};
