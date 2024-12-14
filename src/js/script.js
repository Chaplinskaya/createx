window.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('.header__menu'),
        headerMenuIcon = document.querySelectorAll('.header__menu_icon'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        headerMenu.classList.toggle('header__menu_active');
    });
    headerMenuIcon.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            headerMenu.classList.toggle('header__menu_active');
        })
    });


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


    function showPassword() {
        const btn = document.querySelectorAll('.password-btn'),
            input = document.querySelectorAll('.form-input');

        btn.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');

                input.forEach(item => {
                    if (item.getAttribute('type') === 'password') {
                        item.setAttribute('type', 'text');

                    } else {
                        item.setAttribute('type', 'password');

                    }

                });
            })
        });
    };

    showPassword();



    //Modal

    $('[data-modal=signin]').on('click', function () {
        $('.overlay, #signin').fadeIn('slow');

    });
    $('[data-modal=signup]').on('click', function () {
        $('.overlay, #signup').fadeIn('slow');

    });
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');

    });
    $('[data-modal=button-consultation]').on('click', function () {
        $('.overlay, #thanks').fadeIn('slow');
        $('#consultation').fadeOut('slow');

    });
    $('[data-modal=button-subscribe]').on('click', function () {
        $('.overlay, #thanks').fadeIn('slow');

    });
    $('.modal__close').on('click', function () {
        $('.overlay, #signin, #signup, #consultation, #thanks').fadeOut('slow');

    });

    //tabs
    //const allTabs = document.querySelectorAll('.allcourses__wrapper_tabs_tab');

    //$('[data-tab=all]').on('click', function () {
    //allTabs.forEach(item => {
    //item.addEventListener('click', () => {
    //item.classList.toggle('allcourses__wrapper_tabs_tab-active');
    //})
    //});

    $('ul.allcourses__wrapper_tabs').on('click', 'li:not(.allcourses__wrapper_tabs_tab-active)', function () {
        $(this)
            .addClass('allcourses__wrapper_tabs_tab-active').siblings().removeClass('allcourses__wrapper_tabs_tab-active').closest('div.container').find('div.courses__items').removeClass('allcourses__items_active').eq($(this).index()).addClass('allcourses__items_active');
    });

});