import React from "react";

class Search extends React.Component {
	state = {
		value: ""
	};

	onInputChange = e => {
		this.props.onSearchChange(e.target.value);
		this.setState({
			value: e.target.value
		});
	};

	render() {
		return (
			<div className = "search-input">
				<input type="text" onChange={this.onInputChange} />
			</div>
		);
	}
}
export default Search;
