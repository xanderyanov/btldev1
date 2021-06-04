function siteResizeFunction() {
  topLine3 = $(".topLine3__area").height();
  header3 = $(".header3__area");
  header3Height = $(".header3__area").height();
  prevWindowWidth = windowWidth;
  windowWidth = $window.width();

  if (prevWindowWidth <= 1024 && windowWidth > 1024) {
    $(".eShopMenu__mobileBtn").removeClass("eShopMenu__mobileBtn_active");
    $(".eShopMenu__outer_catalogOnly").show();
    $(".floatBox__leftOverlay").fadeOut(300);
    $("body").removeClass("stop");
  }
  if (prevWindowWidth > 1024 && windowWidth <= 1024) {
    $(".eShopMenu__outer_catalogOnly").hide();
  }
  if (prevWindowWidth <= 768 && windowWidth > 768) {
    // $(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("open").show();
    eShopCabTabDesktop();
  }
  if (prevWindowWidth > 768 && windowWidth <= 768) {
    // $(".cab2__tab > a").removeClass("active");
    // $(".cab2__tab > section").removeClass("openSection").slideUp();
    // $(".cab2__tabs").children("li").first().children("a").removeClass("active").next().removeClass("open").hide();
    eShopCabTabMobile();
  }

  if (prevWindowWidth <= 600 && windowWidth > 600) {
    $(".masterWindowForm__overlay").fadeOut(300);
    $("body").removeClass("stop");
  }
  // if (prevWindowWidth > 600 && windowWidth <= 600) {
  //   $(".eShopMenu__outer_catalogOnly").hide();
  // }
}

$(function () {
  // siteResizeFunction();
  $window.on("resize", siteResizeFunction);
});
