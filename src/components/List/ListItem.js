import React from 'react';
import './listitem.css';
const ListItem = ({ movie: { views, title, imgSrc, owner } }) => {
  return (
    <div className="list-item">
      <div className="img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="info-container">
        <h6 className="movie-title">{title}</h6>
        <p className="movie-owner text-muted">{owner}</p>
        <span className="movie-views text-muted">{views}</span>
      </div>
    </div>
  );
};

export default ListItem;
