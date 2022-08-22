import { useState } from "react";

import ProfileData from "./ProfileData/ProfileData";
import ProfileForm from "./ProfileForm/ProfileForm";

import "./Profile.css";

function Profile() {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const openProfileForm = () => {
    setIsEditProfile(true);
  }

  const closeProfileForm = (e) => {
    e.preventDefault();
    setIsEditProfile(false);
  }

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__greetings">Привет, Виталий!</h1>
        {isEditProfile ? <ProfileForm oncloseProfileForm={closeProfileForm} /> : <ProfileData onEditProfile={openProfileForm} />}
      </div>
    </section>
  );
}

export default Profile;
