class Ship {
	constructor(data) {
		this._deckNumber = data.deck;
		this._locations = data.locations;
		this._hits = data.hits;
		this._direction = data.direction;
	}

	isHit(x, y) {
		
	}

	get locations() {
		return this._locations;
	}

	set locations(newLocations) {
		this._locations = newLocations;
	}

	get hits() {
		return this._hits;
	}

	get decks() {
		return this._deckNumber;
	}
}