
$(function() {

    var category = $('.category');
    var home = $('.header-home');
    var headerFlex = $('.header-flexbox-content');
    var info = $('.info');
    var designPhoto = $('.design-photo');
    var topTitle = $('.top-view-title');
    var turnNav = $('.turn-nav');
    var about = $('.about-info');
    var footer = $('.footer');
    var topButton = $('.turn-top');
    var value = 700;
    var main = $('.portfolio');
    var header = $('header');
    var footer = $('footer');
    var Animation = false;


    /*======================================================================

    Page load animation

    ======================================================================*/
    category.transition({
      translate: [0, 20],
      opacity: 1
    }, 800);

    headerFlex.transition({
      translate: [0, -40],
      opacity: 1
    }, 600);

    info.transition({
      translate: [0, -60],
      opacity: 1
    }, 800);

    designPhoto.transition({
      translate: [0, -80],
      opacity: 1
    }, 1000);

    about.transition({
      translate: [0, -80],
      opacity: 1
    }, 1000);

    /*======================================================================

    Page Top

    ======================================================================*/
    topButton.on('click', function(event) {
       event.preventDefault();
       $("body, html").animate({
           scrollTop: 0 },value - 100, "easeInOutExpo");
       return false;
    });

   /*======================================================================

   Loading

   ======================================================================*/

   $(window).load(function() {
    $(".loader-content").fadeOut('700');
    $('body').addClass('top-open');
   });

   /*======================================================================

   navigation effect

   ======================================================================*/

    $('.main-nav-trigger').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        if( !Animation ) {
            if($(this).parents('.csstransitions').length > 0 ) Animation = true;

            $('body').toggleClass('main-nav-open');
            $('.main-nav-wrap').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                Animation = false;
            });
        }
    });


    /*======================================================================

    Social Link Effect

    ======================================================================*/

    $('button.social-link').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        if( !Animation ) {
            $('body').toggleClass('social-link-open');

            $('.i.webicon_close, button.trigger').on('click', function(event) {
              event.preventDefault();
              /* Act on the event */
              $('body').removeClass('social-link-open');
            });

            $('.social-link-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                Animation = false;
            });
        }
    });

    /*======================================================================

    //Index page scrolling effect

    ======================================================================*/

    var container = document.getElementById( 'top-view-container' ),
        trigger = container.querySelector( 'button.trigger' );

    function toggleContent() {
        if( classie.has( container, 'container-open' ) ) {
            classie.remove( container, 'container-open' );
            classie.remove( trigger, 'trigger--active' );
            window.addEventListener( 'scroll', noscroll );
        }
        else {
            classie.add( container, 'container-open' );
            classie.add( trigger, 'trigger--active' );
            window.removeEventListener( 'scroll', noscroll );
        }
    }

    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener( 'scroll', noscroll );
    trigger.addEventListener( 'click', toggleContent );

});