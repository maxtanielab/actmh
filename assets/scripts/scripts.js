const verticalCarousel = document.getElementById("vertical-carousel");
verticalCarousel.style.cursor =
	'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';

let position = { top: 0, left: 0, x: 0, y: 0 };

function mouseDownHandler(e) {
	verticalCarousel.style.cursor =
		'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';
	verticalCarousel.style.userSelect = "none";

	position = {
		// Get the current scrollLeft/Top
		left: verticalCarousel.scrollLeft,
		top: verticalCarousel.scrollTop,
		// Get the current mouse positionition
		x: e.clientX,
		y: e.clientY
	};

	document.addEventListener("mousemove", mouseMoveHandler);
	document.addEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(e) {
	// How far the mouse has been moved
	const xDirection = e.clientX - position.x;
	const yDirection = e.clientY - position.y;

	// Scroll the element
	verticalCarousel.scrollTop = position.top - yDirection;
	verticalCarousel.scrollLeft = position.left - xDirection;
}

function mouseUpHandler() {
	verticalCarousel.style.cursor =
		'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';
	verticalCarousel.style.removeProperty("user-select");

	document.removeEventListener("mousemove", mouseMoveHandler);
	document.removeEventListener("mouseup", mouseUpHandler);
}

// Attach the handler
verticalCarousel.addEventListener("mousedown", mouseDownHandler);

/*=================== Carousel vertical card =================== */

const carouselCard = document.querySelectorAll(".left-content .carousel-card");
// let cardHeight = carouselCard[0].offsetHeight;
const circles = document.querySelectorAll(".left-content .controls .circle");
let msg = document.getElementById("cat-msg");

//Message of cats
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

		verticalCarousel.scroll({
			top: carouselCard[index].offsetTop,
			behavior: "smooth"
		});
	});
});

const getScroll = function () {
	var wScrollY = verticalCarousel.scrollTop;

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

const hide = function (id) {
	id.forEach((tag) => {
		tag.classList.remove("active");
	});
};

verticalCarousel.addEventListener("scroll", getScroll);

//Responsive Menu
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

//Slick horizontal carousel
$(".slick-slider").slick({
	infinite: false,
	// autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	],
	arrows: true,
	prevArrow: `<button type='button' class='btn-arrow slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
	nextArrow: `<button type='button' class='btn-arrow slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
});

// OVERLAY
TweenMax.to(".first", 1, {
	delay: 0.3,
	top: "-150%",
	ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
	delay: 0.5,
	top: "-150%",
	ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
	delay: 0.7,
	top: "-150%",
	ease: Expo.easeInOut
});

setTimeout(() => {
	document.querySelector("body,html").style.overflow = "auto";
}, 1600);
