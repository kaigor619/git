$(document).ready(function() {
$(".menu-text, .contacts-a, .delivery-a, .two-button").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1300,
         easing: "swing"
      });
      return false;
   });});
