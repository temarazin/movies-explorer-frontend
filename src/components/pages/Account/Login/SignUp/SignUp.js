import { useFormWithValidation } from "../../../../../utils/hooks/useFormWithValidation";
import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import SimpleLink from "../../../../common/SimpleLink/SimpleLink";

import "./SignUp.css";

function SignUp({ onSignUp }) {
  const formData = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp(formData.values);
  }

  return (
    <Form
      className="form signup__form"
      name="sign-in-form"
      onSubmit={handleSubmit}
    >
      <div className="form__row">
        <Input
          name="name"
          type="text"
          label="Имя"
          placeholder="Введите имя"
          value={formData.values.name}
          pattern="[А-ЯЁа-яё\w\s\-]{2,}"
          required
          onChange={formData.handleChange}
          errors={formData.errors.name}
        />
      </div>
      <div className="form__row">
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="Введите почту"
          value={formData.values.email}
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          required
          onChange={formData.handleChange}
          errors={formData.errors.email}
        />
      </div>
      <div className="form__row">
        <Input
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          value={formData.values.password}
          required
          onChange={formData.handleChange}
          errors={formData.errors.password}
        />
      </div>
      <div className="signup__submit-wrapper">
        <Button
          type="submit"
          className="button button_theme_submit signup__submit"
          disabled={!formData.isValid}
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
