import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies loggedIn={true} />} />
    </Routes>
  );
}

export default App;
