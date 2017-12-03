import React from "react";

class Player extends React.Component {
	render() {
    console.log(" first time");
    if(!this.props.video) {
      return (
        <div>
          <h3>Loading videos..</h3>
        </div>
      )
    } else {
      const videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
			const desp =  `https://www.youtube.com/embed/${this.props.video.snippet.channelTitle}`
      return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						className="embed-responsive-item"
						src={videoUrl}
					/>
				</div>
					<h4>
					{this.props.video.snippet.channelTitle}
					</h4>
					<div className="flex-md-row">
					{this.props.video.snippet.description}
					</div>
			</div>
		);
  }
	}
}

export default Player;
