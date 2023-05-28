window.onload = function(){
    console.log("Welcome to Rock Paper Scissors");

    //Let's create an array that stores the possible choices.
    const gameChoices = ["Rock", "Paper", "Scissors"];

    //Variables to store user's choice and computer's choice.
    let userChoice;
    let computerChoice;

    //Variables, to set user's score and computer's score.
    let userScore = 0;
    let computerScore = 0;

    //Start Game.
    game();

    
    /**
     * Function that returns the choice for the computer.
     */
    function getcomputerSelection(){
        // To get a choice, we need to get a random value between Rock, Paper and scissors.
        // We invoke a function that gives a random value between 0, 1, and 2.
        // Then we use the random number as the index of gameChoices array defined above to get the actual choice.
        let randomCompNum = getRandomNumber();
        //Now, get the actual choice.
        //console.log(`Computer returned ${gameChoices[randomCompNum]}`);
        return gameChoices[randomCompNum];
    }

    /**
     * Function that generates a random number between 0 - 2 and returns it.
     */
    function getRandomNumber(){
        return Math.floor(Math.random() * 3);
    }

    /**
     * Main Game function.
     */

    function game(){
        //This is a game of 5, that means we keep on playing a round until one of the score is 5.
        while((userScore <5 && computerScore < 5)){
            //First, get the user's choice.
            userChoice = getcomputerSelection();

            //Now, get computer's choice.
            computerChoice = getcomputerSelection();

            //Now, play a round.
            playARound(computerChoice, userChoice);
        }

        //Getting here means somebody has won. Display Final Scoreboard and the winner!
        console.log(`>>> FINAL SCORE BOARD: USER: ${userScore}   COMPUTER: ${computerScore} <<<`);
        //Display winner.
        displayWinner(computerScore, userScore);
        
    }

    function displayWinner(computerFinalScore, userFinalScore){
        let winnerResult = (computerFinalScore > userFinalScore)? "*** Computer Wins! ***" : "*** User Wins! ***";
        console.log(winnerResult);
    }

    function playARound(computerSelection, userSelection){

        computerSelection = computerSelection.toLowerCase();
        userSelection = userSelection.toLowerCase();

        if(userSelection === computerSelection){
            //Tie game.
            console.log(`TIE! You both chose ${userSelection}`);
        }else if((userSelection === "rock" && computerSelection == "scissors") || 
                 (userSelection === "paper" && computerSelection === "rock") || 
                 (userSelection == "scissors" && computerSelection === "paper")){
            // User Wins!
            // Update user score.
            userScore++;
            console.log(`You win! You chose ${userSelection}. The computer chose ${computerSelection}.`);
        }else if((userSelection === "rock" && computerSelection === "paper") || 
                 (userSelection === "paper" && computerSelection === "scissors") || 
                 (userSelection === "scissors" && computerSelection === "rock")){
            // Computer Wins!
            // Update computer score.
            computerScore++;
            console.log(`Computer wins! You chose ${userSelection}. The computer chose ${computerSelection}.`);
        }

        //Display Score.
        console.log(`Current Scoreboard: USER: ${userScore}      COMPUTER: ${computerScore}`);
    }
};
