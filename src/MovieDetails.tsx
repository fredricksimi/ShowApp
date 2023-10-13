import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";

type Movie = {
  id: number;
  release_date: string;
  overview: string;
  original_title: string;
  poster_path: string;
  production_companies: [];
  genres: [];
  vote_average: number;
  runtime: number;
};

type Cast = {
  id: number;
  cast: [];
};

const imgStyle = {
  height: "400px",
  width: "auto",
};

export const MovieDetails = () => {
  const { movie_id } = useParams<{ movie_id: string }>();
  const [details, setDetails] = useState<Movie | null>(null);
  const [actors, setActors] = useState<Cast | null>(null);

  useEffect(() => {
    const API_KEY = "b7c76c452048ffd45da7273b7620bb43";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        const theTrendingMovies = response.data as Movie;
        setDetails(theTrendingMovies);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, {
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
              <b>{details?.original_title}</b>
            </h3>
            <p className="mt-3">{details?.overview}</p>
            <p>
              <b>IMDb Rating:</b> {details?.vote_average.toFixed(1)}
            </p>
            <p>
              <b>Release Date:</b> {details?.release_date}
            </p>
            <p>
              <b>Cast: </b>{" "}
              {actors?.cast
                .slice(0, 7)
                .map((cast) => cast["name"])
                .join(", ")}
            </p>
            <p>
              <b>Runtime:</b> {details?.runtime} minutes
            </p>
            <p>
              <b>Genre(s): </b>
              {details?.genres.map((genre) => genre["name"]).join(", ")}
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
