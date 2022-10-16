const choiceArray=['rock','paper','scissors'];
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

function playRound(cC,uI)
{
    
    if(cC==uI || uI==cC)
    { 

        console.log("Its a DRAW!!!");

      return 0; 
    }
    else if((cC=='rock'&& uI=='scissors')||(cC=='paper' && uI=='rock')||(cC== 'scissors'&& uI=='paper'))
    {
 

        
        console.log(`I WIN!!! ${cC} beats ${uI}`);
        return 1;
        
    }
    else if((cC=='rock'&&uI=='paper')||(cC=='paper'&&uI=='scissors')||(cC=='scissors'&&uI=='rock'))
    {

        console.log(`YOU WIN!! ${uI} beats ${cC}`);
        return -1;
        
        
    }
   
}

//const winFactor =playRound(computerChoice,userInput);
//console.log(winFactor);


function beginGame()
{
    for(i=0;i<5;i++)
    
    {

        let cW=0,uW=0, dW=0;
        const computerChoice=getComputerChoice(choiceArray);
        const userInput=getUserChoice();
        console.log(userInput);
        const winFactor=playRound(computerChoice,userInput);

          function decideWinner(wF)
          {
           if(wF==1)
           {

            cW=cW+1;
           }else if(wF==-1)
           {

            uW=uW+1;
           }
           else if(wF==0)
           {

            dW=dW+1;
           }


          }
  
          cW>uW ? console.log("GAME OVER!!!!I WIN"): console.log("GAME OVER!!!YOU WIN");

          decideWinner(winFactor);




}
}
beginGame();
