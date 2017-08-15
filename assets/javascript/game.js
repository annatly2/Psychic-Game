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

// function reset()
// {
// 	wins
// }

document.onkeyup = function(){
	var keyHit = event.key;
	userGuess = keyHit;
	var index = Math.floor(Math.random()*letters.length);
	compGuess = letters[index];

	spanCompGuess.textContent = compGuess;
	spanUserGuess.textContent = userGuess;
	spanGuessesLeft.textContent = guessesLeft;

	if(userGuess == compGuess){
		spanWins.textContent = wins++;
		lettersGuessed.push(userGuess);
		spanLettersGuessed.textContent = lettersGuessed.join(", ");

	} else if(userGuess !== compGuess){

		lettersGuessed.push(userGuess);
		spanLettersGuessed.textContent = lettersGuessed.join(", ");
		guessesLeft--;
		spanGuessesLeft.textContent = guessesLeft;
		guessesCount++;

	}

	else{
		alert("This is an invalid selection. Please type a letter from a-z.");
	}
	// guessesLeft--;
	// spanGuessesLeft.textContent = guessesLeft;
	// guessesCount++;
	//make reset function
	//}

	// console.log("Guess Count: " + guessesCount);
	// console.log("Guesses Left: " + guessesLeft);

}


	// 	if (guessesLeft <= 0 && guessesCount >= 5){
	// 	spanLosses.textContent = losses++;
	// }
		//reset function





