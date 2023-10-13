import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface TopMovie {
  id: number,
  poster_path: string,
  release_date: string,
  original_title: string,
  vote_average: number,
}

export const TopRatedMovies = () => {

  function getYear(thedate: string) {
    const d = new Date(thedate)
    return d.getFullYear();
  }

  const [tmovies, setTmovies] = useState<TopMovie[]>([]);

  useEffect(() => {
    const API_KEY = 'b7c76c452048ffd45da7273b7620bb43'
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated",{
          params: {
            api_key: API_KEY
          }
        }
      )
      .then((response) => {
        const theTrendingMovies = response.data.results as TopMovie[];
        console.log(theTrendingMovies)
        setTmovies(theTrendingMovies)
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      {tmovies.map((movie) => (
        <div key={movie.id} className="col-md-2">
          <div className="d-flex justify-content-center mt-5">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="img-fluid"
              alt={movie.id.toString()}
            />
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>{getYear(movie.release_date)}</p>
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <Link to={`movie-details/${movie.id}`}>
          <p className="text-center"><b>{movie.original_title}</b></p>
          </Link>
        </div>
      ))}
    </>
  );
};
