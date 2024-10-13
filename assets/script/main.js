$(document).ready(function(){
	$('.carousel').slick({
		autoplay: false,
		autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		arrows: true,
		dots: true,
		fade: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/image/arrow-left-circle-fill.svg" alt="" class="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/assets/image/arrow-right-circle-fill.svg" alt="" class="next-arrow"></button>',
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
	});

});
$(function(){
    $('.js-accordion-title').click(function(){
        $(this).next('.js-accordion-inner').slideToggle();
        $(this).toggleClass("open");
    });
});

$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() >100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('body, html').animate({ scrollTop:0}, 600);
        return false;
    });
});


