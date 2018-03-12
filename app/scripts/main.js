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
            
		if(pageYOffset < 10){
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


        $('#card-btn-1').on('click', function(){
            $.ajax({
                url: `json/data.json`
            }).done(addArticles).fail(function(err){
                console.log(err);
            });

            function addArticles(data){
              const article = data.services.firstCard;

              $('#exampleModalLongTitle').html(`${article.modalTitle}`);
              $('#modalBody').html(`${article.modalText}`);
            }
      });

      $('#card-btn-2').on('click', function(){
            $.ajax({
                url: `json/data.json`
            }).done(addArticles).fail(function(err){
                console.log(err);
            });

            function addArticles(data){
              const article = data.services.secondCard;

              $('#exampleModalLongTitle-1').html(`${article.modalTitle}`);
              $('#modalBody-1').html(`${article.modalText}`);
            }
      });

      $('#card-btn-3').on('click', function(){
            $.ajax({
                url: `json/data.json`
            }).done(addArticles).fail(function(err){
                console.log(err);
            });

            function addArticles(data){
              const article = data.services.thirdCard;

              $('#exampleModalLongTitle-2').html(`${article.modalTitle}`);
              $('#modalBody-2').html(`${article.modalText}`);
            }
      });


      $('#cars-btn').on('click', function(){
            $(this).css({"display": "none"});
            $('#cars-btn-hide').css({"display": "block"});
          $.ajax({
                url: `json/data.json`
            }).done(addImages).fail(function(err){
                console.log(err);
            });

            function addImages(data){
              const article = data.cars;
              let content = `<div id="cardDeck-1" class="card-deck pt-5">
              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car1.available}</small></span>
                          <img class="card-img-top" src="${article.car1.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car1.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car1.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car2.available}</small></span>
                          <img class="card-img-top" src="${article.car2.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car2.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car2.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car3.available}</small></span>
                          <img class="card-img-top" src="${article.car3.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car3.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car3.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car4.available}</small></span>
                          <img class="card-img-top" src="${article.car4.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car4.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car4.price}</p>
                    </div>
              </div>
              
        </div>`;
                
              $(content).insertAfter("#cardDeck");

              let content1 = `<div id="cardDeck-2" class="card-deck pt-5">
              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car5.available}</small></span>
                          <img class="card-img-top" src="${article.car5.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car5.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car5.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car6.available}</small></span>
                          <img class="card-img-top" src="${article.car6.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car6.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car6.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car7.available}</small></span>
                          <img class="card-img-top" src="${article.car7.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car7.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car7.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car8.available}</small></span>
                          <img class="card-img-top" src="${article.car8.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car8.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car8.price}</p>
                    </div>
              </div>
              
        </div>`;

        $(content1).insertAfter("#cardDeck-1");


        let content2 = `<div id="cardDeck-3" class="card-deck pt-5">
              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car9.available}</small></span>
                          <img class="card-img-top" src="${article.car9.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car9.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car9.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car10.available}</small></span>
                          <img class="card-img-top" src="${article.car10.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car10.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car10.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car11.available}</small></span>
                          <img class="card-img-top" src="${article.car11.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car11.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car11.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car12.available}</small></span>
                          <img class="card-img-top" src="${article.car12.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car12.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car12.price}</p>
                    </div>
              </div>
              
        </div>`;

        $(content2).insertAfter("#cardDeck-2");

              let content3 = `<div id="cardDeck-4" class="card-deck pt-5">
              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car13.available}</small></span>
                          <img class="card-img-top" src="${article.car13.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car13.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car13.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car14.available}</small></span>
                          <img class="card-img-top" src="${article.car14.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car14.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car14.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car15.available}</small></span>
                          <img class="card-img-top" src="${article.car15.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car15.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car15.price}</p>
                    </div>
              </div>

              <div class="card" style="height: 300px">
                    <div class="card-img-top-parent">
                          <span class="car-available-style-1"></span>
                          <span class="car-available"><small class="car-available-text">${article.car16.available}</small></span>
                          <img class="card-img-top" src="${article.car16.img}" alt="Card image cap">
                    </div>
                    <div class="card-body text-uppercase">
                          <p class="card-title text-center">${article.car16.brand}</p>
                    </div>
                    <div class="card-footer text-center">
                          <p class="">${article.car16.price}</p>
                    </div>
              </div>
              
        </div>`;

        $(content3).insertAfter("#cardDeck-3");

        $('#cars-btn-hide').on('click', function(){
              $('#cardDeck-1, #cardDeck-2, #cardDeck-3, #cardDeck-4').css({'display': 'none'});
              $('#cars-btn').css({'display': 'block'});
              $(this).css({'display': 'none'});
        });
            }
      });
});