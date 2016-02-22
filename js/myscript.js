
// nav transparent changer
$('#mission').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('nav-solid');
            $('.notification-bar').css('display', 'none');
            $('.navbar-inverse').css('top', '0');
        } else {
            $('nav').removeClass('nav-solid');
        }
    }, {
        offset: '95%'
    });


    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });

    //mobile js

      $('.nav a').on('click', function(){
          $('.navbar-toggle').click();
      });

      $('.navbar-toggle').on('click', function(){
        $('.navbar-inverse').addClass('nav-solid');


    });
// notification-bar
$(".notification-bar").delay(0).slideDown();
$(".navbar-inverse").delay(0).animate({
  'top': '77px'}, 400
);

$('#close').click(function(){
  $('.notification-bar').fadeOut();
  $('.navbar-inverse').animate({
    'top': '0'}, 400
  );
});
