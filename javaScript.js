const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function(){
    
    
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
      });
    });
    
    
    
    $("img").toggle(100);
    $("img").toggle(3000);
    $("p").slideUp(100);
    $("p,h1").slideDown(1500);
    $("body").fadeIn(3000);