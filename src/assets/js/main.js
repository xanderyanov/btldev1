// $(window).on("load", function () {

// });

$(function () {
  $(".mainTop__menuItem_js, .menuBottom1__item_js").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var menuId = $this.data("id");
    console.log("___искомый id " + menuId);

    var hideBox = $(".mainTop__hideBox");

    $(".mainTop__hideBoxOverlay").fadeIn();
    $("body").addClass("stop");

    $.each(hideBox, function (index, o) {
      var $o = $(o);
      // $o.removeClass("visible");
      // $o.addClass("hidden");

      var hideBoxId = $o.data("index");
      if (menuId === hideBoxId) {
        $o.addClass("mainTop__hideBox_open").slideDown(300);
      }
    });
  });
  $(".mainTop__hideBoxClose").on("click", function (e) {
    e.preventDefault();
    $(".mainTop__hideBox").slideUp(300).removeClass("mainTop__hideBox_open");
    $(".mainTop__hideBoxOverlay").fadeOut();
    $("body").removeClass("stop");
  });
  $(".mainTop__hideBoxOverlay").on("click", function (e) {
    e.preventDefault();
    $(".mainTop__hideBox").slideUp(300).removeClass("mainTop__hideBox_open");
    $(".mainTop__hideBoxOverlay").fadeOut();
    $("body").removeClass("stop");
  });

  var menuBottom1_height = $(".menuBottom1__area").outerHeight();
  console.log(menuBottom1_height);
  $(".menuBottom1__areaFake").css({ height: menuBottom1_height });

  if ($(".mainPageIdx").length) {
    var topScrollCount = $(".mainTop__area").outerHeight();
    var menu = $(".menuBottom1__area_main");
    var menuHeight = $(".menuBottom1__area_main").outerHeight();
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > topScrollCount) {
        // menu.css({ bottom: "0" });
        menu.addClass("menuBottom1__area_active");
      } else if ($(this).scrollTop() <= topScrollCount) {
        // menu.css({ bottom: -menuHeight });
        menu.removeClass("menuBottom1__area_active");
      }
    });
  }

  if (!$(".mainPageIdx").length) {
    var topScrollCount = $(".site__header").outerHeight();
    var menu = $(".menuBottom1__area_main");
    var menuHeight = $(".menuBottom1__area_main").outerHeight();
    // $(".menuBottom1__areaFake").addClass("menuBottom1__areaFakeMb");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > topScrollCount) {
        // menu.css({ bottom: "0" });
        menu.addClass("menuBottom1__area_active");
      } else if ($(this).scrollTop() <= topScrollCount) {
        // menu.css({ bottom: -menuHeight });
        menu.removeClass("menuBottom1__area_active");
      }
    });
  }

  //Открытие мобильного инстаграм - начало
  $(".igTopBtn2").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".igMobile__overlay").fadeOut(200);
      $(".igMobile__area").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".igMobile__overlay").fadeIn(200);
      $(".igMobile__area").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".igMobile__close").on("click", function () {
    $(".igTopBtn2").removeClass("open");
    $(".igMobile__overlay").fadeOut(200);
    $(".igMobile__area").slideUp(200);
    $("body").removeClass("stop");
  });
  $(".igMobile__overlay").on("click", function () {
    $(".igTopBtn2").removeClass("open");
    $(this).fadeOut(200);
    $(".igMobile__area").slideUp(200);
    $("body").removeClass("stop");
  });
  //Открытие мобильного инстаграм - конец

  //Открытие мобильного меню главного - начало
  $(".mbMenu__mainBtn_JS").on("click", function (e) {
    e.preventDefault();
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_solutionJs").slideUp(200);
    $(".mbMenu__solutionBtn_JS").removeClass("open");
    $(".mbMenu__openBox_servJs").slideUp(200);
    $(".mbMenu__servBtn_JS").removeClass("open");
    $(".mbMenu__openBox_searchJs").slideUp(200);
    $(".mbMenu__searchBtn_JS").removeClass("open");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".mbMenu__overlay").fadeOut(200);
      $(".mbMenu__openBox_mainMenuJs").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".mbMenu__overlay").fadeIn(200);
      $(".mbMenu__openBox_mainMenuJs").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".mbMenu__openBoxClose").on("click", function () {
    $(".mbMenu__mainBtn_JS").removeClass("open");
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_mainMenuJs").slideUp(200);
    $("body").removeClass("stop");
  });
  $(".mbMenu__overlay").on("click", function () {
    $(".mbMenu__mainBtn_JS").removeClass("open");
    $(this).fadeOut(200);
    $(".mbMenu__openBox_mainMenuJs").slideUp(200);
    $("body").removeClass("stop");
  });
  //Открытие мобильного главного - конец

  //Открытие мобильного меню услуг - начало
  $(".mbMenu__servBtn_JS").on("click", function (e) {
    e.preventDefault();
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_solutionJs").slideUp(200);
    $(".mbMenu__solutionBtn_JS").removeClass("open");
    $(".mbMenu__openBox_mainMenuJs").slideUp(200);
    $(".mbMenu__mainBtn_JS").removeClass("open");
    $(".mbMenu__openBox_searchJs").slideUp(200);
    $(".mbMenu__searchBtn_JS").removeClass("open");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".mbMenu__overlay").fadeOut(200);
      $(".mbMenu__openBox_servJs").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".mbMenu__overlay").fadeIn(200);
      $(".mbMenu__openBox_servJs").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".mbMenu__openBoxClose").on("click", function () {
    $(".mbMenu__servBtn_JS").removeClass("open");
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_servJs").slideUp(200);
    $("body").removeClass("stop");
  });
  $(".mbMenu__overlay").on("click", function () {
    $(".mbMenu__servBtn_JS").removeClass("open");
    $(this).fadeOut(200);
    $(".mbMenu__openBox_servJs").slideUp(200);
    $("body").removeClass("stop");
  });
  //Открытие мобильного меню - конец

  //Открытие мобильного меню решить проблему - начало
  $(".mbMenu__solutionBtn_JS").on("click", function (e) {
    e.preventDefault();
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_servJs").slideUp(200);
    $(".mbMenu__servBtn_JS").removeClass("open");
    $(".mbMenu__openBox_mainMenuJs").slideUp(200);
    $(".mbMenu__mainBtn_JS").removeClass("open");
    $(".mbMenu__openBox_searchJs").slideUp(200);
    $(".mbMenu__searchBtn_JS").removeClass("open");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".mbMenu__overlay").fadeOut(200);
      $(".mbMenu__openBox_solutionJs").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".mbMenu__overlay").fadeIn(200);
      $(".mbMenu__openBox_solutionJs").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".mbMenu__openBoxClose").on("click", function () {
    $(".mbMenu__solutionBtn_JS").removeClass("open");
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_solutionJs").slideUp(200);
    $("body").removeClass("stop");
  });
  $(".mbMenu__overlay").on("click", function () {
    $(".mbMenu__solutionBtn_JS").removeClass("open");
    $(this).fadeOut(200);
    $(".mbMenu__openBox_solutionJs").slideUp(200);
    $("body").removeClass("stop");
  });
  //Открытие мобильного меню решить проблему - конец

  //Открытие мобильного поиска - начало
  $(".mbMenu__searchBtn_JS").on("click", function (e) {
    e.preventDefault();
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_servJs").slideUp(200);
    $(".mbMenu__servBtn_JS").removeClass("open");
    $(".mbMenu__openBox_mainMenuJs").slideUp(200);
    $(".mbMenu__mainBtn_JS").removeClass("open");
    $(".mbMenu__openBox_solutionJs").slideUp(200);
    $(".mbMenu__solutionBtn_JS").removeClass("open");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".mbMenu__overlay").fadeOut(200);
      $(".mbMenu__openBox_searchJs").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".mbMenu__overlay").fadeIn(200);
      $(".mbMenu__openBox_searchJs").slideDown(200);
      $("body").addClass("stop");
    }
  });
  $(".mbMenu__openBoxClose").on("click", function () {
    $(".mbMenu__searchBtn_JS").removeClass("open");
    $(".mbMenu__overlay").fadeOut(200);
    $(".mbMenu__openBox_searchJs").slideUp(200);
    $("body").removeClass("stop");
  });
  $(".mbMenu__overlay").on("click", function () {
    $(".mbMenu__searchBtn_JS").removeClass("open");
    $(this).fadeOut(200);
    $(".mbMenu__openBox_searchJs").slideUp(200);
    $("body").removeClass("stop");
  });
  //Открытие мобильного поиска - конец

  $(window).on("resize", function () {
    var bm = $(".mbMenu__outer").outerHeight();
    $(".mbMenu__fake").css({ height: bm });
    $(".mbMenu__openBox").css({ bottom: bm });
  });
  $(window).resize();

  // $(".openInner").on("click", function (e) {
  //   e.preventDefault();
  //   var daughterUl = $(this).closest(".lev1").find("ul");
  //   var allUl = $(this).closest(".leftMenu").find("li.lev1 ul");
  //   var otherOpenInner = $(this).closest(".leftMenu").find(".openInner");
  //   if ($(this).hasClass("open")) {
  //     $(this).removeClass("open");
  //     daughterUl.slideUp(200);
  //   } else {
  //     otherOpenInner.removeClass("open");
  //     $(this).addClass("open");
  //     allUl.slideUp(200);
  //     daughterUl.slideDown(200);
  //   }
  // });

  //это для трех уровней раздвижного вертикального меню, в теории дл любого количества уровней
  $(".openInner").on("click", function (e) {
    e.preventDefault();
    var daughterUl = $(this).closest("li").find("> ul");
    var allUl = $(this).closest("ul").find("li ul");
    var otherOpenInner = $(this).closest("ul").find(".openInner");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      daughterUl.slideUp(200);
    } else {
      otherOpenInner.removeClass("open");
      $(this).addClass("open");
      allUl.slideUp(200);
      daughterUl.slideDown(200);
    }
  });

  $(".solution__btn").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".solution").slideUp(200);
    } else {
      $(this).addClass("active");
      $(".solution").slideDown(200);
    }
  });

  // Открытие и закрытие адаптивного меню по кнопке
  $(".menuButton1__area_JS").on("click", function (e) {
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

  //START--- Открытие и закрытие поиска по кнопке .topSearch_JS
  $(".topSearch_JS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".search1__area").slideUp(200);
      $("body").removeClass("stop");
      $(".search1__overlay").fadeOut();
    } else {
      $(this).addClass("open");
      $(".search1__area").slideDown(200);
      $("body").addClass("stop");
      $(".search1__overlay").fadeIn();
    }
  });
  $(".search1__close").click(function () {
    $(".topSearch_JS").removeClass("open");
    $(".search1__area").slideUp(200);
    $("body").removeClass("stop");
    $(".search1__overlay").fadeOut();
  });
  $(".search1__overlay").click(function () {
    $(".topSearch_JS").removeClass("open");
    $(".search1__area").slideUp(200);
    $("body").removeClass("stop");
    $(".search1__overlay").fadeOut();
  });
  //END--- Открытие и закрытие поиска по кнопке .topSearch_JS

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

  setTimeout(function () {
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
  }, 500);

  $(".phoneZ").mask("+7 (999) 999-9999");
  $(".phone1").mask("+7 (999) 999-9999");
  $(".phone2").mask("+7 (999) 999-9999");
  $(".phone3").mask("+7 (999) 999-9999");
  $(".phone4").mask("+7 (999) 999-9999");

  // прокрутка доя якоря на странице процедуры
  $("#goToPriceAnchor").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#priceAnchor").offset().top }, 1000);
    e.preventDefault();
  });

  $(".toTop").hide();
  $(window).on("scroll", function () {
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

  // фильтрация специалистов

  $(".menuCategoryMastersLink").on("click", function (e) {
    e.preventDefault();
    $(".menuCategoryMastersLink").removeClass("active");
    var $this = $(this);
    var IdToFind = $this.data("id");
    console.log("___искомый id " + IdToFind);

    var specs = $(".mastersBox__itemOuter");

    $.each(specs, function (index, o) {
      var $o = $(o);
      $o.removeClass("visible");
      $o.addClass("hidden");

      var sid = $o.data("sid");
      var sp = typeof sid === "number" ? [sid.toString()] : sid.split(",");
      console.log("Мастер " + sp);
      $.each(sp, function (index, z) {
        console.log("Значение " + z);
        if (z.indexOf(IdToFind) != -1) {
          $o.removeClass("hidden");
          $o.addClass("visible");
        }
      });
    });
    $this.addClass("active");
  });
  $(".menuCategoryMastersLink__all").on("click", function (e) {
    e.preventDefault();

    $(".mastersBox__itemOuter").removeClass("hidden");
    $(".mastersBox__itemOuter").addClass("visible");
    $(this).addClass("active");
  });

  // formZ

  // Открытие и закрытие заказа звонка по кнопке
  $(".header__callAction").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".formZ__area").slideUp(200);
    } else {
      $(this).addClass("active");
      $(".formZ__area").slideDown(200);
    }
  });
  // Закрытие заказа звонка по кнопке Close
  $(".formZ__close").click(function () {
    $(".header__callAction").removeClass("active");
    $(".formZ__area").slideUp(250);
  });

  $(".formZ").on("click", ".submitZ", function (e) {
    e.preventDefault();
    var name = $(".nameZ").val();
    var phone = $(".phoneZ").val();
    var workemail = $(".work_emailZ").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    // var recaptcha = grecaptcha.getResponse("recaptcha1");
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".nameZ").addClass("error");
      setTimeout(function () {
        $(".nameZ").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phoneZ").addClass("error");
      setTimeout(function () {
        $(".phoneZ").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mailz.php",
        {
          name: name,
          phone: phone,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".nameZ").val("").removeClass("error");
          $(".phoneZ").val("").removeClass("error");
          $(".header__callAction").removeClass("active");
          $(".formZ__area").slideUp(250);
        }
      );
    }
  });

  // form1 (z1block)
  $(".form1").on("click", ".submit1", function (e) {
    console.log("клик");
    e.preventDefault();
    var subj = "Горизонтальная форма внизу страницы";
    var name = $(".name1").val();
    var phone = $(".phone1").val();
    var workemail = $(".work_email1").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".name1").addClass("error");
      setTimeout(function () {
        $(".name1").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phone1").addClass("error");
      setTimeout(function () {
        $(".phone1").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mail.php",
        {
          subj: subj,
          name: name,
          phone: phone,
          recaptcha: recaptcha,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".name1").val("").removeClass("error");
          $(".phone1").val("").removeClass("error");
        }
      );
    }
  });

  $(".form2").on("click", ".submit2", function (e) {
    e.preventDefault();
    var subj = $(".subj2").val();
    var name = $(".name2").val();
    var surname = $(".surname2").val();
    name = name + " " + surname;
    var phone = $(".phone2").val();
    var email = $(".email2").val();
    var workemail = $(".work_email2").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".name2").addClass("error");
      setTimeout(function () {
        $(".name2").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phone2").addClass("error");
      setTimeout(function () {
        $(".phone2").removeClass("error");
      }, 3000);
    } else if (email == "") {
      swal({
        title: "Ошибка Email",
        text: "Заполните поле Email",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email2").addClass("error");
      setTimeout(function () {
        $(".email2").removeClass("error");
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: "Ошибка",
        text: "Корректно заполните поле e-mail",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email2").addClass("error");
      setTimeout(function () {
        $(".email2").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mail.php",
        {
          subj: subj,
          name: name,
          phone: phone,
          email: email,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".name2").val("").removeClass("error");
          $(".surname2").val("").removeClass("error");
          $(".phone2").val("").removeClass("error");
          $(".email2").val("").removeClass("error");
        }
      );
    }
  });

  $(".form3").on("click", ".submit3", function (e) {
    e.preventDefault();
    var subj = "Сообщение со страницы контактов";
    var name = $(".name3").val();
    var surname = $(".surname3").val();
    name = name + " " + surname;
    var phone = $(".phone3").val();
    var email = $(".email3").val();
    var workemail = $(".work_email3").val();
    var message = $(".message3").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    // var recaptcha = grecaptcha.getResponse();
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".name3").addClass("error");
      setTimeout(function () {
        $(".name3").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phone3").addClass("error");
      setTimeout(function () {
        $(".phone3").removeClass("error");
      }, 3000);
    } else if (email == "") {
      swal({
        title: "Ошибка Email",
        text: "Заполните поле Email",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email3").addClass("error");
      setTimeout(function () {
        $(".email3").removeClass("error");
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: "Ошибка",
        text: "Корректно заполните поле e-mail",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email3").addClass("error");
      setTimeout(function () {
        $(".email3").removeClass("error");
      }, 3000);
    } else if (message == "") {
      swal({
        title: "Пустое сообщение",
        text: "Заполните текст сообщения",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".message3").addClass("error");
      setTimeout(function () {
        $(".message3").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    }
    // else if (!recaptcha) {
    //   swal({
    //     title: "поставьте галочку",
    //     text: "при проверке на спам",
    //     type: "error",
    //     confirmButtonText: "ок",
    //   });
    // }
    else {
      $.post(
        "mail.php",
        {
          subj: subj,
          name: name,
          phone: phone,
          email: email,
          message: message,
          // recaptcha: recaptcha,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".name3").val("").removeClass("error");
          $(".surname3").val("").removeClass("error");
          $(".phone3").val("").removeClass("error");
          $(".email3").val("").removeClass("error");
          $(".message3").val("").removeClass("error");
        }
      );
    }
  });

  // Открытие и закрытие записи с главной по кнопке
  $(".mainConsBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".form4__area").slideUp(200);
    } else {
      $(this).addClass("active");
      $(".form4__area").slideDown(200);
    }
  });
  // Закрытие записи с главной по кнопке Close
  $(".form4__close").click(function () {
    $(".mainConsBtn").removeClass("active");
    $(".form4__area").slideUp(250);
  });

  $(".form4").on("click", ".submit4", function (e) {
    e.preventDefault();
    var subj = "Запись на консультацию с главной страницы";
    var name = $(".name4").val();
    var surname = $(".surname4").val();
    name = name + " " + surname;
    var phone = $(".phone4").val();
    var email = $(".email4").val();
    var workemail = $(".work_email4").val();
    var message = $(".message4").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == "" || name == " ") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".name4").addClass("error");
      setTimeout(function () {
        $(".name4").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phone4").addClass("error");
      setTimeout(function () {
        $(".phone4").removeClass("error");
      }, 3000);
    } else if (email == "") {
      swal({
        title: "Ошибка Email",
        text: "Заполните поле Email",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email4").addClass("error");
      setTimeout(function () {
        $(".email4").removeClass("error");
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: "Ошибка",
        text: "Корректно заполните поле e-mail",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email4").addClass("error");
      setTimeout(function () {
        $(".email4").removeClass("error");
      }, 3000);
    } else if (message == "") {
      swal({
        title: "Пустое сообщение",
        text: "Заполните текст сообщения",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".message4").addClass("error");
      setTimeout(function () {
        $(".message4").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mail.php",
        {
          subj: subj,
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".name4").val("").removeClass("error");
          $(".surname4").val("").removeClass("error");
          $(".phone4").val("").removeClass("error");
          $(".email4").val("").removeClass("error");
          $(".message4").val("").removeClass("error");
          $(".mainConsBtn").removeClass("active");
          $(".form4__area").slideUp(250);
        }
      );
    }
  });

  // $("#instafeed").length;
  // ? ((a = new Instafeed({
  //     get: "user",
  //     userId: 17841403346668216,
  //     clientId: "10fdf054a0284eaeb40ad704cccde93d",
  //     accessToken: "IGQVJVZAzY1YU1OcEVuQVRSQkNIUVZAQV1NFQjFVdDNkdjlRc2Y1TUFhMkxKbzBLWWhqajJzcUo2dmlXeG4wN3hRVUJJR2pmUFhTaUJiQ09SZAmxINjZACY1FGMGlzT0N6M3duWjBDb3MtdW92enNCNEVySnNZAZAVJacm10RUhv",
  //     limit: 12,
  //     resolution: "low_resolution",
  //     template:
  //       '<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igtrbg.png" alt="{{caption}}"/></a></div>',
  //   })),
  //   a.run())
  // : void 0;
  // var feed = new Instafeed({
  //   accessToken:
  //     "IGQVJVZAzY1YU1OcEVuQVRSQkNIUVZAQV1NFQjFVdDNkdjlRc2Y1TUFhMkxKbzBLWWhqajJzcUo2dmlXeG4wN3hRVUJJR2pmUFhTaUJiQ09SZAmxINjZACY1FGMGlzT0N6M3duWjBDb3MtdW92enNCNEVySnNZAZAVJacm10RUhv",
  //   limit: 12,
  //   resolution: "low_resolution",
  //   template:
  //     '<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igtrbg.png" alt="{{caption}}"/></a></div>',
  // });
  // feed.run();
});

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if ($(".map__area").length) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [51.53636907237114, 46.022191999999926],
      zoom: 14,
      controls: ["zoomControl"],
    });

    myMap.behaviors.disable("scrollZoom");
    if (isMobile.any()) {
      myMap.behaviors.disable("drag");
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [51.53636907237114, 46.022191999999926],
      {
        balloonContentHeader:
          '<div class="baloon__top">"БЬЮТИ Лаунж"</div>' +
          '<div class="baloon__description">Центр косметологии и красоты</div>',
        balloonContentBody:
          '<div class="baloon__content"><img src="assets/img/logo-map2.png">' +
          '<a href="tel:88452260000">8(8452) 26-00-00</a>',
        balloonContentFooter: '<div class="baloon__footer">Саратов, ул. Московская д.117, <br>ТК «Мир», 2 этаж.</div>',
        clusterCaption: "Косметология <br>салон массажа<br>HAIR услуги<br>NAIL-BAR<br>профессиональная косметика",
        hintContent: '<div class="baloon__top">Центр косметологии и красоты "БЬЮТИ Лаунж"</div>',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "assets/img/marker.png",
        iconImageSize: [30, 48],
        iconImageOffset: [-15, -48],
      }
    );

    var clusterIcons = [
      {
        href: "/images/pointer.png",
        size: [29, 46],
        offset: [0, 0],
      },
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      clusterBalloonContentLayout: "cluster#balloonCarousel",
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      clusterBalloonPagerSize: 5,
      clusterBalloonPagerType: "marker",
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}
