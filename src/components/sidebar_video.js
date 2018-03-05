import React from "react";
import sidebarVideos from "./sidebar_list.js";
import Dodo from "./dodo";

class Sidebar extends React.Component {
	render() {
		let sideList = this.props.videos.map(video => {
			return <Dodo videos={video} key={video.etag} onCurrentVideoCHnage = {this.props.onCurrentVideoCHnage}/>;
		});
		return <div className="col-md-4 list-group">{sideList}</div>;
	}
}
export default Sidebar;
