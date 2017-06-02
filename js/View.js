class View {
	constructor() {

	}

	drawCells() {}

	auto() {
		let btn = document.createElement('button'),
			game = document.getElementById('game');

		btn.innerHTML = 'Auto';

		game.appendChild(btn);
	}

	manual() {
		let btn = document.createElement('button');

		btn.innerHTML = 'Manual';

		game.appendChild(btn);
	}

	startGame() {
		let btn = document.createElement('button');

		btn.innerHTML = 'START';

		game.appendChild(btn);
	}

	showHits() {}

	showMiss() {}

	getXY() {}
}