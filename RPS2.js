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
function getChoice() {
  const userChoice = hoveredItem.forEach((item) => {
    item.addEventListener("click", getUserChoice);
  });

  function getUserChoice(event) {
    const userInput = event.currentTarget.id;
    const choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex];
    console.log(`computer's choice is ${computerChoice}`);
    console.log(`user's choice is ${userInput}`);
    const winFactor = playRound(userInput, computerChoice);
    console.log(winFactor);
  }

  function playRound(uI, cC) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "resultdisplay");
    newDiv.classList.add("result_display");
    const displayResult = document.getElementById("main_div");
    document.body.insertBefore(newDiv, displayResult);

    if (cC == uI || uI == cC) {
      // console.log("Its a DRAW!!!");

      const result = document.createTextNode(`ITS A DRAW !!!`);
      newDiv.appendChild(result);

      return 0;
    } else if (
      (cC == "rock" && uI == "scissors") ||
      (cC == "paper" && uI == "rock") ||
      (cC == "scissors" && uI == "paper")
    ) {
      //console.log(`I WIN!!! ${cC} beats ${uI}`);
      const result = document.createTextNode(`I WIN!!! ${cC} beats ${uI}`);
      newDiv.appendChild(result);

      return 1;
    } else if (
      (cC == "rock" && uI == "paper") ||
      (cC == "paper" && uI == "scissors") ||
      (cC == "scissors" && uI == "rock")
    ) {
      // console.log(`YOU WIN!! ${uI} beats ${cC}`);
      const result = document.createTextNode(`YOU WIN!! ${uI} beats ${cC}`);
      newDiv.appendChild(result);

      return -1;
    }
  }
}

getChoice();
