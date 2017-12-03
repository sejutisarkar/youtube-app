import React, { Component } from "react";
import YoutubeSearch from "youtube-api-search";
import _ from 'lodash'
import Search from "./searchBar.js";
import Sidebar from "./sidebar_video.js";
import Player from './player'
const API_KEY = "AIzaSyDFc1Zo7DTWl6dekS_liU3W82XnOzyd4uY";
export default class App extends Component {
	state = {
		videos: [],
		currentVideo: ""
	};
	componentWillMount() {
		this.searchVideo("treat you better");
	}
	searchVideo = value => {
		YoutubeSearch({ key: API_KEY, term: value }, videos => {
			this.setState({
				videos: videos,
				currentVideo: videos[0]
			});
		});
	};
	onCurrentVideoCHnage = (value) => {
		this.setState({
			currentVideo: value
		})
	}
	render() {
		const videoSearch = _.debounce(term => {this.searchVideo(term)}, 2000)
		return (
			<div>
				<Search onSearchChange={videoSearch} />
				<Player video={this.state.currentVideo}/>
				<Sidebar videos={this.state.videos} onCurrentVideoCHnage = {this.onCurrentVideoCHnage}/>
			</div>
		);
	}
}
