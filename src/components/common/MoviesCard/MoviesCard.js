import { formatDuration } from "../../../utils/helper";
import CardLike from "./CardLike/CardLike";

import "./MoviesCard.css";

function MoviesCard({ savedMovie = undefined, onlyRemove = false, data, onLike, onDislike }) {
  const cardData = data;

  const removeCard = (e) => {
    onDislike(savedMovie._id)
      .then(() => {
        e.target.closest('.movies-card-list__item').remove();
      });
  }

  const handleLikeClick = () => {
    if (savedMovie) {
      onDislike(savedMovie._id);
    } else {
      console.log('movieId', data.movieId);
      onLike(data);
    }
  }

  return (
    <div className="movies-card">
      <img
        src={cardData?.thumbnail}
        alt={`Обложка фильма "${cardData?.nameRU}"`}
        className="movies-card__cover"
      />
      <div className="movies-card__description">
        <div className="movies-card__text-description">
          <h3 className="movies-card__name">{cardData?.nameRU}</h3>
          <p className="movies-card__duration">{formatDuration(cardData?.duration)}</p>
        </div>
        <div className="movies-card__controls">
          {onlyRemove ? (
            <button className="movies-card__remove" onClick={removeCard}></button>
          ) : (
            <CardLike isActive={savedMovie ? true : false} handleClick={handleLikeClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
