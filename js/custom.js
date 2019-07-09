$(document).ready(function(){
	$('#main-slider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		adaptiveHeight: true,
		pager: false
	});

	$('#opinions-slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		pager: true,            
		controls: false
	});	

	$(".navbar-toggle").click(function(){
	    $("#menu-system").toggle(); 
	}); 


if ($('#back-to-top').length) {
    var scrollTrigger = 600, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show-arrow');
            } else {
                $('#back-to-top').removeClass('show-arrow');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}	


});