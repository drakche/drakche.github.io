    $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 10 ) {
              $('.navbar').addClass('nav-solid');
              $('.notification-bar').css('display', 'none');
              $('.navbar-inverse').css('top', '0');
          } else {
              $('.navbar').removeClass('nav-solid');
          }
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
      // notification-bar
      $(".notification-bar").slideDown();
      $(".navbar-inverse").animate({
        'top': '77px'}, 400
      );

      $('#close').click(function(){
        $('.notification-bar').fadeOut();
        $('.navbar-inverse').animate({
          'top': '0'}, 400
        );
      });
