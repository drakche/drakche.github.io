
// nav transparent changer
  $(document).ready(function() {
      // Transition effect for navbar
      $(window).scroll(function() {
        if($(this).scrollTop() > 100 ) {
            $('.navbar').addClass('nav-solid');
        } else {
            $('.navbar').removeClass('nav-solid');
        }
      });
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
      if ($(window).width() < 767 ) {
          $('.navbar-toggle').click();
        }
        });

        $('.navbar-toggle').click(function(){
        if( $(this).hasClass('collapsed') ){
          $('.navbar-inverse').addClass('nav-solid');
        }else{
          $('.navbar-inverse').removeClass('nav-solid');
        }
      });

      jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});
