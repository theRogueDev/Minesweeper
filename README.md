# Minesweeper with React and Redux

A very poorly ported version of the beloved minesweeper game written in React/Redux. The game behaviour isn't exactly the same as the original. For example, the block revealing mechanism is a modified version of the flood fill algorithm.

## Algorithm for revealing blocks

1. Start from a source cell
2. Count the number of mines in all adjacent cells
3. If source cell mineCount=0, for each adjacent cell that doesn't contain a mine
	- Make source cell and start from 1.


```javascript
const floodFillMod =(sourceBoard, source) => {
	let count = 0;
	let board = getCopy(sourceBoard);
	// Up
	if (board[source.x][source.y + 1].mine) count += 1;
	else board[source.x][source.y + 1].revealed = true;
	// Up and Right
	if (board[source.x + 1][source.y + 1].mine) count += 1;
	else board[source.x + 1][source.y + 1].revealed = true;
	// Right
	if (board[source.x + 1][source.y].mine) count += 1;
	else board[source.x + 1][source.y].revealed = true;
	// Down and Right
	if (board[source.x + 1][source.y - 1].mine) count += 1;
	else board[source.x + 1][source.y - 1].revealed = true;
	// Down
	if (board[source.x][source.y - 1].mine) count += 1;
	else board[source.x][source.y - 1].revealed = true;
	// Down and Left
	if (board[source.x - 1][source.y - 1].mine) count += 1;
	else board[source.x - 1][source.y - 1].revealed = true;
	// Left
	if (board[source.x - 1][source.y].mine) count += 1;
	else board[source.x - 1][source.y].revealed = true;
	// Left and Up
	if (board[source.x - 1][source.y + 1].mine) count += 1;
	else board[source.x - 1][source.y + 1].revealed = true;

	board[source.x][source.y].count = count;
	if (count === 0) board = floodFillMod(board, source);
	else return board;
}
```

**NOTE**: The implementation above uses a custom function `makeCopy` that deep copies multidimensional arrays. This is required because of enforced state immutability in React and Redux.