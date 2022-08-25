const ele = document.getElementById("vertical-carousel");
ele.style.cursor =
	'url("https://res.cloudinary.com/dvkugaw3b/image/upload/v1641562028/cursor_ad12rf.png"), auto';

let pos = { top: 0, left: 0, x: 0, y: 0 };

export const mouseDownHandler = function (e) {
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


