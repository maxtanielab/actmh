export const slider = $(".slick-slider").slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
	],
	arrows: true,
	prevArrow: `<button type='button' class='btn-arrow slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
	nextArrow: `<button type='button' class='btn-arrow slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
});
