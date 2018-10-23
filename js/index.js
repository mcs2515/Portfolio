(function(){
    
    "use strict";
    
    function init(){
		checkWidth();
		
        $(".aboutme").flip({
          trigger: 'hover',
          reverse: true,
        });
        
        $("a[href='#projectSection']").click(function() {
            $("html, body").animate({ scrollTop: 950 }, 1000);
          return false;
        });
        
        $("a[href='#copyright']").click(function() {
            $("html, body").animate({ scrollTop: $(document).height()}, 2000);
            return false;
        });
        
        $(".about, [data-paroller-factor]").paroller({
            factor: .2,
            type: 'foreground',
        });
        
        $('.js-tilt').tilt({
            perspective: 1500,
        })
        
        $('.slick').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite:true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: true,
        });
    }
	
	function checkWidth(){
		let w = $( window ).innerWidth();

        if(w< 960){
            $(".imageThumb, [data-paroller-factor]").paroller({
                factor: .05,
                type: 'foreground',
            });
        }
        else{
            $(".imageThumb, [data-paroller-factor]").paroller({
                factor: .1,
                type: 'foreground',
            });
        }   
    }

    window.onload = init;
})();