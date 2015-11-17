var navOn = false;

$(document).ready( function() {
	//console.log("yes");
	
	// Hide the contents
	// $('.Content-Me').hide();
	// $('.Content-Resume').hide();
	// $('.Content-Work').hide();
	// $('.Content-Contact').hide();
	
	$('.Nav.Top').on('click', function(){
		navOn  = true;
		console.log('clicking');
		
		$('.Nav.Top').animate({
			'margin-top':'1%',
			'margin-bottom':'29%',
			'top': 0
		}, 1000);
		
		$('.Nav.Left').animate({
			'margin-left':0,
			'left':0
		}, 1000);
		
		$('.Nav.Right').animate({
			'margin-right':0,
			'right':0
		}, 1000);
		
		$('.Nav.Bottom').animate({
			'bottom':0,
			'margin-bottom':0,
			'margin-top': '60%'		
		},1000).attr('position', 'fixed');
		
		// $('.Content-Me').show().animate({
		// 	'padding-top': '30%',
		// 	'padding-bottom': '10%' 
		// },1000);
		
	});
	
	$('.Nav.Left').on('click', function(){
		
		// $('.Content-Me').show().animate({
		// 	'padding-top': 0,
		// 	'margin-left': '60%' 
		// },1000).attr('position', 'absolute');
		
		// $('.Content-Resume').show().animate({
		// 	'padding-top': '30%',
		// 	'padding-bottom': '10%' 
		// },1000);
	});
	
});