// TODO: Simple layout on HTML that says "Thanks for playing"
// TODO: Create an array with the possible outcomes (R, P, S)
// TODO: Prompt R, P or S
// TODO: Check if the input was R/P/S, else throw an early return with error
// TODO: Save the input to an empty variable
// TODO: Select a random number to correspond to the R/P/S array
// TODO: Save the randomly selected option to another empty variable
// TODO: Create if/else formula based on the result
// TODO: Generate a popup with the result
// TODO: Create an empty variable for the user score, computer score and ties
// TODO: Needs to display results at the end of each round
// TODO: Prompt user after each round to play again
const rps = ["rock", "paper", "scissors"]
var userScore = 0
var compScore = 0
var tieScore = 0


function playRPS() {
    var userInput = window.prompt('Please select Rock, Paper, or Scissors', "Insert Here")
        console.log(userInput.toLowerCase())
        if (!(userInput.toLowerCase() == "rock" || userInput.toLowerCase() == "paper" || userInput.toLowerCase() == "scissors")) {
            alert ("That wasn't rock, paper, or scissors!")
            return playRPS()
        }
        
        var compNumber = Math.floor(Math.random()*3)
        var compInput = rps[compNumber]
        
            alert ("The computer has chosen " + compInput)
        if (userInput == compInput) {
            alert ("Its a tie!")
            tieScore++
        }

        else if ((userInput == "rock" && compInput == "scissors") || (userInput == "paper" && compInput == "rock") || (userInput == "scissors" && compInput == "paper")){
            alert("You win")
            userScore++
        }
        else{
            alert("You lose")
            compScore++
        }

        alert("Stats:\nWins: "+userScore+"\nLoss: "+compScore+"\nTies: "+tieScore)

        var result = confirm("Do you want to play again?")

        if (result){
            return playRPS()
        } 

        alert("Til' next time!")
        return


        

        

}
playRPS()