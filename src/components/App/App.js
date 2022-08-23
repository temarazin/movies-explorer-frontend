import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Account from "../pages/Account/Account";
import NotFound from "../pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies loggedIn={true} />} />
      <Route path="/saved-movies" element={<SavedMovies loggedIn={true} />} />
      <Route path="/profile" element={<Account page="Profile" />} />
      <Route path="/sign-in" element={<Account page="Login" form="signin" />} />
      <Route path="/sign-up" element={<Account page="Login" form="signup" />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
