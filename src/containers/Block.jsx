import React from 'react'
import { connect } from 'react-redux'

import { userClick } from "../actions";

const mapStateToProps = (state) => {
	return {
		board: state.board.board,
		win: state.board.win
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
		// Render sequence
		if (block.flag) x = (<div className='flagged'></div>)
		else if (block.revealed) x = (<div className='revealed'><p>{block.count}</p></div>)
		else x = <div className='unrevealed'></div>;

		if (this.props.win && block.mine) x = (<div style={{ width: '100%', height: '100%', backgroundImage: 'url(mine.png)' }}></div>)

		return (
			<td style={{ backgroundImage: 'flag.png' }} onContextMenu={this.handleClick} onClick={this.handleClick}>
				{x}
			</td>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)