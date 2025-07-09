$(document).ready(function(){
  $('.test-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,            // Enable auto scroll
  autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
