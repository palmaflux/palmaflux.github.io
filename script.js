


var ScrollY1 = window.pageYOffset;
window.onscroll = function() {
  var ScrollY2 = window.pageYOffset;
  if (ScrollY1 > ScrollY2) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-150px";
  }
  ScrollY1 = ScrollY2;
}


function menu() {
  $('header nav').slideToggle();
}

function navi() {
  $('.menuIconToggle').click(menu)
}


function topnav() { 	  
  $('header nav').slideToggle();
//  $('#main-nav').slideToggle();
}

function menua() {
  $('')
}

function toggleAllServices() {
  $('#services-list').slideToggle();
}

$('#services-list').hide();
$('#services-list-button').click(toggleAllServices);



$(document).ready(function(){
  $('.carousel').slick({
    speed: 885,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4380,
    dots: true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true
      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true
      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 200,
      }
    }]
  });
});


document.getElementById("year").innerHTML = new Date().getFullYear();







$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




