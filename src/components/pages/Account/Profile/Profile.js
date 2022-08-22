import ProfileData from './ProfileData/ProfileData';

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__greetings">Привет, Виталий!</h1>
        <ProfileData />
      </div>
    </section>
  );
}

export default Profile;
