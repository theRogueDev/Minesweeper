export const ActionTypes = {
	INIT_GAME: 'INIT_GAME',
	USER_CLICK: 'USER_CLICK'
}

export const userClick = (button, x, y) => ({
	type: 'USER_CLICK',
	button: button,
	x: x,
	y: y
})

export const initGame = (boardSize) => ({
	type: 'INIT_GAME'
})