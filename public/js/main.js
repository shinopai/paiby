$(function () {
  // slick
  $(".slide-items").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
  });

  // back to top
  var topBtn = $(".footer__logo");
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // header nav yellow
  var yellowNav = $(".header__nav.yellow");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      yellowNav.css({
        transform: "translateY(0)",
      });
    } else {
      yellowNav.css({
        transform: "translateY(-93px)",
      });
    }
  });

  // hamburger menu button
  var hamburgerBtn = $(".header__btn--menu");
  var spNav = $(".sp-nav");
  var closeBtn = $(".sp-nav__btn--close");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      hamburgerBtn.addClass("scrolled");
    } else {
      hamburgerBtn.removeClass("scrolled");
    }
  });
  // make sp nav active when click hamburger menu button
  hamburgerBtn.click(function () {
    spNav.css({
      transform: "translateX(0)",
    });
  });
  // when cleck close button
  closeBtn.click(function () {
    spNav.css({
      transform: "translateX(200px)",
    });
  });
});
