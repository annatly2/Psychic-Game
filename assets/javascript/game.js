//Define variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // list alphabet

var userGuess;
var compGuess;
var wins = 0;
var losses = 0;
var guessesCount = 0;
var guessesLeft = 5;
var lettersGuessed =[];

var spanCompGuess = document.getElementById("spanCompGuess");
var spanUserGuess = document.getElementById("spanUserGuess");
var spanLettersGuessed = document.getElementById("spanLettersGuessed");
var spanGuessesLeft = document.getElementById("spanGuessesLeft");
var spanWins = document.getElementById("spanWins");
var spanLosses = document.getElementById("spanLosses");


var updateLetterToGuess = function(){
	var index = Math.floor(Math.random()*letters.length);
	compGuess = letters[index];
	spanCompGuess.textContent = compGuess;
}
var updateGuessesLeft = function(){
	spanGuessesLeft.textContent = guessesLeft;
}

var updateGuessesSoFar = function(){
		lettersGuessed.push(userGuess);
		spanLettersGuessed.textContent = lettersGuessed.join(", ");
}

var reset= function(){
	guessesCount = 0;
	guessesLeft = 4;
	lettersGuessed=[];

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
}

document.onkeyup = function(event){
	guessesCount++;
	guessesLeft--;

	var keyHit = event.key;
	userGuess = keyHit;

	spanUserGuess.textContent = userGuess;
	spanGuessesLeft.textContent = guessesLeft;

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();

	if (guessesLeft >=0){
		if (userGuess == compGuess){
			spanWins.textContent = wins++;
			reset();
		}else if(userGuess!==compGuess){
			updateGuessesLeft();
		}
		console.log("Losses " + losses);
	}else if(guessesLeft<=0){
		spanLosses.textContent = losses++;
		console.log("Losses2: " +losses);
		reset();
	}
}