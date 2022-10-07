	$(document).ready(function(){ // function that runs while page is loaded
		var from_top = 100; //variable that sets the distance from the reference 
	$(window).scroll(function(){
		if($(this).scrollTop() > from_top){ //scrollTop is a jQuery function that checks distance scrolled/vertical position of the scroll bar
			$('.to_top').fadeIn(100).removeClass('hidden_top'); //fadeIn & fadeOut are jQuery functions that animates opacity at a specified duration
			//jQuery function removeClass is being implemented due to the scroll button being initially displayed on the page 
		}else{
			$('.to_top').fadeOut(100);
		}
	});
	//function that scrolls to the top of the page using html,body as reference at fast speed on click
	$('.to_top').click(function(){
		$('html,body').animate({scrollTop: 0}, 'fast'); 
	});
});