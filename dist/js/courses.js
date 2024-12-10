//slider

$('.meet__carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class= "slick-next"><img src="icons/right.png"></button>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true

            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                //arrows: false,
                //prevArrow: '<button type="button" class="slick-prev slick-arrow" style="display:none"></button>',
                //nextArrow: '<button type="button" class= "slick-next slick-arrow" style="display:none"></button>',
                slidesToScroll: 1
            }
        }
    ]
});

$('.meet__testimonials_carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class= "slick-next"><img src="icons/right.png"></button>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                prevArrow: '<button type="button" class="slick-prev" style="display:none"></button>',
                nextArrow: '<button type="button" class= "slick-next" style="display:none"></button>'

            },

            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev" style="display:none"></button>',
                nextArrow: '<button type="button" class= "slick-next" style="display:none"></button>'

            }
        }]
});
