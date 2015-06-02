
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
    var main = $('.portfolio');
    var header = $('header');
    var footer = $('footer');
    var value = 700;
    var Animation = false;


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
        $('.portfolio, .about').addClass('page-open');
   });


   /*======================================================================

   Scroll effect

   ======================================================================*/

   $(window).scroll(function () {
        var top = $(this).scrollTop();
        var scroll = 600;

        if (top > scroll) {
            $('.header-content, .info-wrap').addClass('block-opacity');
        } else if(top < scroll) {
            $('.header-content, .info-wrap').removeClass('block-opacity');
        };
   })

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