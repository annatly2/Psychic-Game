var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
}

var displayCompGuess = function(){
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

updateLetterToGuess();

document.onkeyup = function(event){
	guessesCount++;
	guessesLeft--;

	var keyHit = event.key;
	userGuess = keyHit;

	spanUserGuess.textContent = userGuess;
	spanGuessesLeft.textContent = guessesLeft;


	updateGuessesLeft();
	updateGuessesSoFar();
	console.log(compGuess);

	if (guessesLeft >=0){
		if (userGuess === compGuess){
			wins++;
			spanWins.textContent = wins;
			displayCompGuess();
			reset();
		}else if(userGuess!==compGuess){
			updateGuessesLeft();
		}
	}else if(guessesLeft<=0){
		losses++;
		spanLosses.textContent = losses;
		reset();
	}
}