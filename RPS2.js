/** @format */

const hoveredItem = document.querySelectorAll(".rps_element");

hoveredItem.forEach((hItem) => {
  hItem.addEventListener("mouseenter", () =>
    hItem.classList.add("higlighted_element")
  );
  hItem.addEventListener("mouseleave", () =>
    hItem.classList.remove("higlighted_element")
  );
});
//getchoice() function to get user's and computer's choice

let dW = 0,
  cW = 0,
  uW = 0;

function getChoice() {
  const userChoice = hoveredItem.forEach((item) => {
    item.addEventListener("click", getUserChoice);
  });
}
let clickCount = 0;
function getUserChoice(event) {
  clickCount = clickCount + 1;
  console.log(clickCount);

  const userInput = event.currentTarget.id;
  const choiceArray = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choiceArray.length);
  const computerChoice = choiceArray[randomIndex];
  console.log(`computer's choice is ${computerChoice}`);
  console.log(`user's choice is ${userInput}`);

  function playRound(uI, cC) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "resultdisplay");
    newDiv.classList.add("result_display");
    const displayResult = document.getElementById("main_div");
    document.body.insertBefore(newDiv, displayResult);

    if (cC == uI || uI == cC) {
      newDiv.textContent = `ITs a DRAW!!!`;

      return 0;
    } else if (
      (cC == "rock" && uI == "scissors") ||
      (cC == "paper" && uI == "rock") ||
      (cC == "scissors" && uI == "paper")
    ) {
      newDiv.textContent = `I WIN!!! ${cC} beats ${uI}`;

      return 1;
    } else if (
      (cC == "rock" && uI == "paper") ||
      (cC == "paper" && uI == "scissors") ||
      (cC == "scissors" && uI == "rock")
    ) {
      newDiv.textContent = `YOU WIN!! ${uI} beats ${cC}`;

      return -1;
    }
  }

  const winFactor = playRound(userInput, computerChoice);

  if (winFactor == 1) {
    cW = cW + 1;
  } else if (winFactor == -1) {
    uW = uW + 1;
  } else if (winFactor == 0) {
    dW = dW + 1;
  }
  if (clickCount == 5) {
    finalWinner(dW, uW, cW);
  }
}

function finalWinner(D, U, C) {
  const resultDiv = document.createElement("div");
  resultDiv.setAttribute("id", "finalresult");
  resultDiv.classList.add("final_display");
  const finalResult = document.getElementById("main_div");
  document.body.insertBefore(resultDiv, finalResult);
  if ((D == 1 && C == U) || (D == 3 && C == U)) {
    resultDiv.textContent = `ITS A DRAW !!LETS PLAY AGAIN!!`;
  } else if (C > U) {
    resultDiv.textContent = `YOU ARE DEAD SEE YOU IN HELL??`;
  } else if (U > C) {
    resultDiv.textContent = `YOU ARE SPARED.RUN AND NEVER COME BACK!!`;
  }
  return;
}

getChoice();
