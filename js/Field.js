class Field {
	constructor() {
		this.ships = [
			new Ship({
				deck: 1,
				x: 1,
				y: 2
			}),
			new Ship({
				deck: 1,
				x: 1,
				y: 2
			}),
			new Ship({
				deck: 1,
				x: 1,
				y: 2
			})
		];
	}

	isHit(x, y) {}
}