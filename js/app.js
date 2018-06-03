$(document).ready(function() {
	$('.banner-carousel').slick({
		arrows: true
	});
})

$(document).ready(function() {
	$("a.scrollto").click(function() {
		var target = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 1000);
	});
})
