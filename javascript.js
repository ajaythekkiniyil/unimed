function openNav() {
  document.getElementById("myNav").style.height = "25%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// quick links open and close in mobile
document.getElementById('quick-link-mobile-dropdown-btn').onclick = handleOpenDropDown
function handleOpenDropDown() {
  var x = document.getElementById('quick-link-mobile-dropdown-items')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
