/*
(function($){

	"use strict";

	var $doc = $('html,body');
	$('.scroll-page').click(function(){
		$doc.animate({
			scrollTop: $($.attr(this,'href')).offset().top
		},5);
		return false;
	});
})(jQuery);



Efeito Deslizante em Nav. em OnePage.

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top,
	menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 5000);
});

<div class="carousel-item active">
				<div class="row">	
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/003.jpg" class="img-fluid" alt="Preimeiro Slide">		
							<div class="carousel-caption d-none d-md-block">
								<h4  style="color: red;">Primeiro Slide</h4>
								<h2  style="color: red;">Casamentos</h2>
							</div>			
						</a>
					</div>			
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/002.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
				</div>
			</div>
			<div class="carousel-item">
				<div class="row">	
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/004.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
					<div class="col-lg-6 col-sm-1 p-0">	
						<a href="#">
							<img src="img/005.jpg" class="img-fluid" alt="Preimeiro Slide">
							
						</a>
					</div>			
				</div>
			</div>


*/