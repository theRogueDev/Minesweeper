import React from 'react'
import { connect } from 'react-redux'

import { userClick } from "../actions";

const mapStateToProps = (state) => {
	return {
		board: state.board
	}
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

		this.state = {
			block: this.props.board[this.props.x][this.props.y]
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.handleClick(e.button, this.props.x, this.props.y);
	}

	render() {
		let block = this.props.board[this.props.x][this.props.y];
		let x;
		if (block.flag) x = (<div style={{ width: '100%', height: '100%', backgroundImage: 'url(flag.png)' }}></div>)
		else if (block.revealed) x = (<p>{block.count}</p>)
		else if (block.mine) x = (<div style={{ width: '100%', height: '100%', backgroundImage: 'url(mine.png)' }}></div>)
		else x = ' - ';
		return (
			<td style={{ backgroundImage: 'flag.png' }} onContextMenu={this.handleClick} onClick={this.handleClick}>
				{x}
			</td>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)