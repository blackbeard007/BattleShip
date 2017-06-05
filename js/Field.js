class Field {
	constructor() {
		this._numShips = 10;
		this.ships = this.addShips();
	}

	isHit(guess) {
		let result = false;

		for (let i = 0; i < this.ships.length; i++) {
			let ship = this.ships[i],
				index = ship.locations.indexOf(guess);

			if (index >= 0) {
				ship.hits[i] = 'hit';

				result = true;
				break;
			}
		}

		return result;
	}

	/*isAlive(ship) {
		let result = false;
		for (let i = 0; i < ship.deck; i++) {
			if (ship.hits[i] !== 'hit') {
				result = true;
				break;
			}
		}

		return result;
	}*/

	showMyShips(location) {
		let dataLocation = document.querySelector('[data-position=' + '\"' + location + '\"]');

		dataLocation.classList.add('myShip');
	}

	addShips() {
		let shipsQuantity = this._numShips,
			defaultShips = [
				{
					deck: 1,
					locations: [0],
					hits: ['']
				},
				{
					deck: 1,
					locations: [0],
					hits: ['']
				},
				{
					deck: 1,
					locations: [0],
					hits: ['']
				},
				{
					deck: 1,
					locations: [0],
					hits: ['']
				},
				{
					deck: 2,
					locations: [0, 0],
					hits: ['', '']
				},
				{
					deck: 2,
					locations: [0, 0],
					hits: ['', '']
				},
				{
					deck: 2,
					locations: [0, 0],
					hits: ['', '']
				},
				{
					deck: 3,
					locations: [0, 0, 0],
					hits: ['', '', '']
				},
				{
					deck: 3,
					locations: [0, 0, 0],
					hits: ['', '', '']
				},
				{
					deck: 4,
					locations: [0, 0, 0, 0],
					hits: ['', '', '', '']
				}
			],
			ships = [];

		for (let i = 0; i < shipsQuantity; i++) {
			ships.push(generateShipLocations(defaultShips[i]));
		}

		function generateShipLocations (prop) {
			let ship = new Ship(prop),
				locations;

				do {
					locations = generateShip();
				} while (collision(locations));
				ship.locations = locations;

			function generateShip () {
				let direction = Math.floor(Math.random() * 2),
					newShipLocations = [],
					row, col;

					if (direction === 1) {
						row = Math.floor(Math.random() * 8);
						col = Math.floor(Math.random() * (8 - ship.decks));
					} else {
						row = Math.floor(Math.random() * (8 - ship.decks));
						col = Math.floor(Math.random() * 8);
					}

				for (let i = 0; i < ship.decks; i++) {
						if (direction === 1) {
							newShipLocations.push(row + '' + (col + i));
						} else {
							newShipLocations.push((row + i) + '' + col);
						}
					}
				
				return newShipLocations;
			}

			function collision(locations) {
				let result = false;

				outer:
				for (let i = 0; i < shipsQuantity; i++) {

					if (ships.length === 0) {
						result = false;
						break outer;
					} else if (ships[i] === undefined){
						break outer;
					} else {
						let ship = ships[i];

						for (let j = 0; j < locations.length; j++) {
							if (ship.locations.indexOf(locations[j]) >= 0) {
								result = true;
								break outer;
							}
						}
					}
				}
				return result;
			}
			return ship;
		}
		for (let i = 0; i < ships.length; i++) {
			console.log('ship ' + i + ': ' + ships[i].locations);
		}
		return ships;
	}
}