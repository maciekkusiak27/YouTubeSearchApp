import React from "react";

const Video = ({ video }) => {

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
        <iframe className="videoPlay" src={videoSrc} allowFullScreen title="Video player" />

        <h3>{video.snippet.title}</h3>
        <p><strong>{video.snippet.channelTitle}</strong></p>
        <p>{video.snippet.description}</p>
        <p>{video.snippet.publishedAt}</p>
        <p>
          {/* Liczba wyświetleń: 
          {video.statistics.viewCount} 
          Liczba polubień: {video.statistics.likeCount} */}
         
        {/* Statystyki */}
          </p>
          {/* <p>tagi{video.snippet.tags}</p> */}

    </div>
  );
};

export default Video;
