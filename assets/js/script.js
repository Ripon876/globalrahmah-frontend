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

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
      $('.header').addClass('sticky-top')
    }else{
    	$('.header').removeClass('sticky-top')
    }
});