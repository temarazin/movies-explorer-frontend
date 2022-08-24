import { useState } from "react";

import "./CardLike.css";

function CardLike({ isActive }) {
  const [ isLiked, setIsLiked ] = useState(isActive || false);
  const clickLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <button
      onClick={clickLike}
      className={`card-like ${isLiked && "card-like_active"}`}
      type="button"
    ></button>
  );
}

export default CardLike;
