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
    <div key={id} className="col-md-2">
          <div className="d-flex justify-content-center mt-5">
            <Link to={`/movie-details/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                className="img-fluid"
                alt={id.toString()}
              />
            </Link>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>{getYear(release_date)}</p>
            <p>{vote_average.toFixed(1)}</p>
          </div>
          <Link
            to={`/movie-details/${id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p className="text-center">
              <b>{original_title}</b>
            </p>
          </Link>
        </div>
    </>
  )
}
