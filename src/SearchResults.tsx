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
    document.title = "ShowApp - Search Results";
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
      <div className="container md:px-24 px-8 mx-auto mt-5">
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-2 gap-3 mt-8">
        {results?.results.map((result) => (
          <div key={result["id"]} className="md:mb-10 mb-5">
            <div className="flex justify-center">
              <Link
                  to={
                    result["media_type"] === "movie"
                      ? `/movie-details/${result["id"]}`
                      : `/show-details/${result["id"]}`
                  }
                >
                  <img
                src={`https://image.tmdb.org/t/p/original${result["poster_path"]}`}
                className="md:h-72 md:w-auto h-60 w-auto"alt={result["id"]}
              />
                </Link>
              
            </div>
            <div className="flex justify-between sm:px-10 sm:pt-3 px-4 pt-2">
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
          </div>))}
        </div>
      </div>
    </>
  );
};
