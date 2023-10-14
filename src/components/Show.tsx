import { Link } from "react-router-dom"
import getYear from "./getYear"

export interface iShow {
    id: number,
    poster_path: string,
    first_air_date: string,
    original_name: string,
    vote_average: number,
  }

export const Show = ({id, poster_path, first_air_date, original_name, vote_average}:iShow) => {
  return (
    <>
    <div key={id} className="col-md-2">
          <div className="d-flex justify-content-center mt-5">
            <Link to={`show-details/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                className="img-fluid"
                alt={id.toString()}
              />
            </Link>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>{getYear(first_air_date)}</p>
            <p>{vote_average.toFixed(1)}</p>
          </div>
          <Link to={`show-details/${id}`} style={{color: 'black', textDecoration: 'none'}}>
          <p className="text-center"><b>{original_name}</b></p>
          </Link>
        </div>
    </>
  )
}
