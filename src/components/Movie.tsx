import { Link } from "react-router-dom";
import getYear from "./getYear";
export interface iMovie {
    id: number;
    poster_path: string;
    release_date: string;
    original_title: string;
    vote_average: number;
  }
export const Movie = ({id, poster_path, release_date, original_title, vote_average}: iMovie) => {
  return (
    <>
    <div key={id} className="md:mb-10 mb-5">
      <div className="flex justify-center">
        <Link to={`/movie-details/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={id.toString()}
          className="md:h-72 md:w-auto h-60 w-auto"
        /></Link>
      </div>
      <div className="flex justify-between sm:px-10 sm:pt-3 px-4 pt-2">
        <p>{getYear(release_date)}</p>
        <p>{vote_average.toFixed(1)}</p>
      </div>
      <Link
        to={`/movie-details/${id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h2 className="text-center font-bold sm:mt-2 mt-1">{original_title}</h2>
      </Link>
    </div>
    </>
  )
}
