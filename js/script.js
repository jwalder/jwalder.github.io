$(document).ready(function() {

	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	$('#slideshow > div:first')
    	.fadeOut(2000)
    	.next()
    	.fadeIn(2000)
    	.end()
    	.appendTo('#slideshow');
		},  5000);

	$("#minislideshow > div:gt(0)").hide();

	setInterval(function() { 
	$('#minislideshow > div:first')
    	.fadeOut(2000)
    	.next()
    	.fadeIn(2000)
    	.end()
    	.appendTo('#minislideshow');
		},  7000);

});