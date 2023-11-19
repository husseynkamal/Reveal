// Go To Top Button
$(function () {
  var scrollButton = $("#goToTop");
  $(window).scroll(function () {
    $(this).scrollTop() >= 100 ? scrollButton.fadeIn() : scrollButton.fadeOut();
  });
  scrollButton.click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// Carousel 1
$(document).ready(function () {
  $("#clientsCarousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeOut: 1000,
    stagePadding: 0,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});

// Carousel 2
$(function () {
  $("#customersTestimonials").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeOut: 500,
    stagePadding: 30,
    responsive: {
      350: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
