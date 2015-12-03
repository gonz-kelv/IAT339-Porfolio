$(document).ready(function(){
	
	// Change CSS
	
	
	// Hide the Content
	// $('.Content-Work, .Content-Contact, .Content-Resume').hide();
	
	// Me

	
	// Work		

	// $('.Work-Details').attr('style','width:100%;');

		

	$('.Content-Me, .Content-Work, .Content-Contact, .Content-Resume').hide();

	
	$('#Details-Game').on('click', function(){
		$('.Details-Buttons').animate({
			'width': '20%',
			'margin-left': '50%'
		});
		
		$('#Details-Game, #Details-App, #Details-Web').animate({
			'font-size': '1em'
		});
		
		$('.Details-rightA').show().animate({
			'margin-left':0
		}, 1250);
		
		// Hide but apply css changes
		$('.Details-leftB').attr('style', 'position:absolute;margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
		
		
	});
	
	$('#Details-App').on('click',function(){
		$('.Details-Buttons').animate({
			'width': '20%',
			'margin-left':'-10%'
		});
		$('#Details-Game, #Details-App, #Details-Web').animate({
			'font-size': '1em'
		});
		$('.Details-leftB').show().animate({
			'margin-left':'10%'
		}, 1250);
		
		// Hide but apply css changes
		$('.Details-rightA').attr('style', 'position:absolute;width:50%;margin-left:-20%;margin-top:0;').hide();
		
		
	});
	
	
	
	
	
	
	startMenu();
	
	$('.Corner1, .Corner2, .Corner3, .Corner4').on('click',function(){
		startMenu();
	})

	$('#NavButton1').on('click', function(){
		endMenu();
		
		// Clear styling of buttons
		$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
		
		$('#NavButton1').attr('style','background-color:#D3CEAA;color:#8E001C;');
		
		$('.Content-Me').show().animate({
			'padding-top':'10%'
		},1000);
		
		// Revert Work Page
		$('.Content-Work').attr('style', 'margin-left:-20%;position:absolute;padding-top:15%;').hide();
		$('#Work').hide();
		$('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
		$('#Details-Game, #Details-App, #Details-Web').attr('style', '');
		$('.Details-rightA').attr('style', 'position:absolute;width:50%;margin-left:-20%;margin-top:0;').hide();
		$('.Details-leftB').attr('style', 'position:absolute;margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
		// Revert Contact Page
		$('.Content-Contact').attr('style','padding-top:0;position:absolute;').hide();
		$('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
		$('#Contact').hide();
		// Revert Resume Page
		$('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
		$('.Resume-Details').attr('style', 'padding-top:0;');
			
			
	});
	$('#NavButton2').on('click', function(){
		endMenu();
		
		// Clear styling of buttons
		$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
		
		$('#NavButton2').attr('style','background-color:#D3CEAA;color:#8E001C;');
		
		$('.Resume-Details').show();
		$('.Content-Resume').show().animate({
			'padding-left': 0	
		});
		
		// Revert Me Page
		$('.Content-Me').attr('style',
				'padding-top:25%;position:absolute;padding-bottom:0;').hide();
		$('.Me-Details').attr('style',
				'width:50%;');
		// Revert Contact Page
		$('.Content-Contact').attr('style','padding-top:0;position:absolute;').hide();
		$('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
		$('#Contact').hide();
		// Revert Work Page
		$('.Content-Work').attr('style', 'margin-left:-20%;position:absolute;padding-top:15%;').hide();
		$('#Work').hide();
		$('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
		$('#Details-Game, #Details-App, #Details-Web').attr('style', '');
		$('.Details-rightA').attr('style', 'position:absolute;width:50%;margin-left:-20%;margin-top:0;').hide();
		$('.Details-leftB').attr('style', 'position:absolute;margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
				
	});
	$('#NavButton3').on('click', function(){
		endMenu();
		
		// Clear styling of buttons
		$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
		
		$('#NavButton3').attr('style','background-color:#D3CEAA;color:#8E001C;');
		
		$('.Details-Buttons').show();
		$('.Content-Work').show().animate({
			'margin-left':0
			},1000);
			
		// Revert Resume Page
		$('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
		$('.Resume-Details').attr('style', 'padding-top:0;');
		// Revert Me Page
		$('.Content-Me').attr('style',
				'padding-top:25%;position:absolute;padding-bottom:0;').hide();
		$('.Me-Details').attr('style',
				'width:50%;');
		// Revert Contact Page
		$('.Content-Contact').attr('style','padding-top:0;position:absolute;').hide();
		$('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
		$('#Contact').hide();
		
		
	});
	$('#NavButton4').on('click', function(){
		endMenu();
		
		// Clear styling of buttons
		$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
		
		$('#NavButton4').attr('style','background-color:#D3CEAA;color:#8E001C;');
		
		$('.Content-Contact').show().animate({'padding-top': '15%'});
		
		// Revert Work Page
		$('.Content-Work').attr('style', 'margin-left:-20%;position:absolute;padding-top:15%;').hide();
		$('#Work').hide();
		$('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
		$('#Details-Game, #Details-App, #Details-Web').attr('style', '');
		$('.Details-rightA').attr('style', 'position:absolute;width:50%;margin-left:-20%;margin-top:0;').hide();
		$('.Details-leftB').attr('style', 'position:absolute;margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
		// Revert Resume Page
		$('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
		$('.Resume-Details').attr('style', 'padding-top:0;');
		// Revert Me Page
		$('.Content-Me').attr('style',
				'padding-top:25%;position:absolute;padding-bottom:0;').hide();
		$('.Me-Details').attr('style',
				'width:50%;');
		
	});
	


});


function startMenu(){
	$('.Nav.Top').animate({
		'margin-top':'10%'
	});
	$('.Nav.Left').animate({
		'margin-left': '20%'
	});
	$('.Nav.Right').animate({
		'margin-right':'20%'
	});
	$('.Nav.Bottom').animate({
		'margin-bottom':'10%'
	});
	// Clear styling of buttons
	$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
	$('.Content-Me, .Content-Work, .Content-Contact, .Content-Resume').hide();
	// Revert Me Page
	$('.Content-Me').attr('style',
			'padding-top:25%;position:absolute;padding-bottom:0;').hide();
	$('.Me-Details').attr('style',
			'width:50%;');
	// Revert Work Page
	$('.Content-Work').attr('style', 'margin-left:-20%;position:absolute;padding-top:15%;').hide();
	$('#Work').hide();
	$('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
	$('#Details-Game, #Details-App, #Details-Web').attr('style', '');
	$('.Details-rightA').attr('style', 'position:absolute;width:50%;margin-left:-20%;margin-top:0;').hide();
	$('.Details-leftB').attr('style', 'position:absolute;margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
	// Revert Contact Page
	$('.Content-Contact').attr('style','padding-top:0;position:absolute;').hide();
	$('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
	$('#Contact').hide();
	// Revert Resume Page
	$('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
	$('.Resume-Details').attr('style', 'padding-top:0;');
	
}

function endMenu(){
	$('.Nav.Top').animate({
		'margin-top':0
	});
	$('.Nav.Left').animate({
		'margin-left': 0
	});
	$('.Nav.Right').animate({
		'margin-right':0
	});
	$('.Nav.Bottom').animate({
		'margin-bottom':0
	});
}
