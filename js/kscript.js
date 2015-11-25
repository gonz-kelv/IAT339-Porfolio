
// Once the document is ready
$(document).ready( function() {

	// Full bleed of color in load
	$('.Color-Bleed').fadeOut('slow');
	
	$('.Nav.Top').on('click', function(){	
		// Call this function to move content upwards
		upContent();
	});
	
	$('.Nav.Left').on('click', function(){
		// Call this function to move content to the left
		leftContent();
	});
	
	$('.Nav.Right').on('click', function(){
		// Call this function to move content to the right
		rightContent();
	});
	
	$('.Nav.Bottom').on('click', function(){
		// Call this function to move content downwards
		downContent();
	});
	
	// When user click Game
	$('.Details-ButtonsA').on('click', function(){
		// Reset any styles
		$('.Details-ButtonsB').attr('style','');
		$('#Details-App').attr('style','');
		
		$('.Details-rightA').show().animate({
			'margin-left':'20%'
		}, 1250);
		
		$('.Details-ButtonsA').show().animate({
			'width':'10%',
			'margin-left':'90%',
			'height': 50
		},1000).css({
			'background-color': '#D3CEAA' 
		});
		
		$('#Details-Game').animate({
			'font-size': '2em'
		}).css({
			'color': '#8E001C' 
		})
		
		$('.Details-ButtonsB').show().animate({
			'width':'10%',
			'margin-right':'10%',
			'height': 50
		},1000);
		
		$('#Details-App').animate({
			'font-size': '2em'
		})
		
		// Revert any changes
		$('.Details-leftB').hide().attr('style','');
		
	});
	
	// when user clicks App
	$('.Details-ButtonsB').on('click', function(){
		// Reset any style
		$('.Details-ButtonsA').attr('style','');
		$('#Details-Game').attr('style','');
		
		$('.Details-leftB').show().animate({
			'margin-left':'30%'
		},1250);
		
		$('.Details-ButtonsA').show().animate({
			'width':'10%',
			'margin-left': '10%',
			'height': 50
		},1000);
		
		$('#Details-Game').animate({
			'font-size': '2em'
		});
		
		$('.Details-ButtonsB').show().animate({
			'width':'10%',
			'margin-right':'90%',
			'height': 50
		},1000).css({
			'background-color': '#D3CEAA' 
		});
		
		$('#Details-App').animate({
			'font-size': '2em'
		}).css({
			'color': '#8E001C' 
		});
		
		$('.Details-rightA').hide().attr('style', '');
		
	});
	
});

// Add event listener for arrow keys
$(document).keydown(function(e) {
	
	switch(e.which){
		case 37:
			// Call this function to move content to the left
			leftContent();
		break;
		case 38:
			// Call this function to move content upwards
			upContent();
		break;
		case 39:
			// Call this function to move content to the right
			rightContent();
		break;
		case 40:
			// Call this function to move content downwards
			downContent();
		break;
		default: return;
	}

});

function upContent(){
	
	// Move Navigation to their side
	navFixPos();

	// Show the right content depending on what Navigation button was clicked
	$('.Content-Me').show().animate({
		'padding-top':'15%'
	},1000);
	
	// Change color of navigation button
	$('#NavButton1').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	// Hide the content not needed
	$('.Content-Resume').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
	resetWork();
	
}

function leftContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton2').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Resume').show().animate({
		'padding-left':0
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
	resetWork();
	
}

function rightContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton3').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Work').show().animate({
		'margin-left':'10%'
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Resume').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
}

function downContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton4').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Contact').show().animate({
		'margin-top':'20%'
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Resume').hide().attr('style','');
	
	resetWork();
	
}

function navFixPos(){
	
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
	
	// Reset any style change
	$('#NavButton1').attr('style','');
	$('#NavButton2').attr('style','');
	$('#NavButton3').attr('style','');
	$('#NavButton4').attr('style','');
	
}

function resetWork(){
	$('.Details-Work, .Details-ButtonsB, .Details-leftB, .Details-ButtonsA, .Details-rightA, #Details-Game, #Details-App').attr('style','');
}
