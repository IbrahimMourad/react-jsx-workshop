import React from 'react';
import './comment.css';
const Comment = ({ moh: { comment, name, imgSrc } }) => {
  return (
    <div className="comment-container">
      {imgSrc ? (
        <div className="img-container">
          <img
            src={imgSrc}
            alt={`${name} profile pic
          `}
          />
        </div>
      ) : (
        <div className="Char">{name.charAt(0)}</div>
      )}
      <div className="comment-info">
        <p>{name}</p>
        <p className="text-muted">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
