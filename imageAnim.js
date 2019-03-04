(() => {

	// Variables always come first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
			puzzleBoard = document.querySelector(".puzzle-board"),
			puzzleSelector = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	// Functions go in the middle
	function createPuzzlePieces(pictureIndex) {
	// 	// generate puzzle pieces for the left hand side
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;

		});
	//
		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

		initDrag();
	}
	//
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => { // CHANGED THE COMMA ON THIS LINE TO A PERIOD B4 THE forEach
			img.addEventListener("dragstart", function(e) {
				// e.preventDefault();
				console.log('draggin...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}
	//
	dropZones.forEach(zone => { // dropZone SHOULD BE dropZones (SEE LET STATEMENT ABOVE)
		// add drag event handling
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		// add drop event handling
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumpin on me");

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	}); // MISSING THIS CLOSING BRACE AND BRACKET

	function resetPuzzlePieces() {
		// empty the thumbnail container
		piecesBoard.innerHTML = ""
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// Event handling down here
	puzzleSelector.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);

})();
