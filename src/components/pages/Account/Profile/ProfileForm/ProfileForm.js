import { useEffect } from "react";

import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { useFormWithValidation } from "../../../../../utils/hooks/useFormWithValidation";

import "./ProfileForm.css";

function ProfileForm({ oncloseProfileForm, onUpdateProfile, user }) {

  const formData = useFormWithValidation();

  useEffect(() => {
    formData.resetForm({name: user.name, email: user.email});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData.values);
    oncloseProfileForm();
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
        disabled={!formData.isValid}
      >
        Сохранить
      </Button>
    </Form>
  );
}

export default ProfileForm;
