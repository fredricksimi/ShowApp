import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { TopRated } from "./TopRated";
import { ShowDetails } from "./ShowDetails";
import { MovieDetails } from "./MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="top-rated" element={<TopRated />} />
        <Route path="show-details/:show_id" element={<ShowDetails/>}/>
        <Route path="movie-details/:movie_id" element={<MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
