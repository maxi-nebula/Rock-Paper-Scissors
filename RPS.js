const choiceArray=['rock','paper','scissors'];


function beginGame (){
function getComputerChoice(ccA)
{

const randomIndex= Math.floor(Math.random()* choiceArray.length);


const randomItem=ccA[randomIndex];
//console.log(randomItem);
return randomItem;

}

function getUserChoice()
{

    const userChoice= prompt("Please enter your choice") ;

    const convertedUserChoice=userChoice.toLowerCase();
   
     
    if(choiceArray.includes(convertedUserChoice))
    {   //console.log(userChoice);
        return convertedUserChoice;
        
    }
    else if(convertedUserChoice==''){

    console.log("please enter a value");
    }
    else{

        console.log('invalid input');
    }
    
}

const computerChoice=getComputerChoice(choiceArray);
//console.log(computerChoice);
const userInput=getUserChoice();
console.log(userInput);

playRound(computerChoice,userInput);

function playRound(cC,uI)
{

    if(cC==uI || uI==cC)
    {

        console.log("Its a DRAW!!!");
    }
    else if((cC=='rock'&& uI=='scissors')||(cC=='paper' && uI=='rock')||(cC== 'scissors'&& uI=='paper'))
    {

        console.log(`I WIN!!! ${cC} beats ${uI}`);
    }
    else if((cC=='rock'&&uI=='paper')||(cC=='paper'&&uI=='scissors')||(cC=='scissors'&&uI=='rock'))
    {

        console.log(`YOU WIN!! ${uI} beats ${cC}`);
    }

}


}

beginGame();