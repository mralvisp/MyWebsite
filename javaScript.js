const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function () {


  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});



$(".jquery").toggle(100);
$(".jquery").toggle(2000);
$(".blockanimation").slideUp(100);
$(".blockanimation").slideDown(1500);
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



function handle(delta) {
  var time = 500;
  var distance = 300;

  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time);
}

if (window.addEventListener) { window.addEventListener('DOMMouseScroll', wheel, false); }
window.onmousewheel = document.onmousewheel = wheel;



