// $(window).on("load", function () {

// });

$(function () {
  if ($(".juneSlider__area").length) {
    $(".juneSlider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slide: ".juneSlider__item",
      prevArrow: '<div class="june__slickBtnPrev"><i class="icon-arr-left1"></i></div>',
      nextArrow: '<div class="june__slickBtnNext"><i class="icon-arr-right1"></i></div>',
      dotsClass: "june__dots",
    });
  }

  // главный слайдер на главной
  if ($(".swiper-container1").length) {
    var mySwiper1 = new Swiper(".swiper-container1", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination1",
        type: "bullets",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide").children(".swiper__cadr").removeClass("animationfadeIn").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationfadeIn");
          }, 500);
        },
        slideChange: function () {
          $(".swiper-slide").children(".swiper__cadr").removeClass("animationfadeIn").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationfadeIn");
          }, 500);
        },
      },
    });
  }
});
