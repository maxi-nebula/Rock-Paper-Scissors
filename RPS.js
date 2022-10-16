
function getComputerChoice(ccA)
{

const randomIndex= Math.floor(Math.random()* computerChoiceArray.length);


const randomItem=ccA[randomIndex];
return randomItem;


}

const computerChoiceArray=['rock','paper','scissor'];
const computerChoice=getComputerChoice(computerChoiceArray);
console.log(computerChoice);