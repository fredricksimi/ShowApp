import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./apiKey";
import { Movie, iMovie } from "./Movie";

export const TrendingMovies = () => {
  const [tmovies, setTmovies] = useState<iMovie[]>([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theTrendingMovies = response.data.results as iMovie[];
        setTmovies(theTrendingMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {tmovies.map((movie) => (
        <Movie
          id={movie.id}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          original_title={movie.original_title}
          vote_average={movie.vote_average}
        />
      ))}
    </>
  );
};
