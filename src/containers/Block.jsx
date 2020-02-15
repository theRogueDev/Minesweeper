import React from 'react'
import { connect } from 'react-redux'

import { userClick } from "../actions";

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (button, x, y) => {
			dispatch(userClick(button, x, y))
		}
	}
};

class Block extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.handleClick(e.button, this.props.x, this.props.y);
	}

	render() {
		return (
			<td onContextMenu={this.handleClick} onClick={this.handleClick}>
				{this.props.mine}
			</td>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)