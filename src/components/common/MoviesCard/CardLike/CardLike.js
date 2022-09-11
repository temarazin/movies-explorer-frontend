import "./CardLike.css";

function CardLike({ isActive, handleClick }) {
  const clickLike = () => {
    handleClick();
  }

  return (
    <button
      onClick={clickLike}
      className={`card-like ${isActive && "card-like_active"}`}
      type="button"
    ></button>
  );
}

export default CardLike;
