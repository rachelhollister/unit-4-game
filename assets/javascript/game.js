//my global variables 
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var wrongGuesses = [];
var computerChoice = "";
var userChoice = "";

//computer will pick a random letter
function computerMakesChoice() {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var randomIndex = Math.floor(Math.random () * alphabet.length);
//the var is the random letter picked by computer
    computerChoice = alphabet[randomIndex];
    console.log('computerChoice', computerChoice);
}

// setting a function to reset game	
function gameReset(){
    guessesLeft = 5;
    wrongGuesses = [];
    computerMakesChoice();
}

//player selects a letter of the alphabet 
    document.onkeyup = function(event) {
        //translates to userChoice
        userChoice = event.key;
        // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userChoice);
        //if user guesses right letter, WIN
        //reset guesses left, wrong guesses, and randomize computer choice
        if(userChoice === computerChoice){
            wins++;
            alert("You got lucky this time!");
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            console.log('wins', wins);
            console.log(computerChoice);
            gameReset();
        }	
        else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You will never be a true psychic as I am!");
            console.log('losses', losses);
            console.log('guessesLeft', guessesLeft);
            console.log(computerChoice);
            gameReset();
        }
        // if not, guesses left decreases
        // push current user choice to array of wrongguesses
        else {
            guessesLeft--;
            wrongGuesses.push(userChoice);
            document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
            document.querySelector('#wrongGuesses').innerHTML = "Letters used: " + wrongGuesses;
            console.log('wrongGuesses', wrongGuesses);
            console.log('userChoice', userChoice);
            console.log('guessesLeft', guessesLeft);
            console.log(computerChoice);
        }}

        gameReset();
    
