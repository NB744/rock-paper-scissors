window.onload = function(){
    console.log("Welcome to Rock Paper Scissors");

    //Let's create an array that stores the possible choices.
    const gameChoices = ["Rock", "Paper", "Scissors"];

    //Let's create an array that stores the elements for our choices.
    //const gameElementIds = ["rock-img", "paper-img", "scissors-img"];

    //Variables to store user's choice and computer's choice.
    let userChoice;
    let computerChoice;

    //Variables, to set user's score and computer's score.
    let userScore = 0;
    let computerScore = 0;

    //Start Game.
    //The game starts when the user clicks on one of the images.
    document.addEventListener("click", (event) =>{
        //See which element was clicked.
        //We only run the game if either the Rock, Paper or Scissor is clicked.
        let clicked_elem_type = event.target.getAttribute("data-type");

        if(gameChoices.includes(clicked_elem_type)){
            //This means a either rock, paper, or scissors was clicked.
            userChoice = clicked_elem_type;
            //Run the game.
            game();

            //After each game check to see if someone has won. If so, we end the game and display the results.
            checkVictory();
        }
        
    });

    
    /**
     * Function that returns the choice for the computer.
     */
    function getcomputerSelection(){
        // To get a choice, we need to get a random value between Rock, Paper and scissors.
        // We invoke a function that gives a random value between 0, 1, and 2.
        // Then we use the random number as the index of gameChoices array defined above to get the actual choice.
        let randomCompNum = getRandomNumber();
        //Now, get the actual choice.
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
        
        //Now, get computer's choice.
        computerChoice = getcomputerSelection();

        //Now, play a round.
        playARound(computerChoice, userChoice);
        
    }

    function displayWinner(computerFinalScore, userFinalScore){
        let winnerResult = (computerFinalScore > userFinalScore)? "*** Computer Wins! ***" : "*** User Wins! ***";
        winnerResult += "<br >The scores have been reset now. Click to Play again.";
        displayResult(winnerResult);
        console.log(winnerResult);
    }

    function playARound(computerSelection, userSelection){

        computerSelection = computerSelection.toLowerCase();
        userSelection = userSelection.toLowerCase();
        let roundResult = "";

        if(userSelection === computerSelection){
            //Tie game.
            roundResult = `<img class = "game-img" src = "img/draw.png" alt = "Draw">Draw! You both chose ${userSelection}.`;
            //console.log(roundResult);
        }else if((userSelection === "rock" && computerSelection == "scissors") || 
                 (userSelection === "paper" && computerSelection === "rock") || 
                 (userSelection == "scissors" && computerSelection === "paper")){
            // User Wins!
            // Update user score.
            userScore++;
            roundResult = `<img class = "game-img" src = "img/win.png" alt = "Draw">You win this round! You chose ${userSelection}. The computer chose ${computerSelection}.`;
            //console.log(roundResult);
        }else if((userSelection === "rock" && computerSelection === "paper") || 
                 (userSelection === "paper" && computerSelection === "scissors") || 
                 (userSelection === "scissors" && computerSelection === "rock")){
            // Computer Wins!
            // Update computer score.
            computerScore++;
            roundResult = `<img class = "game-img" src = "img/lose.png" alt = "Draw">You lose this round! You chose ${userSelection}. The computer chose ${computerSelection}.`;
            //console.log(roundResult);
        }

        displayResult(roundResult);
        //Update Scoreboard.
        updateScoreBoard();
        //console.log(`Current Scoreboard: USER: ${userScore}      COMPUTER: ${computerScore}`);
    }

    /**
     * Function that checks to see if either the player or the computer has won the game.
     */
    function checkVictory(){
        if(userScore >=5 || computerScore >=5){
            //Victory condition met.
            //Now, display winning message and reset the scores.
            //console.log(`>>> FINAL SCORE BOARD: USER: ${userScore}   COMPUTER: ${computerScore} <<<`);
            //Display winner.
            displayWinner(computerScore, userScore);
            //Reset scores.
            userScore = 0;
            computerScore = 0;
        }
    }

    /**
     * Function that displays the result of the round or the game.
     */
    function displayResult(displayMarkup){
        document.getElementById("game-data-markup").innerHTML = displayMarkup;
    }

    /**
     * Function to update the scoreboard.
     */

    function updateScoreBoard(){
        document.getElementById("game-user-scoreboard").textContent = `User: ${userScore}`;
        document.getElementById("game-computer-scoreboard").textContent = `Computer: ${computerScore}`;
    }
};
