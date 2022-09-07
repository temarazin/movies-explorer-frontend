import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import ProtectedRoute from "../hoc/ProtectedRoute/ProtectedRoute";
import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Account from "../pages/Account/Account";
import NotFound from "../pages/NotFound/NotFound";
import InfoMsg from "../common/InfoMsg/InfoMsg";
import Msg from "../common/InfoMsg/Msg/Msg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { storage } from "../../utils/helper";

import "./App.css";
import { mainApi } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [msgList, setMsgList] = useState([]);
  const [filmsDb, setFilmsDb] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (storage.getItem("films")) {
      setFilmsDb(storage.getItem("films"));
    }

    if (storage.getItem("savedFilms")) {
      setSavedFilms(storage.getItem("savedFilms"));
    } else {
      mainApi.getMovies()
        .then((data) => {
          setSavedFilms(data);
        })
        .catch((e) => showMsg({text: e, type: 'error'}))
    }

    mainApi
      .getUser()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        navigate(location.pathname);
      })
      .catch((e) => {
        setCurrentUser({});
      });
  }, []);

  const handleSignIn = ({ password, email }) => {
    mainApi
      .signIn({ password, email })
      .then((res) => {
        setLoggedIn(true);
        showMsg({ text: res.message, type: "success" });
        return mainApi.getUser();
      })
      .then((user) => {
        setCurrentUser(user);
        navigate("/movies");
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  };

  const handleSignUp = ({ name, email, password }) => {
    mainApi
      .signUp({ name, email, password })
      .then((res) => {
        showMsg({ text: "Вы успешно зарегистрировались", type: "success" });
        navigate("/sign-in");
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then((res) => {
        showMsg({ text: res.message, type: "success" });
        setLoggedIn(false);
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  };

  const handleUpdateProfile = (data) => {
    mainApi
      .updateUser(data)
      .then((user) => {
        setCurrentUser(user);
        showMsg({ text: "Профиль обновлен", type: "success" });
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  };

  const showMsg = (item) => {
    setMsgList([item, ...msgList]);
  };

  const removeMsg = (key) => {
    setMsgList(msgList.filter((item) => item.key !== key));
  };

  const saveFilm = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedFilms([...savedFilms, data]);
        storage.setItem('savedFilms', [...savedFilms, data])
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  }

  const removeFilm = (movieId) => {
    return mainApi
      .deleteMovie(movieId)
      .then(() => {
        const res = savedFilms.filter((item) => item._id !== movieId)
        setSavedFilms(res);
        storage.setItem('savedFilms', res);
      })
      .catch((e) => {
        showMsg({ text: e, type: "error" });
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            path="/movies"
            element={
              <Movies
                loggedIn={loggedIn}
                films={filmsDb}
                savedFilms={savedFilms}
                onSaveFilm={saveFilm}
                onRemoveFilm={removeFilm}
                onShowMsg={showMsg}
                setFilmsDb={setFilmsDb}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                films={filmsDb}
                savedFilms={savedFilms}
                onRemoveFilm={removeFilm}
                onShowMsg={showMsg}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Account
                page="Profile"
                onLogout={handleLogout}
                onUpdateProfile={handleUpdateProfile}
              />
            }
          />
        </Route>
        <Route
          path="/sign-in"
          element={
            <Account
              page="Login"
              form="signin"
              loggedIn={loggedIn}
              onSignIn={handleSignIn}
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <Account
              page="Login"
              form="signup"
              loggedIn={loggedIn}
              onSignUp={handleSignUp}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {msgList.length > 0 && (
        <InfoMsg>
          {msgList.map((item, i) => {
            item.key = i;
            return <Msg key={item.key} item={item} onRemove={removeMsg} />;
          })}
        </InfoMsg>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
