let slides = document.querySelectorAll('.slideUnit');
slides = Array.from(slides);
console.log(slides);
let cont = 0;
const slideTime = 6;
let header = document.querySelector('.header');
var mobileScreenSize = window.matchMedia("(max-width: 1350px)");

document.querySelector('.rightArrow').addEventListener('click', rightClicked);
document.querySelector('.leftArrow').addEventListener('click', leftClicked);
document.querySelector('.rightArrow').addEventListener('mouseover', pauseAnimation);
document.querySelector('.leftArrow').addEventListener('mouseover', pauseAnimation);
document.querySelector('.rightArrow').addEventListener('mouseout', restartAnimation);
document.querySelector('.leftArrow').addEventListener('mouseout', restartAnimation);
document.querySelector('.heroSliderOverflow').addEventListener('mouseover', pauseAnimation);
document.querySelector('.heroSliderOverflow').addEventListener('mouseout', restartAnimation);

function nextSlide() {
	if (cont >= slides.length -1) {
		cont = 0;
		translateSlide();
	} else {
		cont += 1;
		translateSlide();
	};
	console.log('right clicked');
};

function prevSlide() {
	if(cont === 0) {
		cont = slides.length -1;
		translateSlide();
	} else {
		cont -= 1;
		translateSlide();
	};
	console.log('left clicked');
};

function translateSlide() {
	slides.forEach(function(el) {
		el.style.transform = `translateX(-${cont}00%)`;
	});
};

function rightClicked() {
	nextSlide();
	restartAnimation();
}

function leftClicked() {
	prevSlide();
	restartAnimation();
}

function restartAnimation() {
	console.log('restartAnimation() start');
	console.log('animation paused');
	setTimeout(function() {
		console.log('animation resume');
	}, slideTime*1000);
	resetAnimation();
}

function pauseAnimation() {
	clearInterval(slidesAutomation);
	circleSvg.style.animationName = 'none';
}

function resetAnimation() {
	clearInterval(slidesAutomation);
	console.log('resetAnimation() start');
	slidesAutomation = setInterval(function(){
		nextSlide();
		animeCircle();
	}, slideTime*1000);
	console.log('start');
};

var circleSvg = document.querySelector('#circleSlide');

function animeCircle() {
	circleSvg.style.animationName = 'dash';
	circleSvg.style.animationIterationCount = 'infinite';
	circleSvg.style.animationPlayState = 'running';
	console.log('add class');
};

animeCircle();

var slidesAutomation = setInterval(function(){
	nextSlide();
	animeCircle();
}, slideTime*1000);













let recursosLine = document.querySelector("#recursosLine");
let footer = document.querySelector('.footer');
let y = 0;
let footerHeight = footer.offsetHeight;
console.log(`footerHeight: ${footerHeight}`);
let screenSize = window.innerHeight || document.documentElement.clientHeight;


function findTop(element) {
	let rec = element.getBoundingClientRect();
	let elTop = rec.top;
	let elHeight = rec.height;
	return elTop;
};


// função que mantém o elemento no topo ao scrollar
function fixedPosition(el) {
	el.style.bottom = 0;
	el.style.position = 'fixed';
};


setInterval(checkScrollPosition, 1000);
function checkScrollPosition() {
	checkScrollPos = y;
	console.log(checkScrollPos);
};

if (window.matchMedia("(max-width: 1350px)").matches) {
	recursosLine.style.position = 'relative';
}


window.addEventListener('scroll', function() {
	var recursosLineBottom = findTop(footer);
	var headerTop = findTop(header);
	console.log(`headerTop: ${headerTop}`);
	y = window.scrollY || document.documentElement.scrollTop;
	console.log(`y: ${y}`);
	console.log(`footerHeight: ${footerHeight}`);
	console.log('coordenadas' + recursosLineBottom);
	if (window.matchMedia("(max-width: 1350px)").matches) {
	  /* a viewport tem pelo menos 1350 pixels de largura */
		header.style.position = 'fixed';
		header.style.top = '0px';
	} else {
	  /* a viewport menos que 1350 pixels de largura */
	if (recursosLineBottom <= screenSize) {
		recursosLine.style.position = 'relative';
		console.log('glue');
		if(y === 0) {
			y = window.scrollY || document.documentElement.scrollTop;
		} else {
			console.log('let y' + y);
		};
	} else {
		recursosLine.style.position = 'fixed';
		console.log('fixed');
	};
		if(y >= 45) {
			header.style.position = 'fixed';
			header.style.top = '-47px';
		} else {
			header.style.position = 'absolute';
			header.style.top = '0px';
		};
	};
});