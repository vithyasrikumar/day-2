document.querySelector('.puzzle-0').addEventListener('click', function() {
	  window.alert('Hello, World!');
	});

	document.querySelector('.puzzle-1').addEventListener('click', function() {
		window.alert("Hola, Mundo");
	});

	document.querySelector('.puzzle-2').addEventListener('click', function() {
		document.querySelector("h1").textContent="road work ahead? yeah i sure hope it does"
	});

	document.querySelector('.puzzle-3').addEventListener('click', function() {
		document.querySelector("img").src="https://media.giphy.com/media/W80Y9y1XwiL84/giphy.gif";
	});

	document.querySelector('.puzzle-4').addEventListener('click', function() {
		document.querySelector("img").style.visibility = "hidden";
	});

	document.querySelector('.puzzle-5').addEventListener('click', function() {
		document.querySelector("img").style.visibility = "visible";
	});

	document.querySelector('.puzzle-6-yellow').addEventListener('click', function() {
		document.body.style.backgroundColor = "yellow";

	});

	document.querySelector('.puzzle-6-pink').addEventListener('click', function() {
		document.body.style.backgroundColor = "pink";

	});

	document.querySelector('.puzzle-6-purple').addEventListener('click', function() {
		document.body.style.backgroundColor = "purple";

	});

	document.querySelector('.puzzle-7').addEventListener('click', function() {
		document.querySelector("body").style.fontFamily = "Comic Sans MS"
		document.querySelector("body").style.color = "red"
	});

	document.querySelector('.puzzle-8').addEventListener('click', function() {
		document.querySelector("a").href="https://www.youtube.com/";
		document.querySelector("a").textContent = "go to youtube"
	});

	// Challenge puzzles

	document.querySelector('.puzzle-9').addEventListener('click', function() {
		document.querySelector("body").style.fontFamily = "Monaco"
	});


	document.querySelector('.puzzle-10').addEventListener('click', function() {
		document.querySelector('audio').play();
	});

	document.querySelector('.puzzle-11').addEventListener('click', function() {
		document.querySelector('.gakko-logo').innerHTML = "<img src=https://pbs.twimg.com/profile_images/959193913264353281/tpvQ-KR3_400x400.jpg>"
	});

	document.querySelector('.puzzle-12').addEventListener('click', function() {
		document.querySelector("ol").style.color = "blue";
	});

	document.querySelector('.puzzle-13').addEventListener('click', function() {
		document.querySelector(".marquee").innerHTML = "<marquee>I FINALLY FIGURED THIS OUT</marquee>"
	});

	document.querySelector('.puzzle-14').addEventListener('click', function() {
		link.href(.disable) = '';
	});

	document.querySelector('.puzzle-15').addEventListener('click', function() {
		var color = prompt("enter your favorite color");
		document.querySelector("body").style.background = color;
	});






