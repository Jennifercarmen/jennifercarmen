

(function($) {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();

 // Collapse Navbar
 var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

var options = [
  {selector: '.masthead', offset: 400, callback: function() {
  }}
];
Materialize.scrollFire(options);


var options = [ {selector: '#staggered-test', 
offset: 50, 
callback: function(el) {
   Materialize.toast("This is our ScrollFire Demo!", 1500 ); } }, 
   {selector: '#staggered-test', offset: 205, callback: function(el) { 
     Materialize.toast("Please continue scrolling!", 1500 ); } },
      {selector: '#staggered-test', offset: 400, 
      callback: function(el) { Materialize.showStaggeredList($(el)); } }, 
      {selector: '#image-test', offset: 500, callback: function(el) 
      { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options); 

})(jQuery); // End of use strict
