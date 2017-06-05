class View {
	constructor() {
		this.field = new Field();
	}

	drawCells() {
		let field = document.getElementById('field'),
			table = document.createElement('table'),
			table2 = document.createElement('table');

			table2.innerHTML = myTable;

			table.innerHTML = enemyTable;

			field.appendChild(table2);
			field.appendChild(table);
	}

	auto() {
		let btn = document.createElement('button'),
			game = document.getElementById('game');

		btn.innerHTML = 'Auto';
		btn.classList.add('btn');

		game.appendChild(btn);

		btn.addEventListener('click', showShips);

		function showShips() {
			let field = new Field();

			document.querySelectorAll('[data-position]').forEach(function (item) {
				item.classList.remove('hit');
			});
			
			for (let i = 0; i < field.ships.length; i++) {
				let ship = field.ships[i].locations;

				for (let j = 0; j < field.ships[i].decks; j++) {
					field.showMyShips(ship[j]);
				}
			}
		}
	}

	manual() {
		let btn = document.createElement('button');

		btn.innerHTML = 'Manual';
		btn.classList.add('btn');

		game.appendChild(btn);
	}

	startGame() {
		let btn = document.createElement('button');

		btn.innerHTML = 'START';
		btn.classList.add('btn');

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