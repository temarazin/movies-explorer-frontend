import { useNavigate } from "react-router-dom";

import Content from "../../Content/Content";
import Button from "../../common/Button/Button";

import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Content className="content content_page_blank">
      <section className="not-found">
        <p className="not-found__error">404</p>
        <p className="not-found__error-name">Страница не найдена</p>
        <Button onClick={() => navigate(-2, {replace: true})} className="button not-found__backlink">
          Назад
        </Button>
      </section>
    </Content>
  );
}

export default NotFound;
