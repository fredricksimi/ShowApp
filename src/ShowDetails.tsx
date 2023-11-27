import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { API_KEY } from "./components/apiKey";

type Show = {
  id: number;
  first_air_date: string;
  overview: string;
  original_name: string;
  poster_path: string;
  production_companies: [];
  genres: [];
  networks: [];
  vote_average: number;
  seasons: [];
};

type Cast = {
  id: number;
  cast: [];
};

export const ShowDetails = () => {
  const { show_id } = useParams<{ show_id: string }>();
  const [details, setDetails] = useState<Show | null>(null);
  const [actors, setActors] = useState<Cast | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${show_id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theShow = response.data as Show;
        setDetails(theShow);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.themoviedb.org/3/tv/${show_id}/credits`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theCast = response.data as Cast;
        setActors(theCast);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container md:px-24 mx-auto px-8 mt-5">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 md:mt-24 mt-12">
            <div className="md:col-span-4 col-span-1">
              <div className="flex justify-center">
                <img src={`https://image.tmdb.org/t/p/original${details?.poster_path}`} className="md:h-96 md:w-auto h-80 w-auto"/>
              </div>
            </div>
            <div className="md:col-span-8 col-span-1">
              <h1 className="font-bold text-3xl mb-5">{details?.original_name}</h1>
              <p className="my-3">{details?.overview}</p>
              <p className="my-3">
                <span className="font-bold">IMDb Rating:</span> {details?.vote_average.toFixed(1)}
              </p>
              <p className="my-3">
                <span className="font-bold">First Air Date:</span> {details?.first_air_date}
              </p>
              <p className="my-3">
                <span className="font-bold">Cast:</span>{" "}
              {actors?.cast
                .slice(0, 7)
                .map((cast) => cast["name"])
                .join(", ")}
              </p>
              <p className="my-3">
                <span className="font-bold">No. of Seasons:</span> {details?.seasons.length}
              </p>
              <p className="my-3">
                <span className="font-bold">Genre(s):</span> {details?.genres.map((genre) => genre["name"]).join(", ")}
              </p>
              <p className="my-3">
                <span className="font-bold">Networks:</span> {details?.production_companies
                .map((proco) => proco["name"])
                .join(", ")}
              </p>
            </div>
        </div>
    </div>
    </>
  );
};
