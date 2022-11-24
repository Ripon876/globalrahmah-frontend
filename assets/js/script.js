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
