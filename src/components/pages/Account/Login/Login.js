import Logo from "../../../common/Logo/Logo";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import "./Login.css";

function Login({ form, ...props }) {
  let Component;

  switch (form) {
    case "signin":
      Component = SignIn;
      break;
    case "signup":
      Component = SignUp;
      break;
    default:
      Component = SignIn;
  }

  return (
    <section className="login">
      <Logo className="logo login__logo" />
      <h1 className="login__header">Добро пожаловать!</h1>
      <Component {...props} />
    </section>
  );
}

export default Login;
