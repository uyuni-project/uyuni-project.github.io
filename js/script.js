'use strict';

/* Home carousel init */
$(function () {
  $('.js-home-carousel').slick({
    prevArrow: '.carousel-previous',
    nextArrow: '.carousel-next',
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  })
})
