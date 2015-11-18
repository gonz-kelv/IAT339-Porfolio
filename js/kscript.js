

$(document).ready( function() {
	//console.log("yes");
	
	// Hide the contents
	// $('.Content-Me').hide();
	// $('.Content-Resume').hide();
	// $('.Content-Work').hide();
	// $('.Content-Contact').hide();
	
	$('.Color-Bleed').fadeOut('slow');
	
	$('.Nav.Top').on('click', function(){
		
		// Animate the navigation to the side 		
		$('.Nav.Top').animate({
			'margin-top':'1%'
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
			'margin-top': '48%'
		},1000);
		
		// Show the right content depending on what Navigation button was clicked
		$('.Content-Me').show().animate({
			'padding-top':'15%'
		},1000);
		
		// Hide the content not needed
		$('.Content-Resume').hide().attr('style','');
		$('.Content-Work').hide().attr('style','');
		$('.Content-Contact').hide().attr('style','');
		
	});
	
	$('.Nav.Left').on('click', function(){
		
		$('.Nav.Top').animate({
			'margin-top':'1%',
			'margin-bottom':'20%',
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
			'margin-top': '48%'
		},1000);
		
		$('.Content-Resume').show().animate({
			'padding-left':0
		},1000);
		
		$('.Content-Me').hide().attr('style','');
		$('.Content-Work').hide().attr('style','');
		$('.Content-Contact').hide().attr('style','');
	
	});
	
	$('.Nav.Right').on('click', function(){
		
		$('.Nav.Top').animate({
			'margin-top':'1%',
			'margin-bottom':'20%',
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
			'margin-top': '48%'
		},1000);
		
		$('#NavButton4').attr('position', 'fixed');
		
		$('.Content-Work').show().animate({
			'width':'100%'
		},1000);
		
		$('.Content-Me').hide().attr('style','');
		$('.Content-Resume').hide().attr('style','');
		$('.Content-Contact').hide().attr('style','');
	
	});
	
	$('.Nav.Bottom').on('click', function(){
		
		$('.Nav.Top').animate({
			'margin-top':'1%',
			'margin-bottom':'20%',
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
			'margin-top': '48%'
		},1000);
		
		$('.Content-Contact').show().animate({
			'margin-top':'20%'
		},1000);
		
		$('.Content-Me').hide().attr('style','');
		$('.Content-Work').hide().attr('style','');
		$('.Content-Resume').hide().attr('style','');
		
	});
	
});