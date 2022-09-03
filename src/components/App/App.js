import { Routes, Route, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

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
  const [msgList, setMsgList] = useState([{ text: "Сообщение" }]);
  const filmsDb = useRef([]);

  // setMsgList([...msgList, ]);

  let navigate = useNavigate();

  useEffect(() => {
    if (storage.getItem("films")) {
      filmsDb.current = storage.getItem("films");
    }
  }, []);

  const handleSignIn = ({ password, email }) => {
    mainApi
      .signIn({ password, email })
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((e) => {
        // console.log(e);
        showMsg({ text: e, type: 'error' });
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
        <Route
          path="/movies"
          element={<Movies loggedIn={true} films={filmsDb} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        />
        <Route path="/profile" element={<Account page="Profile" />} />
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
