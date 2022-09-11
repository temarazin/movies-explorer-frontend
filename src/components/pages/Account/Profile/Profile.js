import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";
import ProfileData from "./ProfileData/ProfileData";
import ProfileForm from "./ProfileForm/ProfileForm";

import "./Profile.css";

function Profile({ ...props }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const [isEditProfile, setIsEditProfile] = useState(false);

  const openProfileForm = () => {
    setIsEditProfile(true);
  };

  const closeProfileForm = () => {
    setIsEditProfile(false);
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__greetings">Привет, {name}!</h1>
        {isEditProfile ? (
          <ProfileForm
            oncloseProfileForm={closeProfileForm}
            onUpdateProfile={props.onUpdateProfile}
            user={{ name, email }}
          />
        ) : (
          <ProfileData
            onEditProfile={openProfileForm}
            onLogout={props.onLogout}
            user={{ name, email }}
          />
        )}
      </div>
    </section>
  );
}

export default Profile;
