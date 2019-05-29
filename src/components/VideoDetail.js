import React from "react";

class VideoDetail extends React.Component {
  render() {
    const video = this.props.video;
    return video ? <div>{video.snippet.title}</div> : <div>Loading</div>;
  }
}

export default VideoDetail;
