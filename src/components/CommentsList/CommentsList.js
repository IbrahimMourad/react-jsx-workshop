import React from 'react';
import { comments } from '../../assets/comments';
import Comment from './Comment';

const CommentsList = () => {
  return (
    <div>
      <h2>{comments.length} comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
