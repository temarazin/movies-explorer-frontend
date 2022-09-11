import { useEffect, useState } from "react";

import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { useFormWithValidation } from "../../../../../utils/hooks/useFormWithValidation";

import "./ProfileForm.css";

function ProfileForm({ oncloseProfileForm, onUpdateProfile, user }) {

  const formData = useFormWithValidation();
  const [isNoChanges, setIsNoChanges] = useState(false);

  useEffect(() => {
    formData.resetForm({name: user.name, email: user.email});
  }, []);

  useEffect(() => {
    const {name, email} = formData.values;
    setIsNoChanges(name === user.name && email === user.email);
  }, [formData, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData.values)
      .then((res) => {
        oncloseProfileForm();
      })
  }

  return (
    <Form className="form profile-form" name="profile-form" onSubmit={handleSubmit}>
      <div className="form__row">
        <Input
          name="name"
          type="text"
          label="Имя"
          placeholder="Введите имя"
          value={formData.values.name}
          pattern="[А-ЯЁа-яё\w\s\-]{2,}"
          onChange={formData.handleChange}
          required
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
          errors={formData.errors.email}
          onChange={formData.handleChange}
        />
      </div>
      <Button
        type="submit"
        className="button button_theme_submit profile-form__submit"
        disabled={!formData.isValid || isNoChanges}
      >
        Сохранить
      </Button>
    </Form>
  );
}

export default ProfileForm;
