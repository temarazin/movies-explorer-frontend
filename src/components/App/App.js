import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

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
  const filmsDb = useRef([]);

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (storage.getItem("films")) {
      filmsDb.current = storage.getItem("films");
    }

    mainApi.getUser()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        navigate(location.pathname);
      })
      .catch((e) => {
        setCurrentUser({});
      })
  }, []);

  const handleSignIn = ({ password, email }) => {
    mainApi
      .signIn({ password, email })
      .then((res) => {
        setLoggedIn(true);
        showMsg({text: res.message, type: 'success'});
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
        navigate("/sign-in");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const showMsg = (item) => {
    setMsgList([item, ...msgList]);
  };

  const removeMsg = (key) => {
    setMsgList(msgList.filter((item) => item.key !== key));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            path="/movies"
            element={<Movies loggedIn={loggedIn} films={filmsDb} />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies loggedIn={loggedIn} />}
          />
          <Route path="/profile" element={<Account page="Profile" />} />
        </Route>
        <Route
          path="/sign-in"
          element={
            <Account page="Login" form="signin" onSignIn={handleSignIn} />
          }
        />
        <Route
          path="/sign-up"
          element={
            <Account page="Login" form="signup" onSignUp={handleSignUp} />
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
