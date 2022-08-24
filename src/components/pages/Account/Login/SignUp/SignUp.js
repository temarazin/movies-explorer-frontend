import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import SimpleLink from "../../../../common/SimpleLink/SimpleLink";

import "./SignUp.css";

function SignUp() {
  return (
    <Form className="form signup__form" name="sign-in-form">
      <div className="form__row">
        <Input type="text" label="Имя" placeholder="Введите имя" required />
      </div>
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
      <div className="signup__submit-wrapper">
        <Button
          type="submit"
          className="button button_theme_submit signup__submit"
        >
          Войти
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
