import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies loggedIn={true} />} />
      <Route path="/saved-movies" element={<SavedMovies loggedIn={true} />} />
    </Routes>
  );
}

export default App;
