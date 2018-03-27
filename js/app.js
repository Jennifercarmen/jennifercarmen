

(function($) {
 // Collapse Navbar
 var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
    $('.brand-logo').show();

  } else {
    $("#mainNav").removeClass("navbar-shrink");
    $('.brand-logo').hide();

  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);


})(jQuery); // End of use strict
