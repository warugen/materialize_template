(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger-main").dropdown();
    $(".dropdown-trigger-mobile").dropdown();
    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.tooltipped').tooltip({margin:20, outDuration:3760, inDuration:3700, transitionMovement:55});//sets margin from button. Must be in object to work
    $('.carousel').carousel();
    $('.collapsible').collapsible();

    $(document).ready(function(){
      $('.datepicker').datepicker();
     
    });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true

    });
   
  }); // end of document ready
})(jQuery); // end of jQuery name space
