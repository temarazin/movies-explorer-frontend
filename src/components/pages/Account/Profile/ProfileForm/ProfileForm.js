import Form from "../../../../common/Form/Form";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

import "./ProfileForm.css";

function ProfileForm({ oncloseProfileForm }) {
  return (
    <Form className="form profile-form" name="profile-form">
      <div className="form__row">
        <Input
          type="text"
          label="Имя"
          placeholder="Введите имя"
          required
        />
      </div>
      <div className="form__row">
        <Input
          type="email"
          label="E-mail"
          placeholder="Введите почту"
          required
        />
      </div>
      <Button
        type="submit"
        className="button button_theme_submit profile-form__submit"
        onClick={oncloseProfileForm}
      >
        Сохранить
      </Button>
    </Form>
  );
}

export default ProfileForm;
