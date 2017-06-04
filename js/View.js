class View {
	constructor() {
		this.field = new Field();
	}

	drawCells() {

	}

	auto() {
		let btn = document.createElement('button'),
			game = document.getElementById('game');

		btn.innerHTML = 'Auto';

		game.appendChild(btn);

		//btn.addEventListener('click', this.field.generateShipLocations.bind(this.field));
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

	showHits(location) {
		let cell = document.getElementById(location);

		cell.classList.add('hit');
	}

	showMiss(location) {
		let cell = document.getElementById(location);

		cell.classList.add('miss');
	}

	getXY(guess) {
		let result = this.field.isHit(guess);

		if (result === true) {
			this.showHits(guess);
		} else {
			this.showMiss(guess);
		}
	}
}