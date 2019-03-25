(() => {
	console.log('fired');

	//  variable stack
	// grab the shields at the bttom of the pge
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox	= document.querySelector('.lightBox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close')
			banner = document.querySelector('#houseImages');


	function showLightbox() {
		//grab the right video source

		//get lowercase house name
		let targetHouse = this.className.split(" ")[1];

		//make sure the names match
		// stark becomes Stark - first make capital s then add ark for any house name
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightBox');
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightBox');
		//rewind video and pause iot
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600; //this is the offset / width of one image

		//this is the total distance images need to move as pixel value
		totalOffset = this.dataset.offset * offSet + "px";

		//set style, css animation
		banner.style.right = totalOffset;
	}


	shields.forEach(shield => shield.addEventListener('click', animateBanner));

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();