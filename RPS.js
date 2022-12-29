/** @format */

//window.addEventListener("mouseover", highlightElement);
const hoveredItem = document.querySelectorAll(".rps_element");

hoveredItem.forEach((hItem) => {
  hItem.addEventListener("mouseenter", () =>
    hItem.classList.add("higlighted_element")
  );
  hItem.addEventListener("mouseleave", () =>
    hItem.classList.remove("higlighted_element")
  );
});

//clickedRock.addEventListener("onclick", getUserChoice);

const choiceArray = ["rock", "paper", "scissors"];

// chooses a random value from the choice array
function getComputerChoice(ccA) {
  const randomIndex = Math.floor(Math.random() * choiceArray.length);

  const randomItem = ccA[randomIndex];
  //console.log(randomItem);
  return randomItem;
}

//asks the user the enter a choice using a prompt window
function getUserChoice() {
  //const userChoice = prompt("Please enter your choice");
  // const convertedUserChoice = userChoice.toLowerCase();
  /*if (choiceArray.includes(convertedUserChoice)) {
    //console.log(userChoice);
    return convertedUserChoice;
  } else if (convertedUserChoice == "") {
    console.log("please enter a value");
  } else {
    console.log("invalid input");
  }*/
}

//compares the computer's choice and user's choice and returns either 1,0 or -1

function beginGame() {
  function playRound(cC, uI) {
    if (cC == uI || uI == cC) {
      console.log("Its a DRAW!!!");

      return 0;
    } else if (
      (cC == "rock" && uI == "scissors") ||
      (cC == "paper" && uI == "rock") ||
      (cC == "scissors" && uI == "paper")
    ) {
      console.log(`I WIN!!! ${cC} beats ${uI}`);
      return 1;
    } else if (
      (cC == "rock" && uI == "paper") ||
      (cC == "paper" && uI == "scissors") ||
      (cC == "scissors" && uI == "rock")
    ) {
      console.log(`YOU WIN!! ${uI} beats ${cC}`);
      return -1;
    }
  }

  let cW = 0;
  uW = 0;
  dW = 0;

  //This is to decide the number of times the loop runs .in this case it is 5. the draw factor is written for game 5.
  for (i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice(choiceArray);
    const userInput = getUserChoice();
    console.log(userInput);
    const winFactor = playRound(computerChoice, userInput);
    if (winFactor == 1) {
      cW = cW + 1;
    } else if (winFactor == -1) {
      uW = uW + 1;
    } else if (winFactor == 0) {
      dW = dW + 1;
    }

    //here the winner is decided based on the value of numbers of wins by each side respectively, C for computer,U for user and D as a draw
    function decideWinner(C, U, D) {
      if ((D == 1 && C == U) || (D == 3 && C == U)) {
        console.log("------------ITS A DRAW!!LETS TRY AGAIN-----------------");
      } else if (C > U) {
        console.log("----------GAME OVER!! I WIN---------------");
      } else if (U > C) {
        console.log("**************CONGRATULATIONS!!YOU BEAT ME**********");
      }
    }
  }

  decideWinner(cW, uW, dW);
}

beginGame();
