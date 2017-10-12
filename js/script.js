$(document).ready(function(){
       
///scroll
    
    $('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
    
///button-menu
    
    $(".fa-arrow-up").hide();
    
    $(".fa-arrow-up").click(function(){
		$("html,body").animate({scrollTop: 0},500);
	});
	
	$(document).scroll(function(){
		var position=$(this).scrollTop();
		
		if((position<250) || (position>3000)){
			$(".fa-arrow-up").fadeOut();
		} else {
			$(".fa-arrow-up").fadeIn();
		}
	});
    
///slick

    $('.center').slick({
        slidesToShow: 2,
        prevArrow: $('.prev-community'),
        nextArrow: $('.next-community'),
        responsive: [
            {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    
///technology
    
    
    var $grid = $( '#tp-grid' ),
        $name = $( '#name' ),
        $close = $( '#close' ),
        $loader = $( '<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>' ).insertBefore( $grid ),
        stapel = $grid.stapel( {
				onLoad : function() {
				$loader.remove();
				},
				onBeforeOpen : function( pileName ) {
				    $name.html( pileName );
				},
				onAfterOpen : function( pileName ) {
				    $close.show();
						}
					} );

				$close.on( 'click', function() {
					$close.hide();
					$name.empty();
					stapel.closePile();  
            });
});