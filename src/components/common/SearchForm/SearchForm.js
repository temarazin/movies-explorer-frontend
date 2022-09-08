import { useState, useEffect } from "react";

import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { storage } from "../../../utils/helper";

import "./SearchForm.css";

function SearchForm({
  onSearch,
  onShowMsg,
  includeShorts,
  setIncludeShorts,
  isSavedMoviesPage = false,
  restoreSearch = false,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleIncludeShortsChange(e) {
    setIncludeShorts(e.target.checked);
    let localSets = storage.getItem("searchParams");
    if (localSets) {
      localSets.includeShorts = e.target.checked;
    } else {
      localSets = {includeShorts: e.target.checked, searchQuery: ''}
    }
    storage.setItem("searchParams", localSets);
  }

  function handleSubmit(e) {
    e?.preventDefault();
    if (searchQuery.length > 0 || isSavedMoviesPage) {
      onSearch({ searchQuery, includeShorts });
    } else {
      onShowMsg({ text: "Введите запрос", type: "error" });
    }
  }

  useEffect(() => {
    if (storage.getItem("searchParams") && restoreSearch) {
      const { searchQuery = "", includeShorts = false } =
        storage.getItem("searchParams");
      setSearchQuery(searchQuery);
      setIncludeShorts(includeShorts);
    }
  }, []);

  return (
    <section className="search-form">
      <div className="search-form__inner">
        <Form className="form search-form__form" onSubmit={handleSubmit}>
          <div className="search-form__search-row">
            <Input
              name="search-query"
              className="input search-form__query-input"
              type="text"
              value={searchQuery}
              placeholder="Фильм"
              onChange={handleSearchChange}
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
              onChange={handleIncludeShortsChange}
              checked={includeShorts}
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
