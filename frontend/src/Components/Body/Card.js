import React from "react";

const Card = ({ iconSrc, title, description }) => {
  return (
    <div className="card">
      <img className="card-icon" src={iconSrc} alt="icon" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default Card;
