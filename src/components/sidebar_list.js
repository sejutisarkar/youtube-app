import React from "react";
class sidebarVideos extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.videos.snippet.thumbnails.default.url} />
				<p>{this.props.videos.snippet.title}</p>
				//<p>{this.props.videos.snippet.description}</p>
			</div>
		);
	}
}

export default sidebarVideos;
