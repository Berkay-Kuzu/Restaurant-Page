$(document).ready(function () {
    // Sticky Nav
    $('.js--section-features').waypoint(
        function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '60px;'
        }
    );


    // Smooth Scrolling
    $('.cf a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });


    // Animations
    $('.js--wp-1').waypoint(
        function (direction) {
            $('.js--wp-1').addClass('animated fadeIn')
        }, {
            offset: '50%'
        }
    );

    $('.js--wp-2').waypoint(
        function (direction) {
            $('.js--wp-2').addClass('animated fadeInUp')
        }, {
            offset: '50%'
        }
    );

    $('.js--wp-3').waypoint(
        function (direction) {
            $('.js--wp-3').addClass('animated fadeIn')
        }, {
            offset: '50%'
        }
    );

    $('.js--wp-4').waypoint(
        function (direction) {
            $('.js--wp-4').addClass('animated pulse')
        }, {
            offset: '50%'
        }
    );

    // Responsive Navigation
    $('.js--nav-icon').click(
        function () {
            let nav = $('.js--main-nav');

            nav.slideToggle(200);
        }
    );
});