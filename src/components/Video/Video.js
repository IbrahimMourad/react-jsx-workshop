import React from 'react';
import './video.css';
const Video = () => {
  return (
    <>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/kVeOpcw4GWY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Video;
