export const slider = $(".slick-slider").slick({
	infinite: false,
	// autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
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
