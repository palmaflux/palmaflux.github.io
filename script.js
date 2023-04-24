


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





