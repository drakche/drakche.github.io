
//fade in mission
$('.waypoint-1').waypoint(function(direction) {
  $('.waypoint-1').addClass('animated fadeInLeft');
}, {
  offset: '75%'
}
);

$('.waypoint-2').waypoint(function(direction) {
  $('.waypoint-2').addClass('animated fadeInRight');
}, {
  offset: '75%'
}
);
$('.waypoint-3').waypoint(function(direction) {
  $('.waypoint-3').addClass('animated fadeIn');
}, {
  offset: '75%'
}
);
// nav transparent changer

$('#mission').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('nav-solid');
        } else {
            $('nav').removeClass('nav-solid');
        }
    }, {
        offset: '80px'
    });
    //process pulse

    $('.waypoint-pulse-1').waypoint(function(direction) {
      $('.waypoint-pulse-1').addClass('animated pulse');
    }, {
      offset: '75%'
    }
    );

    $('.waypoint-pulse-2').waypoint(function(direction) {
      $('.waypoint-pulse-2').addClass('animated pulse');
    }, {
      offset: '75%'
    }
    );
    $('.waypoint-pulse-3').waypoint(function(direction) {
      $('.waypoint-pulse-3').addClass('animated pulse');
    }, {
      offset: '75%'
    }
    );


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
