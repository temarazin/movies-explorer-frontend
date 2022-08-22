import { Link } from "react-router-dom";

import "./ProfileData.css";

function ProfileData({ onEditProfile }) {
  return (
    <div className="profile-data">
      <div className="profile-data__items">
        <div className="profile-data__row">
          <span className="profile-data__item-name">Имя</span>
          <span className="profile-data__item-value">Виталий</span>
        </div>
        <div className="profile-data__row">
          <span className="profile-data__item-name">E-mail</span>
          <span className="profile-data__item-value">pochta@yandex.ru</span>
        </div>
      </div>
      <ul className="profile-data__controls">
        <li className="profile-data__controls-item">
          <button className="profile-data__controls-btn" type="button" onClick={onEditProfile}>Редактировать</button>
        </li>
        <li className="profile-data__controls-item">
          <Link to="/sign-in" className="profile-data__controls-signout">Выйти из аккаунта</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileData;
