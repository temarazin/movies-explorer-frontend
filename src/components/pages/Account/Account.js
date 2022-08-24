import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";

import "./Account.css";

function Account({ page, ...props }) {
  let Component;
  let showHeader;
  switch (page) {
    case "Profile":
      Component = Profile;
      showHeader = true;
      break;
    case "Login":
      Component = Login;
      showHeader = false;
      break;
    default:
      Component = Profile;
      showHeader = true;
  }

  return (
    <>
      {showHeader && (
        <Header className="header header_theme_dark" loggedIn={true} />
      )}

      <Content className="content content_page_blank">
        <Component {...props} />
      </Content>
    </>
  );
}

export default Account;
