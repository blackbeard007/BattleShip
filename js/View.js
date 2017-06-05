class View {
	constructor() {
		this.field = new Field();
	}

	drawCells() {
		let field = document.getElementById('field'),
			field2 = document.getElementById('field2'),
			table = document.createElement('table'),
			table2 = document.createElement('table');

			table2.innerHTML = myTable;

			table.innerHTML = enemyTable;

			field2.appendChild(table2);
			field.appendChild(table);
	}

	auto() {
		let btn = document.getElementById('auto'),
			game = document.getElementById('game');

		btn.innerHTML = 'Auto';
		btn.classList.add('btn');

		game.appendChild(btn);

		btn.addEventListener('click', showShips);

		function showShips() {
			let field = new Field();

			document.querySelectorAll('[data-position]').forEach(function (item) {
				item.classList.remove('myShip');
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
		let btn = document.getElementById('manual');

		btn.innerHTML = 'Manual';
		btn.classList.add('btn');

		btn.addEventListener('click', man);

		function man (e) {
			let field = new Field(),
				div = document;

			document.querySelectorAll('[data-position]').forEach(function (item) {
				item.classList.remove('myShip');
			});
			
			for (let i = 0; i < field.ships.length; i++) {
				let ship = field.ships[i].locations;

				for (let j = 0; j < field.ships[i].decks; j++) {
					field.showMyShips(ship[j]);
				}
			}
		}
	}

	startGame() {
		let btn = document.getElementById('start');

		btn.innerHTML = 'START';
		btn.classList.add('btn');


		btn.addEventListener('click', start);

		function start () {
			let auto = document.getElementById('auto'),
				manual = document.getElementById('manual');

			auto.setAttribute('hidden', true);
			manual.setAttribute('hidden', true);
			btn.setAttribute('hidden', true);
		}
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