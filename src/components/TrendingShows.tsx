import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./apiKey";
import { iShow, Show } from "./Show";

export const TrendingShows = () => {
  const [tshows, setTshows] = useState<iShow[]>([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/tv/week", {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theTrendingShows = response.data.results as iShow[];
        setTshows(theTrendingShows);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {tshows.map((show) => (
        <Show
          id={show.id}
          poster_path={show.poster_path}
          first_air_date={show.first_air_date}
          original_name={show.original_name}
          vote_average={show.vote_average}
        />
      ))}
    </>
  );
};
