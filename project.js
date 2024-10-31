import("https://kit.fontawesome.com/f722e54f66.js")

console.log("welcome to spotfy")
let index = 0;
let word = document.getElementById("word");
let gif = document.getElementById("gif");
let range = document.getElementById("range");
let playlist = document.getElementById("playlist");

let singer1 = Array.from(document.getElementsByClassName('singer1'))

let song = [
	{ songname: "salam-e-isqe", filepath: "song audio/1.mp3", coverpath: "image/image8.jpg" },
	{ songname: "salam-e-isqe", filepath: "song audio/2.mp3", coverpath: "image/image9.jpg" },
	{ songname: "salam-e-isqe", filepath: "song audio/2.mp3", coverpath: "image/image10.jpg" },
	{ songname: "salam-e-isqe", filepath: "song audio/3.mp3", coverpath: "image/image6.jpg" },
	{ songname: "salam-e-isqe", filepath: "song audio/3.mp3", coverpath: "image/image1.jpg" }
]
singer1.forEach((element, i) => {
	element.getElementsByTagName("a")[0].src = songs[i].coverpath;
	element.getElementsByClassName('text')[0].innerHTML = songs[i].songname;
})

let audioElement = new Audio("song audio/3.mp3");
word.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		gif.style.opacity = "1";
		word.className = "far fa-pause-circle";
	}
	else {
		audioElement.pause();
		gif.style.opacity = "0";
		word.className = "far fa-play-circle"
	}
})
audioElement.addEventListener("timeupdate", () => {
	progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
	range.value = progress;
})
range.addEventListener("change", () => {
	audioElement.currentTime = (range.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
	Array.from(document.getElementsByClassName('item1')).forEach((element) => {
		element.className = "far fa-play-circle";
	})
}

Array.from(document.getElementsByClassName('item1')).forEach(element => {
	element.addEventListener('click', (e) => {
		makeAllPlays();
		audioElement.src = `song audio/1.mp3`;
		audioElement.play();
		e.target.className = "far fa-play-circle";
		audioElement.currentTime = 0;
		gif.style.opacity = "1";
		word.className = "far fa-pause-circle"

	});
})

const makeAllPlays1 = () => {
	Array.from(document.getElementsByClassName('item2')).forEach((element) => {
		element.className = "far fa-pause-circle";
	})
}

Array.from(document.getElementsByClassName('item2')).forEach(element => {
	element.addEventListener('click', (e) => {
		makeAllPlays1();
		audioElement.src = `song audio/2.mp3`;
		e.target.className = "far fa-play-circle";
		audioElement.currentTime = 0;
		audioElement.play();
		word.className = "far fa-pause-circle"
		gif.style.opacity = "1";
	});
})

const makeAllPlays2 = () => {
	Array.from(document.getElementsByClassName('item3')).forEach((element) => {
		element.className = "far fa-pause-circle";
	})
}

Array.from(document.getElementsByClassName('item3')).forEach(element => {
	element.addEventListener('click', (e) => {
		makeAllPlays2();
		audioElement.src = `song audio/2.mp3`;
		e.target.className = "far fa-play-circle";
		audioElement.currentTime = 0;
		audioElement.play();
		word.className = "far fa-pause-circle"
		gif.style.opacity = "1";
	});
})

const makeAllPlays3 = () => {
	Array.from(document.getElementsByClassName('item4')).forEach((element) => {
		element.className = "far fa-pause-circle";
	})
}

Array.from(document.getElementsByClassName('item4')).forEach(element => {
	element.addEventListener('click', (e) => {
		makeAllPlays3();
		audioElement.src = `song audio/3.mp3`;
		e.target.className = "far fa-play-circle";
		audioElement.currentTime = 0;
		audioElement.play();
		word.className = "far fa-pause-circle"
		gif.style.opacity = "1";
	});
})

const makeAllPlays4 = () => {
	Array.from(document.getElementsByClassName('item5')).forEach((element) => {
		element.className = "far fa-pause-circle";
	})
}

Array.from(document.getElementsByClassName('item5')).forEach(element => {
	element.addEventListener('click', (e) => {
		makeAllPlays4();
		audioElement.src = `song audio/3.mp3`;
		e.target.className = "far fa-play-circle";
		audioElement.currentTime = 0;
		audioElement.play();
		word.className = "far fa-pause-circle"
		gif.style.opacity = "1";
	});
})

// let song1 = new Audio('song audio/alarm.mp3');
// function image1() {
// 	if (song1.paused) {
// 		song1.play();
// 	} else {
// 		song1.pause()
// 	}

// }
// page = document.getElementById("page");
// myInput = document.getElementById('myInput');
// function sreachfun() {
// 	let Input = document.getElementById("input").value
// 	if (Input !== "") {
// 		let regExp = new RegExp(Input, "gi");
// 		body.innerHTML = (body.page).replace(RegExp, "<mark>$&</mark>")
// 	}
// }

setInterval(() => {
	
}, interval);

