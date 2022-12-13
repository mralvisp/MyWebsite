const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function () {


  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});



$("img").toggle(100);
$("img").toggle(3000);
$("p").slideUp(100);
$("p,h1").slideDown(1500);
$("body").fadeIn(3000);


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


$(document).ready(function () {
  $('.video2, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 300,
    preloader: false,

    fixedContentPos: false
  });
});



// Mause Wheel Scroll 


function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) { (delta = event.wheelDelta / 120); }
  else if (event.detail) { (delta = -event.detail / 3); }

  handle(delta);
  if (event.preventDefault) { (event.preventDefault()); }
  event.returnValue = false;
}

function handle(delta) {
  var time = 500;
  var distance = 300;

  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time);
}

if (window.addEventListener) { window.addEventListener('DOMMouseScroll', wheel, false); }
window.onmousewheel = document.onmousewheel = wheel;



