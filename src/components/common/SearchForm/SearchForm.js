import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__inner">
        <Form class="form search-form__form">
          <div className="search-form__search-row">
            <Input
              name="search-query"
              className="input search-form__query-input"
              type="text"
              placeholder="Фильм"
            />
            <Button
              className="button button_theme_submit search-form__submit"
              type="submit"
            >
              Найти
            </Button>
          </div>
          <div className="search-form__checkbox-wrapper">
            <Checkbox
              className="checkbox checkbox_theme_toggler search-form__checkbox"
              name="includeShortMovies"
              value="Y"
            >
              Короткометражки
            </Checkbox>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default SearchForm;
