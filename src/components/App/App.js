import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";


import "./App.css";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
