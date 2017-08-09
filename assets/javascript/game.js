// <!-- User guesses a letter
// Letter is either correct or incorrect
// If correct guess, wins go up 1, choose next letter
// 	if incorrect guess:
// 		guesses left decreases by 1
// 		gueses so far - add guess to list
// 	if guesses left gets to 0 == game over, start again -->

		
	//Declaring variables
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		//empty array to collect guesses
		var guessesSoFar = [];
		var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


	//FUNCTIONS
	document.onkeyup = function() {
      // Determines which key was pressed.
      	var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //works


		//Helps the computer choose a random value from the Options Array above
		var computerLetter = options[Math.floor(Math.random()*options.length)];
		console.log(computerLetter)

		//MAIN PROCESSES
		//Alert if the user guesses correctlly!
			if (userGuess == computerLetter) {
				alert("Good guess, you win!");
				wins++;
				guessesLeft = 10;
				guessesSoFar = [];
				userGuess = " ";
		//Reduces remaining guesses
			} else if (guessesLeft > 0) {
				guessesLeft--;
				console.log(guessesLeft);
		//Out of guesses, resets the stats except losses/wins
			} else {
				alert("Game over.");
				console.log(guessesLeft = 10);
				console.log(guessesSoFar = []);
				losses++;
				userGuess = " ";
			}

		//Keep track of guesses - adds to list.
		guessesSoFar.push(" " + userGuess);

		var html = 
			"<p>Your Guess: " + userGuess + "</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses So Far: " + guessesSoFar;
		        // Set the inner HTML contents of the #game div to our html string
		        document.getElementById("#main").innerHTML = html;
	}

