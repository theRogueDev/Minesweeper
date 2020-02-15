import React from 'react'
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap'

import "./table.css"
import Block from '../containers/Block';

const mapStateToProps = (state) => {
	return {
		root: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

class App extends React.Component {
	render() {
		// console.log(this.props);
		let table = [];
		for (let i = 0; i < 10; i++) {
			let row = [];
			for (let j = 0; j < 10; j++) {
				row.push(
					<Block
						key={j}
						mine={this.props.root.board[i][j].mine}
						x={i}
						y={j}
					>
					</Block>
				);
			}
			table.push(<tr key={i}>{row}</tr>);
		}

		return (
			<Container>
				<Row>
					<Col className="text-center">
						<table id="gameTable" className="mx-auto">
							<tbody>
								{table}
							</tbody>
						</table>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);