import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Profile from "./Profile/Profile";

import "./Account.css";

function Account({ page, ...props }) {
  let Component;
  let loggedIn;
  switch (page) {
    case "Profile":
      Component = Profile;
      loggedIn = true;
      break;
    default:
      Component = Profile;
  }

  return (
    <>
      <Header className="header header_theme_dark" loggedIn />
      <Content className="content content_page_account">
        <Component {...props} />
      </Content>
    </>
  );
}

export default Account;
