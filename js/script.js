import { subscribe } from "./firebase.js";
// Initialize Firebase
$(window).on("load", function () {
  $(".preloader").fadeOut(100);
  $(".hiding-buttons").hide();
  // $(".input-subscribe").hide();
  // $(".btn-subscribe").hide();
});
(function ($) {
  "use strict";

  // navbarDropdown
  if ($(window).width() < 992) {
    $(".navigation .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  // product Slider
  $(".product-image-slider").slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data("image");
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    },
  });

  // Product slider
  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".btn-main").on("click", function () {
    $(this).hide();
    $(".hiding-buttons").show();
  });
  $(".btn-subscribe").on("click", function () {
    subscribe();
  });

  // $('.cta-button-subscribe').on('click', function () {
  // 		$(this).class('.dropdown-menu').animate({
  // 			height: 'toggle'
  // 		}, 300);
  // 	});
})(jQuery);
