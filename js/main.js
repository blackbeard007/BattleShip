window.onload = function {
	let buttons = (function () {
		let game = document.getElementById('game');

		function auto () {
			let btn = document.createElement('button');

			game.appendChild(btn);
		}

		function manual () {

		}

		function startGame () {

		}

		return {
			auto: auto,
			manual: manual,
			startGame: startGame
		}
	})();
}