$(document).ready(function(){
     // navigation start
     $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 45 }, "slow");

    });
	        // == owl carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

         // Fancy Box
    $('[data-fancybox]').fancybox();
    // Isotope = Sort and Filtering
    $('.items').isotope({
        filter : '*',
        animationOption:{
            duration: 1500,
            easing: 'linear',
            queue : false,
        }
    });

    // custom 
    $('.title').click(function(){
        $('.card-body').css('color:red')
    });
})