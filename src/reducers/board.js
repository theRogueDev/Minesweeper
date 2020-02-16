import { ActionTypes } from "../actions";

let getCopy = (board) => {
	let copy = [];
	for (let i = 0; i < board.length; i++) {
		let row = [];
		for (let j = 0; j < board[i].length; j++) {
			row.push({ ...board[i][j] });
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

const floodFillMod = (sourceBoard, source) => {
	let count = 0;
	let board = getCopy(sourceBoard);
	let up = false, right = false, down = false, left = false, upright = false, upleft = false, downright = false, downleft = false;
	console.log("Flood source: " + source.x + ', ' + source.y);
	console.log(board);
	if (board[source.x][source.y].revealed) {
		console.log("Already revealed, return unmodded board");
		return board;
	}

	if (board[source.x] !== undefined && board[source.x][source.y + 1] !== undefined) up = true;
	if (board[source.x + 1] !== undefined && board[source.x + 1][source.y + 1] !== undefined) upright = true;
	if (board[source.x + 1] !== undefined && board[source.x + 1][source.y] !== undefined) right = true;
	if (board[source.x + 1] !== undefined && board[source.x + 1][source.y - 1] !== undefined) downright = true;
	if (board[source.x] !== undefined && board[source.x][source.y - 1] !== undefined) down = true;
	if (board[source.x - 1] !== undefined && board[source.x - 1][source.y - 1] !== undefined) downleft = true;
	if (board[source.x - 1] !== undefined && board[source.x - 1][source.y] !== undefined) left = true;
	if (board[source.x - 1] !== undefined && board[source.x - 1][source.y + 1] !== undefined) upleft = true;

	// Up
	if (up && board[source.x][source.y + 1].mine) count += 1;
	// Up and Right
	if (upright && board[source.x + 1][source.y + 1].mine) count += 1;
	// Right
	if (right && board[source.x + 1][source.y].mine) count += 1;
	// Down and Right
	if (downright && board[source.x + 1][source.y - 1].mine) count += 1;
	// Down
	if (down && board[source.x][source.y - 1].mine) count += 1;
	// Down and Left
	if (downleft && board[source.x - 1][source.y - 1].mine) count += 1;
	// Left
	if (left && board[source.x - 1][source.y].mine) count += 1;
	// Left and Up
	if (upleft && board[source.x - 1][source.y + 1].mine) count += 1;

	board[source.x][source.y].count = count;
	board[source.x][source.y].revealed = true;
	// If count is 0, flood all adjacent cells
	// if (count === 0) {
	// 	// Up
	// 	if (up && !board[source.x][source.y + 1].revealed) board = floodFillMod(board, { x: source.x, y: source.y + 1 });
	// 	// Up and Right
	// 	if (upright && !board[source.x + 1][source.y + 1].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y + 1 });
	// 	// Right
	// 	if (right && !board[source.x + 1][source.y].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y });
	// 	// Down and Right
	// 	if (downright && !board[source.x + 1][source.y - 1].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y - 1 });
	// 	// Down
	// 	if (down && !board[source.x][source.y - 1].revealed) board = floodFillMod(board, { x: source.x, y: source.y - 1 });
	// 	// Down and Left
	// 	if (downleft && !board[source.x - 1][source.y - 1].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y - 1 });
	// 	// Left
	// 	if (left && !board[source.x - 1][source.y].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y });
	// 	// Left and Up
	// 	if (upleft && !board[source.x - 1][source.y + 1].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y + 1 });
	// } else {
	// 	return board;
	// }
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
					copy = floodFillMod(copy, { x: x, y: y });
				}
			} else if (button === 2) {
				copy[x][y].flag = true;
			}
			return copy;
		default:
			return state;
	}
}