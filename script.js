// Generate a random number between 1 and 100
var secretNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guessInput");
var guessButton = document.getElementById("guessButton");
var message = document.getElementById("message");

guessButton.addEventListener("click", function() {
    // Parse the user's guess as an integer
    var userGuess = parseInt(guessInput.value);

    // Check if the guess is correct, too high, or too low
    if (userGuess === secretNumber) {
        message.textContent = "Congratulations! You guessed the correct number.";
        message.style.color = "green";
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess > secretNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
    }
});
