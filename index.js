$(document).ready(function () {
  $(".new-releases__carousel").slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
  });
  $(".hero__carousel").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    fade: true,
  });
});
