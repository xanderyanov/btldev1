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
});
