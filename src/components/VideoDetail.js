import React from "react";

class VideoDetail extends React.Component {
  render() {
    const video = this.props.video;
    const videoSrc = "https://www.youtube.com/embed/";

    return video ? (
      <div>
        <div className="ui embed">
          <iframe title="video-player" src={videoSrc + video.id.videoId} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}
export default VideoDetail;
