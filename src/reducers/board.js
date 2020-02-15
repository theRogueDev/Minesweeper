import { ActionTypes } from "../actions";

let getCopy = (board) => {
	let copy = [];
	for (let i = 0; i < board.length; i++) {
		let row = [];
		for (let j = 0; j < board[i].length; j++) {
			row.push({...board[i][j]});
		}
		copy.push(row);
	}
	return copy;
}

let defaultState = () => {
	let numMines = Math.random() * 10 + 10;
	let board = [];
	for (let i = 0; i < 10; i++) {
		let row = [];
		for (let j = 0; j < 10; j++) {
			row.push({ mine: false, revealed: false, flag: false });
		}
		board.push(row);
	}
	for (let i = 0; i < numMines; i++) {
		// Random x and y in between 0 and 9
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);

		board[x][y].mine = true;
	}
	return board;
}

export default (state = defaultState(), action) => {
	switch (action.type) {
		case ActionTypes.INIT_GAME:
			return defaultState();
		case ActionTypes.USER_CLICK:
			let copy = getCopy(state);
			let button = action.button;
			let x = action.x, y = action.y;
			if (button === 0) {
				if (copy[x][y].mine) {
					alert("Game over");
				} else {
					copy[x][y].revealed = true;
				}
			} else if (button === 2) {
				copy[x][y].flag = true;

			}
			return copy;
		default:
			return state;
	}
}