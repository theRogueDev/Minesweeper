# Minesweeper with React and Redux

A very poorly ported version of the beloved minesweeper game written in React/Redux. The game behaviour isn't exactly the same as the original. For example, the block revealing mechanism is a modified version of the flood fill algorithm.

## Revealing Blocks

I used a modified version of the flood fill algorithm for filling the negative space. It goes as follows:

1. Start from a source cell
2. Count the number of mines in all adjacent cells
3. If source cell mineCount=0, for each adjacent cell that doesn't contain a mine
	- Make source cell and start from 1.


```javascript
const floodFillMod =(sourceBoard, source) => {
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
	if (count === 0) {
		// Up
		if (up && !board[source.x][source.y + 1].revealed) board = floodFillMod(board, { x: source.x, y: source.y + 1 });
		// Up and Right
		if (upright && !board[source.x + 1][source.y + 1].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y + 1 });
		// Right
		if (right && !board[source.x + 1][source.y].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y });
		// Down and Right
		if (downright && !board[source.x + 1][source.y - 1].revealed) board = floodFillMod(board, { x: source.x + 1, y: source.y - 1 });
		// Down
		if (down && !board[source.x][source.y - 1].revealed) board = floodFillMod(board, { x: source.x, y: source.y - 1 });
		// Down and Left
		if (downleft && !board[source.x - 1][source.y - 1].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y - 1 });
		// Left
		if (left && !board[source.x - 1][source.y].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y });
		// Left and Up
		if (upleft && !board[source.x - 1][source.y + 1].revealed) board = floodFillMod(board, { x: source.x - 1, y: source.y + 1 });
	} else {
		return board;
	}
	return board;
}
```

**NOTE**: The implementation above uses a custom function `makeCopy` that deep copies multidimensional arrays. This is required because of enforced state immutability in React and Redux.
