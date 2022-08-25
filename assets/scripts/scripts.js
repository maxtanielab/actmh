import { slider } from "./slickCarousel.js";

const ele = document.getElementById("vertical-carousel");
ele.style.cursor =
	'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
	ele.style.cursor =
		'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';
	ele.style.userSelect = "none";

	pos = {
		left: ele.scrollLeft,
		top: ele.scrollTop,
		// Get the current mouse position
		x: e.clientX,
		y: e.clientY
	};

	document.addEventListener("mousemove", mouseMoveHandler);
	document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
	// How far the mouse has been moved
	const dx = e.clientX - pos.x;
	const dy = e.clientY - pos.y;

	// Scroll the element
	ele.scrollTop = pos.top - dy;
	ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
	ele.style.cursor =
		'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';
	ele.style.removeProperty("user-select");

	document.removeEventListener("mousemove", mouseMoveHandler);
	document.removeEventListener("mouseup", mouseUpHandler);
};

// Attach the handler
ele.addEventListener("mousedown", mouseDownHandler);

const carouselCard = document.querySelectorAll(".left-content .carousel-card");
// let cardHeight = carouselCard[0].offsetHeight;
const circles = document.querySelectorAll(".left-content .controls .circle");
let msg = document.getElementById("cat-msg");

let catMsg = [
	{
		msg: "Je suis Katy, j’ai 2 ans et je suis née aveugle, mais j’aime beaucoup les câlins."
	},
	{
		msg: "Je suis Pikky, j’ai 1 an et je suis atteinte du trisomie 21, mais je suis très souriante."
	},
	{
		msg: "Je suis Laurie, j’ai 2 ans et je suis née aveugle, mais j’aime beaucoup les câlins et les bisoux."
	},
	{
		msg: "Je suis Baba, j’ai 1 mois et je suis née aveugle, mais j’aime beaucoup les câlins et les bisoux."
	}
];

circles.forEach((circle, index) => {
	circle.addEventListener("click", function () {
		hide(carouselCard, "card");
		carouselCard[index].classList.add("active");
		hide(circles, circle);
		this.classList.add("active");

		ele.scroll({
			top: carouselCard[index].offsetTop,
			behavior: "smooth"
		});
	});
});

const getScroll = function () {
	var wScrollY = ele.scrollTop;

	carouselCard.forEach((card, index) => {
		if (wScrollY === 0) {
			carouselCard[0].classList.add("active");
			carouselCard[1].classList.remove("active");

			circles[0].classList.add("active");
			circles[1].classList.remove("active");
		}
		if (wScrollY >= card.offsetTop - carouselCard[1].offsetTop) {
			hide(carouselCard, "card");
			card.classList.add("active");

			hide(circles, "circle");
			circles[index].classList.add("active");

			msg.innerHTML = `${catMsg[index].msg}`;
		} else {
			card.classList.remove("active");
		}
	});
};

const hide = function (id, tag) {
	id.forEach((tag) => {
		tag.classList.remove("active");
	});
};

ele.addEventListener("scroll", getScroll);

//Responsive
const responsiveMenu = document.querySelector("#btn-responsive i");
const menu = document.querySelector(".menu");
const listMenu = document.querySelectorAll(".menu .list");

responsiveMenu.addEventListener("click", openResponsiveMenu);

function openResponsiveMenu() {
	menu.classList.toggle("active");
	this.classList.toggle("fa-close");
}

// Close the menu by clicking on list menu
// Remove close icon by replacing by bars icon
listMenu.forEach((list) => {
	list.addEventListener("click", function () {
		setTimeout(() => {
			responsiveMenu.classList.remove("fa-close");
			menu.classList.remove("active");
		}, 100);
	});
});
