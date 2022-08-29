const verticalCarousel = document.getElementById("vertical-carousel");

let position = { top: 0, left: 0, x: 0, y: 0 };

function mouseDownHandler(e) {
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
	document.removeEventListener("mousemove", mouseMoveHandler);
	document.removeEventListener("mouseup", mouseUpHandler);
}

// Attach the handler
verticalCarousel.addEventListener("mousedown", mouseDownHandler);

/*=================== Carousel vertical card =================== */

const carouselCard = document.querySelectorAll(
	".header-left-content .carousel-card"
);
// let cardHeight = carouselCard[0].offsetHeight;
const circles = document.querySelectorAll(
	".header-left-content .controls .circle"
);
let msg = document.getElementById("cat-msg");

// Cats msgs
let catMsg = [
	{
		msg: "Je suis Katy, j’ai 2 ans je suis paralysée des mes deux jambes externes, mais je suis une fusée."
	},
	{
		msg: "Je suis Pikky,j'ai 2 ans je suis aveugle de mes deux yeux, mais j'aime beaucoup les câlins."
	},
	{
		msg: "Je suis Billy, j’ai 3 ans je suis atteint du trisomie 21, mais j'aime beaucoup faire des grimaces."
	},
	{
		msg: "Je suis Winter, j’ai 2 ans, je suis albinos et très sensible des yeux, mais j'aime beaucoup les caresses."
	}
];

circles.forEach((circle, index) => {
	circle.addEventListener("click", function () {
		hide(carouselCard, "card");
		carouselCard[index].classList.add("active");

		hide(circles, circle);
		circle.classList.add("active");

		verticalCarousel.scroll({
			top:
				carouselCard[index].offsetTop - carouselCard[index].offsetHeight + 64,
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

			//Show cat msg by scroll and current index
			msg.innerHTML = `${catMsg[wScrollY === 0 ? (index = 0) : index++].msg}`;
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
const responsiveMenu = document.querySelector("#responsive-menu i");
const menu = document.querySelector(".menu");
const listMenu = document.querySelectorAll(".menu .list");

responsiveMenu.addEventListener("click", openResponsiveMenu);

function openResponsiveMenu() {
	menu.classList.toggle("active");
	document.getElementById("responsive-menu").style.zIndex = "999999";
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
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 3600,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 2100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1980,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	],
	arrows: true,
	prevArrow: `<button type='button' class='btn-arrow slick-prev pull-left'><i class="fa-solid fa-angle-left" aria-hidden="true"></i></button>`,
	nextArrow: `<button type='button' class='btn-arrow slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
});

// Cookie Consent
const cookieConsent = document.querySelector("#cookie-consent");
const cookieButton = document.querySelector("#cookie-btn");

cookieButton.addEventListener("click", () => {
	cookieConsent.classList.remove("active");
	//Add the cookie banner in the localstorage
	localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
	if (!localStorage.getItem("cookieBannerDisplayed")) {
		cookieConsent.classList.add("active");
	}
}, 2000);

setTimeout(() => {
	document.querySelector("body,html").style.overflow = "auto";
}, 1600);

// Scroll to top button
const scrollToTop = document.getElementById("scroll-to-top");
window.onscroll = () => {
	if (window.scrollY >= 150) {
		scrollToTop.style.visibility = "visible";
		scrollToTop.style.opacity = 1;
	} else {
		scrollToTop.style.visibility = "hidden";
		scrollToTop.style.opacity = 0;
	}
};

scrollToTop.addEventListener("click", scrollToTopBtn);

function scrollToTopBtn() {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
}
