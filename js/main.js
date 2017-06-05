window.onload = function () {
	let view = new View(),
		field = document.getElementById('field'),
		field2 = document.getElementById('field2');

    view.drawCells();
	view.manual();
	view.startGame();
	view.auto();

	field.addEventListener('click', function (e) {
        let target = e.target.id;
		view.getXY(target);
	});

	field2.addEventListener('click', function (e) {
		addEventListener('click', function () {

		});
	});

}