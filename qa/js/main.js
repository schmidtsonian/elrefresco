_initParallax = function(){

    if ( !Modernizr.touch ) {
        var controller = $.superscrollorama();

        controller.addTween( 0, TweenMax.fromTo( $('.slider-bg' ), 1, { top: 0 }, { top: -200 } ), 900 );
        return true;
    };

    return false;
};

_mainMenu = function(){

  $( "a#show-menu-mobile" )
  .on( "click", function( e ){

    e.preventDefault();

    var el = $( this );

    if( el.hasClass( "active" ) ){

      $( "#mobile-nav-main" )
      .stop( true )
      .animate({
        marginTop: -310
      } );
      el.removeClass( "active" );
    }else{

      $( "#mobile-nav-main" )
      .stop( true )
      .animate({
        marginTop: 0
      } );
      el.addClass( "active" );
    };
  } );

  return true;
};


$(document).ready(function() {

  _mainMenu();
  
  _initParallax();
});
