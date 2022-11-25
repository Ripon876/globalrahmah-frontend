//  mobile nav
// display: block !important;
// left: 0;
$(".hamburger i").click(() => {
	$(".navLinksContainer nav ul.navLinks").toggleClass("showMenu");
});

// basket
$(".close").click(() => {
	$("#sidebar-right").toggleClass("d-none");
});
$(".cartContainer i").click(() => {
	$("#sidebar-right").toggleClass("d-none");
});

// latest appeals
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 30,
	autoplay: true,
	smartSpeed: 200,
	nav: true,
	navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>",
	],
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
			nav: true,
		},
		600: {
			items: 2,
			nav: true,
		},
		1000: {
			items: 3,
			nav: true,
			loop: true,
		},
	},
});

// sticky navbar

$(window).scroll(function () {
	var height = $(window).scrollTop();

	if (height > 35) {
		$(".header").addClass("sticky-top");
	} else {
		$(".header").removeClass("sticky-top");
	}
});

//  mobile menu
$(window).resize(function () {
	if (document.documentElement.clientWidth >= 992) {
		$(".navLinksContainer nav ul.navLinks").removeClass("showMenu");
	}
});

$(document).ready(function () {
	var height = $(window).scrollTop();

	// check and add sticky class in menu
	if (height > 35) {
		$(".header").addClass("sticky-top");
	} else {
		$(".header").removeClass("sticky-top");
	}

	// check and add sticky class in donate form
	if (height > 688) {
		$(".quickDonate").addClass("sticky-bottom position-fixed");
	} else {
		$(".header").removeClass("sticky-bottom position-fixed");
	}
});

//  sticky donate form

$(window).scroll(function () {
	var height = $(window).scrollTop();

	if (height > 688) {
		$(".quickDonate").addClass("sticky-bottom position-fixed");
	
	} else {
		$(".quickDonate").removeClass("sticky-bottom position-fixed");
	}
});
