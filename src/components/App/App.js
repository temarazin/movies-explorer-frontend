import { Routes, Route } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Account from "../pages/Account/Account";
import NotFound from "../pages/NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { storage } from "../../utils/helper";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const filmsDb = useRef([]);

  useEffect(() => {
    if (storage.getItem("films")) {
      filmsDb.current = storage.getItem("films");
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={<Movies loggedIn={true} films={filmsDb} />}
        />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={true} />} />
        <Route path="/profile" element={<Account page="Profile" />} />
        <Route
          path="/sign-in"
          element={<Account page="Login" form="signin" />}
        />
        <Route
          path="/sign-up"
          element={<Account page="Login" form="signup" />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
