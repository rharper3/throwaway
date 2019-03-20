(() => {
	console.log('fired');

	const targetBox = document.querySelector('.box');

	function runAnimation() {
		TweenMax.to(targetBox, 0.8,
	 {
	 	x: 450, 
	 	rotation: 180,
	 	scaleX: 1.5,
	 	scaleY: 1.5,
	 });
	}

	// basic green sock animation
	function resetAnimation() {
	TweenMax.to(targetBox, 0.8,
	 {
	 	x: 450, 
	 	rotation: 180,
	 	scaleX: 1.5,
	 	scaleY: 1.5,
	 });
    }

    targetBox.addEventListener("mouseover", runAnimation);
    targetBox.addEventListener("mouseout", resetAnimation);


})();