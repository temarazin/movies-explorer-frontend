import CardLike from "./CardLike/CardLike";

import "./MoviesCard.css";
import cardCoverImage from "../../../images/card-example.jpg";

function MoviesCard({ isSaved = false, onlyRemove = false }) {
  const cardData = {
    duration: "1ч 32м",
    thumbnail: cardCoverImage,
    nameRU: "Криминальное чтиво",
  };

  const removeCard = (e) => {
    e.target.closest('.movies-card-list__item').remove();
  }

  return (
    <div className="movies-card">
      <img
        src={cardData.thumbnail}
        alt={`Обложка фильма "${cardData.nameRU}"`}
        className="movies-card__cover"
      />
      <div className="movies-card__description">
        <div className="movies-card__text-description">
          <h3 className="movies-card__name">{cardData.nameRU}</h3>
          <p className="movies-card__duration">{cardData.duration}</p>
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
