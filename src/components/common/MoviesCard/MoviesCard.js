import CardLike from "./CardLike/CardLike";
import { imageBaseUrl } from "../../../utils/constants";

import "./MoviesCard.css";

function MoviesCard({ isSaved = false, onlyRemove = false, data }) {
  const cardData = data;

  const removeCard = (e) => {
    e.target.closest('.movies-card-list__item').remove();
  }

  return (
    <div className="movies-card">
      <img
        src={imageBaseUrl + cardData?.image?.formats?.thumbnail?.url}
        alt={`Обложка фильма "${cardData?.nameRU}"`}
        className="movies-card__cover"
      />
      <div className="movies-card__description">
        <div className="movies-card__text-description">
          <h3 className="movies-card__name">{cardData?.nameRU}</h3>
          <p className="movies-card__duration">{cardData?.duration} м</p>
        </div>
        <div className="movies-card__controls">
          {onlyRemove ? (
            <button class="movies-card__remove" onClick={removeCard}></button>
          ) : (
            <CardLike isActive={isSaved} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
