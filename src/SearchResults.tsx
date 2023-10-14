import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import axios from 'axios'

export const SearchResults = () => {
    const [results, setResults] = useState([])
    const { search_query } = useParams()

    axios.get(`https://api.themoviedb.org/3/search/multi?query=${search_query}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  return (
    <>
    <Navbar/>
    
    </>
  )
}
