$(document).ready( function() {
	//console.log("yes");
	
	$('.Nav.Top').on('click', function(){
		console.log('clicking');
		
		$('.Nav.Top').animate({
			'margin-top':0,
			'top': 0
		}, 1000);
		
		$('.Nav.Left').animate({
			'margin-left':0,
			'margin-top':'35%',
			'left':0
		}, 1000);
		
		$('.Nav.Right').animate({
			'margin-right':0,
			'margin-top':'35%',
			'right':0
		}, 1000);
		
		$('.Nav.Bottom').animate({
			'bottom':0,

			
		},1000);
		
		
		
	})
	
});