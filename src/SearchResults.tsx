import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import getYear from "./components/getYear";
import axios from "axios";
import { API_KEY } from "./components/apiKey";

interface Result {
  results: [];
}

export const SearchResults = () => {
  const [results, setResults] = useState<Result | null>(null);
  const { search_query } = useParams();
  useEffect(() => {
    document.title = "ShowApp - Search Results"
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search_query}&page=1&include_adult=False`
      )
      .then((response) => setResults(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {results?.results.map((result) => (
            <div key={result["id"]} className="col-md-2">
              <div className="d-flex justify-content-center mt-5">
                <Link
                  to={
                    result["media_type"] === "movie"
                      ? `/movie-details/${result["id"]}`
                      : `/show-details/${result["id"]}`
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${result["poster_path"]}`}
                    className="img-fluid"
                    alt={result["id"]}
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-between px-3">
                <p>
                  {result["media_type"] === "movie"
                    ? getYear(result["release_date"])
                    : getYear(result["first_air_date"])}
                </p>
                <p>{result["vote_average"]}</p>
              </div>
              <Link
                to={
                  result["media_type"] === "movie"
                    ? `/movie-details/${result["id"]}`
                    : `/show-details/${result["id"]}`
                }
                style={{ color: "black", textDecoration: "none" }}
              >
                <p className="text-center">
                  <b>
                    {result["media_type"] === "movie"
                      ? result["title"]
                      : result["original_name"]}
                  </b>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
