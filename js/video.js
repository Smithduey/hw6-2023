var video = document.getElementById("player1");
video.autoplay = false;
video.loop = false;


window.addEventListener("load", function() {

	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	var volumeInfo = document.getElementById("volume");
	console.log("Play Video");
	video.play();
	video.volume = slider.value / 100;
    volumeInfo.textContent = slider.value;
	console.log("Current Volume: " + volumeInfo.textContent + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate -= .1;
	console.log("Playback speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate += .1;
	console.log("Playback speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Restarting Video");
	  }
	console.log("Video time " + video.currentTime);
});

document.querySelector("#mute").addEventListener('click', function() {
	if (video.muted) {
		video.muted = false;
		mute.innerText = "Mute";
		console.log("Unmute Video");
	  } else {
		video.muted = true;
		mute.innerText = "Unmute";
		console.log("Mute Video");
	  }
});

document.querySelector("#slider").addEventListener("click", function() {
	var volumeInfo = document.getElementById("volume");
	console.log("Slide Adjust Volume");
	volumeInfo.textContent = slider.value;

  slider.addEventListener("input", function() {
    video.volume = slider.value / 100;
    volumeInfo.textContent = slider.value;
	console.log("Current Volume: " + volumeInfo.textContent + "%");
  });
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.toggle("oldSchool")
	console.log("Applied Old School Effect");
	});

document.querySelector("#vintage").addEventListener("click", function() {
	if (!video.classList.contains("oldSchool")) {
		video.classList.toggle("oldSchool");
		console.log("Applied Old School Effect");
	  }
	});

document.querySelector("#orig").addEventListener("click", function() {
	if (video.classList.contains("oldSchool")) {
		video.classList.toggle("oldSchool");
		console.log("Removed Old School Effect.")
	  }
	});



