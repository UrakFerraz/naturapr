let header = document.querySelector('.header');
var mobileScreenSize = window.matchMedia("(max-width: 1350px)");
let backToTopBtn = document.querySelector('.backToTopBtnContainer');
let checkScrollPos = 0;











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

	if(y <= checkScrollPos) {
		backToTopBtn.style.transform = 'translateY(-60px)';
	} else {
		backToTopBtn.style.transform = 'translateY(100px)';
	}
	if(y <= 10) {
		backToTopBtn.style.transform = 'translateY(100px)';
	}
	scrollIndicator();
});




function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}