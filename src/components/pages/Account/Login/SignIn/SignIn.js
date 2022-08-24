import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import SimpleLink from "../../../../common/SimpleLink/SimpleLink";

import "./SignIn.css";

function SignIn() {
  return (
    <Form className="form signin__form" name="sign-in-form">
      <div className="form__row">
        <Input
          type="email"
          label="E-mail"
          placeholder="Введите почту"
          required
        />
      </div>
      <div className="form__row">
        <Input
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          required
        />
      </div>
      <div className="signin__submit-wrapper">
        <Button
          type="submit"
          className="button button_theme_submit signin__submit"
        >
          Войти
        </Button>
        <p className="signin__not-signup">
          <span className="signin__not-signup-text">Еще не зарегистрированы?</span>
          <SimpleLink to="/sign-up">Регистрация</SimpleLink>
        </p>
      </div>
    </Form>
  );
}

export default SignIn;
