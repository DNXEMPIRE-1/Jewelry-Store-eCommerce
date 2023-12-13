/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Slider Carouse JS
        var banner_owl = $('#banner-carousel');
        banner_owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });


        // Slider Caption Animation JS
        var caption = $('.banner-caption *');
        caption.addClass('animated');

        banner_owl.on('translate.owl.carousel', function (event) {
            caption.removeClass('fadeInUp');
            caption.addClass('hide');
        });

        banner_owl.on('translated.owl.carousel', function (event) {
            caption.addClass('fadeInUp');
            caption.removeClass('hide');
        });

        // Product Carousel JS
        $('.products-carousel').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoplay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoplay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    nav: true
                }
            }
        });

        // New Product Carousel JS
        $('.new-products-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    margin: 0,
                    autoPlay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoPlay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    nav: true
                },
                // breakpoint from 1200 up
                1200: {
                    items: 4,
                    nav: true
                }
            }
        });

        // New Product Two Carousel JS
        $('.new-products-carousel-two').owlCarousel({
            items: 2,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoPlay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoPlay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 2,
                    nav: true
                }
            }
        });

        // New Product Gallery Carousel JS
        $('.new-pro-gallery-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Testimonial Carousel JS
        $('#testimonialCarousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Image Gallery JS
        $('.imgage-gallery-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Sale Product Carousel
        $('.sale-product-carousel').owlCarousel({
            items: 1,
            loop: false,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Home 4 Product Carousel
        $('.products-categories-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Single Product  Carousel Js
        $('.product-thumb-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
        });

        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Body Popup Modal
        $('.modal-active').on('click', function () {
            $('.body-popup-modal-area').fadeIn(200);

            return false;
        });

        $('.modal-close').on('click', function () {
            $('.body-popup-modal-area').fadeOut();

            return false;
        });

        $('.menu-open').on('click', function () {
            $('.navigation-area-wrap').fadeIn(200);

            return false;
        });

        $('.menu-close').on('click', function () {
            $('.navigation-area-wrap').fadeOut();

            return false;
        });

        // Responsive Slicknav
        $('#mainmenu').slicknav({
            label: '',
            prependTo: '#header-area',
            closedSymbol: '+',
            openedSymbol: '-'
        });

        // Scroll to top
        $('.scrolltotop').smoothScroll({
            direction: 'top',
            scrollTarget: 'html',
            speed: 600
        });

        // Nice Select Js
        $('select').niceSelect();

        // Product View Style JS
        var view_style_wrap = $('.shop-page-products-wrap > .products-wrapper');

        $('.product-view li.column-gird').on('click', function () {
            view_style_wrap.removeClass('products-gird products-list-view');
        });

        $('.product-view li.box-gird').on('click', function () {
            view_style_wrap.addClass('products-gird');
            view_style_wrap.removeClass('products-list-view');
        });

        $('.product-view li.list').on('click', function () {
            view_style_wrap.addClass('products-list-view');
            view_style_wrap.removeClass('products-gird');
        });

        $('.product-view li').on('click', function () {
            $('.product-view li').removeClass('current');
            $(this).addClass('current');
        });

        // Checkout Page Checkbox
        $("#create_pwd").on("change", function () {
            $(".account-create").slideToggle("100");
        });

        $("#ship_to_different").on("change", function () {
            $(".ship-to-different").slideToggle("100");
        });

        // Payment Method Accordion
        $('input[name="paymentmethod"]').on('click', function () {

            var $value = $(this).attr('value');

            $('.payment-method-details').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });


        // Sale Products Countdown
        $(".sale-product-countdown").each(function (index, element) {
            var $element = $(element),
                $date = $element.data('date');

            $element.countdown($date, function (event) {
                var $this = $(this).html(event.strftime(''

                    + '<div class="counter-item"><span class="counter-no">%D</span><span class="counter-label">Days</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%H</span><span class="counter-label">Hours</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%M</span><span class="counter-label">Mins</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%S</span><span class="counter-label">Secs</span></div>'));
            });
        });


        //Email Ajax Submission
        $('#subscribe-form').submit(function () {
            var action = $(this).attr('action'),
                result = $('#result');

            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#address').attr('value')
                },
                success: function (data) {
                    result.html(data);
                    result.removeClass('alert alert-danger');
                    result.addClass('alert alert-success');
                },
                error: function () {
                    result.html('Sorry, an error occurred.');
                    result.removeClass('alert alert-success');
                    result.addClass('alert alert-danger');
                }
            });
            return false;
        });

        // All Window Scroll Function
        $(window).scroll(function () {
            //Scroll top Hide Show
            if ($(window).scrollTop() >= 400) {
                $('.scrolltotop').addClass('show');
            } else {
                $('.scrolltotop').removeClass('show');
            }

            //Header Fix JS
            if ($(window).scrollTop() >= 400) {
                $('#header-area').addClass('fixed');
            } else {
                $('#header-area, .slicknav_menu').removeClass('fixed');
            }
        });

    }); //Ready Function End

    jQuery(window).on('load', function () {

    }); //window load End
}(jQuery));