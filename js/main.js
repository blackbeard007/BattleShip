window.onload = function () {
	let view = new View(),
		field = document.getElementById('field');

    view.drawCells();
	view.auto();
	view.manual();
	view.startGame();

	field.addEventListener('click', function (e) {
        let target = e.target.id;
		view.getXY(target);
	});
}