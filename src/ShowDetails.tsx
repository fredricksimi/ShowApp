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

const imgStyle = {
  height: "400px",
  width: "auto",
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
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <img
                src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
                className="img-fluid"
                style={imgStyle}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h3>
              <b>{details?.original_name}</b>
            </h3>
            <p className="mt-3">{details?.overview}</p>
            <p>
              <b>IMDb Rating:</b> {details?.vote_average.toFixed(1)}
            </p>
            <p>
              <b>First Air Date:</b> {details?.first_air_date}
            </p>
            <p>
              <b>Cast: </b>{" "}
              {actors?.cast
                .slice(0, 7)
                .map((cast) => cast["name"])
                .join(", ")}
            </p>
            <p>
              <b>No. of Seasons:</b> {details?.seasons.length}
            </p>
            <p>
              <b>Genre(s): </b>
              {details?.genres.map((genre) => genre["name"]).join(", ")}
            </p>
            <p>
              <b>Networks:</b> {details?.networks.map((netw) => netw["name"])}
            </p>
            <p>
              <b>Production Companies: </b>
              {details?.production_companies
                .map((proco) => proco["name"])
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
