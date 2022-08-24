import Content from "../../Content/Content";
import SimpleLink from "../../common/SimpleLink/SimpleLink";

import "./NotFound.css";

function NotFound() {
  return (
    <Content className="content content_page_blank">
      <section className="not-found">
        <p className="not-found__error">404</p>
        <p className="not-found__error-name">Страница не найдена</p>
        <SimpleLink to="/" className="simple-link not-found__backlink">
          Назад
        </SimpleLink>
      </section>
    </Content>
  );
}

export default NotFound;
