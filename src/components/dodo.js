import React from "react";

class Dodo extends React.Component {
	render() {
    const video = this.props.videos
		return (
			<li className="list-group-item">
				<div className="video-list-media" onClick ={ () => this.props.onCurrentVideoCHnage(video)}>
					<div className="media-left">
							<img
								className="media-object"
								src={this.props.videos.snippet.thumbnails.default.url}
							/>
					</div>
					<div className="media-body">
						<div className="media-heading">
							<p>{this.props.videos.snippet.title}</p>
						</div>	
					</div>
				</div>
			</li>
		);
	}
}

export default Dodo;
