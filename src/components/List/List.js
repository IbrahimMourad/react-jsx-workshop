import React from 'react';
import { data } from '../../assets/data';
import ListItem from './ListItem';
import './list.css';

const List = () => {
  console.log(data);
  return (
    <div className="list-container">
      {data.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default List;
