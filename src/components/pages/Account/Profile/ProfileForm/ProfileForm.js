import { useState } from "react";

import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

import "./ProfileForm.css";

function ProfileForm({ oncloseProfileForm, onUpdateProfile, user }) {

  const [inputName, setInputName] = useState(user.name);
  const [inputEmail, setInputEmail] = useState(user.email);

  const changeName = (e) => {
    setInputName(e.target.value);
  }

  const changeEmail = (e) => {
    setInputEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({name: inputName, email: inputEmail});
    oncloseProfileForm();
  }

  return (
    <Form className="form profile-form" name="profile-form" onSubmit={handleSubmit}>
      <div className="form__row">
        <Input
          type="text"
          label="Имя"
          placeholder="Введите имя"
          value={inputName}
          required
          onChange={changeName}
        />
      </div>
      <div className="form__row">
        <Input
          type="email"
          label="E-mail"
          placeholder="Введите почту"
          value={inputEmail}
          required
          onChange={changeEmail}
        />
      </div>
      <Button
        type="submit"
        className="button button_theme_submit profile-form__submit"
        // onClick={oncloseProfileForm}
      >
        Сохранить
      </Button>
    </Form>
  );
}

export default ProfileForm;
