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
    <div key={id} className="md:mb-10 mb-5">
      <div className="flex justify-center">
      <Link to={`show-details/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="md:h-72 md:w-auto h-60 w-auto" alt={id.toString()}
        />
        </Link>
      </div>
      <div className="flex justify-between sm:px-10 sm:pt-3 px-4 pt-2">
        <p>{getYear(first_air_date)}</p>
        <p>{vote_average.toFixed(1)}</p>
      </div>
      <Link to={`show-details/${id}`} style={{color: 'black', textDecoration: 'none'}}>
        <h2 className="text-center font-bold sm:mt-2 mt-1">{original_name}</h2>
      </Link>
    </div>
    </>
  )
}
