import { useState } from "react";

import { useFormWithValidation } from "../../../../../utils/hooks/useFormWithValidation";
import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import SimpleLink from "../../../../common/SimpleLink/SimpleLink";

import "./SignIn.css";

function SignIn({ onSignIn }) {
  const formData = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn(formData.values);
  }

  return (
    <Form
      className="form signin__form"
      name="sign-in-form"
      onSubmit={handleSubmit}
    >
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
      <div className="signin__submit-wrapper">
        <Button
          type="submit"
          className="button button_theme_submit signin__submit"
          disabled={!formData.isValid}
        >
          Войти
        </Button>
        <p className="signin__not-signup">
          <span className="signin__not-signup-text">
            Еще не зарегистрированы?
          </span>
          <SimpleLink to="/sign-up">Регистрация</SimpleLink>
        </p>
      </div>
    </Form>
  );
}

export default SignIn;
