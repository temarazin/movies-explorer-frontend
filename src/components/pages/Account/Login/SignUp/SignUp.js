import { useState } from "react";

import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import SimpleLink from "../../../../common/SimpleLink/SimpleLink";

import "./SignUp.css";

function SignUp({ onSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp({ name, email, password });
  }

  return (
    <Form
      className="form signup__form"
      name="sign-in-form"
      onSubmit={handleSubmit}
    >
      <div className="form__row">
        <Input
          type="text"
          label="Имя"
          placeholder="Введите имя"
          value={name}
          required
          onChange={handleNameInput}
        />
      </div>
      <div className="form__row">
        <Input
          type="email"
          label="E-mail"
          placeholder="Введите почту"
          value={email}
          required
          onChange={handleEmailInput}
        />
      </div>
      <div className="form__row">
        <Input
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          value={password}
          required
          onChange={handlePasswordInput}
        />
      </div>
      <div className="signup__submit-wrapper">
        <Button
          type="submit"
          className="button button_theme_submit signup__submit"
        >
          Регистрация
        </Button>
        <p className="signup__already-signup">
          <span className="signup__already-signup-text">
            Уже зарегистрированы?
          </span>
          <SimpleLink to="/sign-in">Войти</SimpleLink>
        </p>
      </div>
    </Form>
  );
}

export default SignUp;
