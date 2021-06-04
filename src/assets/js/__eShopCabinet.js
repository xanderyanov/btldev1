$(function () {
  if ($window.width() <= 768) {
    eShopCabTabMobile();
  } else {
    eShopCabTabDesktop();
  }

  function eShopCabTabDesktop() {
    $(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("open").show();
    $(".cab2__tabs").on("click", "li > a", function (e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().removeClass("openSection").hide();
      } else {
        $(".cab2__tab > a").removeClass("active");
        $(this).addClass("active");
        $(".cab2__tab > section").removeClass("openSection").hide();
        $(this).next().addClass("openSection").show();
      }
    });
  }

  function eShopCabTabMobile() {
    $(".cab2__tab > a").removeClass("active");
    $(".cab2__tab > section").removeClass("openSection").slideUp();
    $(".cab2__tabs").children("li").first().children("a").removeClass("active").next().removeClass("open").hide();
    $(".cab2__tabs").on("click", "li > a", function (e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().removeClass("openSection").slideUp();
      } else {
        $(".cab2__tab > a").removeClass("active");
        $(this).addClass("active");
        $(".cab2__tab > section").removeClass("openSection").slideUp();
        $(this).next().addClass("openSection").slideDown();
      }
    });
  }

  // if ($window.width() <= 768) {
  //   $(".cab2__tab > a").removeClass("active");
  //   $(".cab2__tab > section").removeClass("openSection").slideUp();
  //   $(".cab2__tabs").children("li").first().children("a").removeClass("active").next().removeClass("open").hide();
  //   $(".cab2__tabs").on("click", "li > a", function (e) {
  //     e.preventDefault();
  //     if ($(this).hasClass("active")) {
  //       $(this).removeClass("active");
  //       $(this).next().removeClass("openSection").slideUp();
  //     } else {
  //       $(".cab2__tab > a").removeClass("active");
  //       $(this).addClass("active");
  //       $(".cab2__tab > section").removeClass("openSection").slideUp();
  //       $(this).next().addClass("openSection").slideDown();
  //     }
  //   });
  // } else {
  //   $(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("open").show();
  //   $(".cab2__tabs").on("click", "li > a", function (e) {
  //     e.preventDefault();
  //     if ($(this).hasClass("active")) {
  //       $(this).removeClass("active");
  //       $(this).next().removeClass("openSection").hide();
  //     } else {
  //       $(".cab2__tab > a").removeClass("active");
  //       $(this).addClass("active");
  //       $(".cab2__tab > section").removeClass("openSection").hide();
  //       $(this).next().addClass("openSection").show();
  //     }
  //   });
  // }

  // function eShopCabTabDesktop() {

  // }

  // function eShopCabTabMobile() {

  // }
});
