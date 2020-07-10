// $(window).on("load", function () {

// });

$(function () {
  // Открытие и закрытие адаптивного меню по кнопке
  $(".menuButton1__area_JS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".topMenuAdaptive__area").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".topMenuAdaptive__area").slideDown(200);

      //подгружает контент активного меню в .am_active
      // и его родителя в .am_back
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".topMenuAdaptive__close").click(function () {
    $(".menuButton1__area_JS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".topMenuAdaptive__area").slideUp(200);
  });

  // Открытие и закрытие поиска по кнопке
  $(".topSearch_JS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".search1__area").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".search1__area").slideDown(200);
    }
  });
  // Закрытие поиска по кнопке Close
  $(".search1__close").click(function () {
    $(".topSearch_JS").removeClass("open");
    $(".search1__area").slideUp(200);
  });

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

  if ($(".julySlider__outer").length) {
    var galleryTop = new Swiper(".julySlider", {
      speed: 600,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 5,
      loop: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".julySlider__pagination",
        type: "bullets",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".julySlider__Next",
        prevEl: ".julySlider__Prev",
      },
      breakpoints: {
        640: {
          spaceBetween: 10,
        },
      },
    });
    $(".swiper-container").mouseenter(function () {
      galleryTop.autoplay.stop();
    });
    $(".swiper-container").mouseleave(function () {
      galleryTop.autoplay.start();
    });
  }

  // прокрутка доя якоря на странице процедуры
  $("#goToPriceAnchor").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#priceAnchor").offset().top }, 1000);
    e.preventDefault();
  });

  $(".toTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    backFocus: false, // убирает рассинхрон с swiper
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });
});
