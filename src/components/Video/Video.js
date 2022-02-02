import React from 'react';
import './video.css';
const Video = () => {
  return (
    <>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/GDa8kZLNhJ4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Video;
