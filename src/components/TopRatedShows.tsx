import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_KEY } from "./apiKey";
import getYear from "./getYear";

interface TopShow {
  id: number,
  poster_path: string,
  first_air_date: string,
  original_name: string,
  vote_average: number,
}

export const TopRatedShows = () => {

  const [tshows, setTshows] = useState<TopShow[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated",{
          params: {
            api_key: API_KEY
          }
        }
      )
      .then((response) => {
        const theTrendingMovies = response.data.results as TopShow[];
        setTshows(theTrendingMovies)
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      {tshows.map((show) => (
        <div key={show.id} className="md:mb-10 mb-5">
        <div className="flex justify-center">
        <Link to={`/show-details/${show.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
            className="md:h-72 md:w-auto h-60 w-auto" alt={show.id.toString()}
          />
          </Link>
        </div>
        <div className="flex justify-between sm:px-10 sm:pt-3 px-4 pt-2">
          <p>{getYear(show.first_air_date)}</p>
          <p>{show.vote_average.toFixed(1)}</p>
        </div>
        <Link to={`/show-details/${show.id}`} style={{color: 'black', textDecoration: 'none'}}>
          <h2 className="text-center font-bold sm:mt-2 mt-1">{show.original_name}</h2>
        </Link>
      </div>
      ))}
    </>
  );
};
