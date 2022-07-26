import Button from "../../../../common/Button/Button";

import "./ProfileData.css";

function ProfileData({ onEditProfile, onLogout, user }) {
  return (
    <div className="profile-data">
      <div className="profile-data__items">
        <div className="profile-data__row">
          <span className="profile-data__item-name">Имя</span>
          <span className="profile-data__item-value">{user.name}</span>
        </div>
        <div className="profile-data__row">
          <span className="profile-data__item-name">E-mail</span>
          <span className="profile-data__item-value">{user.email}</span>
        </div>
      </div>
      <ul className="profile-data__controls">
        <li className="profile-data__controls-item">
          <button
            className="profile-data__controls-btn"
            type="button"
            onClick={onEditProfile}
          >
            Редактировать
          </button>
        </li>
        <li className="profile-data__controls-item">
          <Button onClick={onLogout} className="profile-data__controls-signout">
            Выйти из аккаунта
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileData;
