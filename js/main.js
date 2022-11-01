$('.visual-sl').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    mouseDrag:false,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    margin:10,
    animateOut: 'fadeOut',
//    animateIn: 'fadeIn',
    navText : ["<span class='material-icons'>keyboard_arrow_left</span>","<span class='material-icons'>keyboard_arrow_right</span>"]
})


$('.basic-sl').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,
	autoplay:true,
    mouseDrag:false,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    margin:10,
    animateOut: 'fadeOut',
//    animateIn: 'fadeIn'
})



$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$("header").addClass("change");
	} else {
		//console.log('a');
		$("header").removeClass("change");
	}
});


//$(function(){
//  $('.btn-trigger').on('click', function() {
//    $(this).toggleClass('active');
//    return false;
//  });
//});

