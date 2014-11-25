/**********************************************************************
***********************************************************************
******DECLARING/initializing MY VARIABLES*******************************************/

var prevguess='Nil';
var prevdiff;
var newdiff;
var userChoice;
var UsersChoice = document.getElementById('UserChoice');
var Feedback = document.getElementById('feedback');
var progressBar = document.getElementById('progressBar');
var Check = document.getElementById('check');


/***********************************************************************
************************************************************************
***GENERATING A RANDOM NUMBER*******************************************/

var cmpChoice= Math.floor(Math.random()*100);
console.log(cmpChoice);



/***********************************************************************
************************************************************************
****CHECKING THE VALIDITY OF THE USER'S CHOICE**************************/

var guess = {
	
	 validuserchoice : function(){
		if(userChoice === null ||
			userChoice === undefined ||
			isNaN(userChoice) ||
			userChoice > 100)
		{
			Feedback.innerHTML = ('You Must Enter A Valid Number');
		}

		else{
			guess.compareChoices();
			guess.progressBarHolder();
		}
	},


	/************************************************************************
	*************************************************************************
	***LETS START COMPARISON*************************************************/

	compareChoices : function(){
		console.log('compareChoices');
		
			prevdiff = Math.abs(prevguess - cmpChoice);
			newdiff = Math.abs(userChoice - cmpChoice);

			if(userChoice === cmpChoice)
			{
				Feedback.innerHTML =('Awesome,you guessed right!!!');
			}
			else if(prevdiff > newdiff)
			{
				Feedback.innerHTML =('You are getting hotter');
			}
			else if(prevdiff < newdiff)
			{
				Feedback.innerHTML =('You are getting colder');
			}

			prevguess = userChoice;
		

	},
	/**********************************************************************
	***********************************************************************
	***************************PROGRSS BAR*********************************/
	progressBarHolder : function(){
		var progress = ((100 - Math.abs(cmpChoice - userChoice))*1.5);
		$('#progressBar').animate({width:progress}, 1000);
	},



/***********************************************************************
************************************************************************
****ONCLICK ACTIONS*****************************************************/

	onReady : function  () {
		// body..

		$('#check').click(function(event){
			event.preventDefault();
			userChoice = parseInt($('#UserChoice').val());
			guess.validuserchoice();
			$('#UserChoice').val("");
			guess.progressBarHolder();

	    })
	}


};
$(document).ready (guess.onReady);