$(function(){
      
	function linkFocus(el){
		let element = $(el.data('link'));
		// console.log(element);
		if(pageYOffset > element.offset().top && pageYOffset < element.next().offset().top){
			
			$(el.data('link')+'-link').css({'color': '#fed136'});
			
		}else{
			$(el.data('link')+'-link').css({'color': '#fefefe'});
		}
      }

      $(document).on('scroll', function(){
            // console.log(pageYOffset);
            
		if(pageYOffset < 625){
			$('.nav').css({ 'background-color': 'rgba(0,0,0,0)'});
		}else{
			$('.nav').css({ 'background-color': 'rgba(0,0,0,.9)'});
            }
            
            $('.section').each(function(){
			return linkFocus($(this));
		});
		
      });
      
      $("a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
        console.log(hash);
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 600, 'linear', function(){
           
                window.location.hash = hash;
              });
            } else{
                  event.preventDefault();
        
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $('body').offset().top
              }, 600, 'linear', function(){
           
                window.location.hash = hash;
              });
            }
          });

});