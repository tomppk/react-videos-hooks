import React from "react";

// Destructure video object from props object
const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment">
        <div className="ui embed">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  // Get baseUrl for embedded iFrame tag and add video id
  // from video object.
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
