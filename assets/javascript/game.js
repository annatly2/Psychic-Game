var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // list alphabet

var userGuess;
var compGuess;
var wins = 0;
var losses = 0;
var guesses = 5;
var guessesLeft = 5;
var lettersGuessed =[];
var letterToGuess = null;

var spanCompGuess = document.getElementById("spanCompGuess");
var spanUserGuess = document.getElementById("spanUserGuess");
var spanLettersGuessed = document.getElementById("spanLettersGuessed");
var spanGuessesLeft = document.getElementById("spanGuessesLeft");
var spanWins = document.getElementById("spanWins");
var spanLosses = document.getElementById("spanLosses");


document.onkeyup = function(){
	var keyHit = event.key;
	userGuess = keyHit;
	var index = Math.floor(Math.random()*letters.length);
	compGuess = letters[index];

	spanCompGuess.textContent = compGuess;
	spanUserGuess.textContent = userGuess;



	if(userGuess == compGuess){
		spanWins.textContent = wins++;
		spanGuessesLeft.textConent = guessesLeft-1;
	} else if(userGuess !== compGuess){
		spanLosses.textContent = losses++;
		lettersGuessed.push(userGuess);
		spanLettersGuessed.textContent = lettersGuessed.join(", ");
		spanGuessesLeft.textConent = guessesLeft-1;
	} else{
		alert("This is an invalid selection. Please type a letter from a-z.");
	}

	spanWins.textContent = wins;
	
}




// //Computer select random letter

// var compGuess = computerChoice[(Math.floor(Math.random()*computerChoice.length))];

// var updateGuessesLeft = function(){
// 	document.getElementById.innerHTML = "Guesses Left: " + guessesLeft;	
// }

// var updateLetterToGuess = function(){
// 	this.lettersToGuess = this.computerChoice[(Math.floor(Math.random()*this.computerChoice.length))];
// }


// var updateGuessesSoFar = function(){
// 	document.getElementById.innerHTML = "Your Guesses So Far: " + lettersGuessed.join(", ");
// }

// //function will be called when we reset everything

// var reset = function(){
// 	totalGuesses = 5;
// 	guessesLeft = 5;
// 	lettersGuessed = [];

// 	updateLetterToGuess();
// 	updateGuessesLeft();
// 	updateGuessesSoFar();
// }


// 	updateLetterToGuess();
// 	updateGuessesLeft();


// 	document.onkeyup = function(event){
// 		guessesLeft--;
// 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// 		console.log(userGuess);


// 		lettersGuessed.push(userGuess);
// 		updateGuessesLeft();
// 		updateGuessesSoFar();

// 		if (guessesLeft >0){
// 			if (userGuess == lettersToGuess){
// 				wins++;
// 				document.getElementById.innerHTML = "Wins: " + wins;
// 				alert("You're psychic!");
// 				reset();
// 			}
// 			}else if(guessesLeft==0){
// 				losses++;
// 				document.getElementById.innerHTML = "Losses: " + losses;
// 				alert("Sorry, you're not psychic. Feel free to try again!");
// 				reset();
// 			}


// 	};




