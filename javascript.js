function openNav() {
  document.getElementById("myNav").style.height = "25%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.slick-slider').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
