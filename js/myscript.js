
// nav transparent changer
$('#mission').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('nav-solid animated fadeIn');
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
