                           

(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	// window.load = function () {
	// 	document.getElementById('preloader').style.display = 'none';
	// }

	$(window).on("load",function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});




	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var portfolio_item = $('.portfolio-items-wrapper');
	if (portfolio_item.length) {
		var mixer = mixitup(portfolio_item);
	};


	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
 
	//Init the slider
	$('.testimonial-slider').slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000
	});


	/* ========================================================================= */
	/*	Clients Slider Carousel
	/* =========================================================================  */
 
	//Init the slider
	$('.clients-logo-slider').slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		slidesToShow: 5,
  		slidesToScroll: 1,
	});




	/* ========================================================================= */
	/*	Company Slider Carousel
	/* =========================================================================  */
	$('.company-gallery').slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		slidesToShow: 5,
  		slidesToScroll: 1,
	});


/* ========================================================================= */
/*	On scroll fade/bounce effect
/* ========================================================================= */
	var scroll = new SmoothScroll('a[href*="#"]');
	
/* ========================================================================= */
	/*	Header Scroll Background Change
	/* ========================================================================= */	
	
$(window).scroll(function() {    
var scroll = $(window).scrollTop();
 //console.log(scroll);
if (scroll > 200) {
    //console.log('a');
    $(".navigation").addClass("sticky-header");
} else {
    //console.log('a');
    $(".navigation").removeClass("sticky-header");
}});


})(jQuery);

//Array of images which you want to show: Use path you want.
var images = new Array('harvey-states/Harvey%20States%20Competition.jpg','lfny/LFNY%20Competition.jpg','carle-place/Carle%20Place%20Competition.jpg','farmingdale/Farmingdale%20Competition.jpg');
var nextimage = 0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.global-header')
    $(".hero-area").css('background-image','url("/images/competitions/'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,3000);
    });
}
