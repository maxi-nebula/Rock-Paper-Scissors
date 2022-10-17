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





//const winFactor =playRound(computerChoice,userInput);
//console.log(winFactor);
 
function beginGame()
{



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

    let cW=0;uW=0;dW=0;
    for(i=0;i<5;i++)
  
    {

     
        const computerChoice=getComputerChoice(choiceArray);
        const userInput=getUserChoice();
        console.log(userInput);
        const winFactor= playRound(computerChoice,userInput);
       if (winFactor==1)
       { cW=cW+1;

        
       }
       else if (winFactor==-1)
       {
        uW=uW+1;
        
       }else if(winFactor==0){
        dW=dW+1;
       }


function decideWinner(C,U,D)
{

    if((D==1 && C==U)||(D==3 && C==U))


    {console.log("------------ITS A DRAW!!LETS TRY AGAIN-----------------");
}
else if(C>U)

{

    console.log("----------GAME OVER!! I WIN---------------");
}
else if(U>C)
{

    console.log("**************CONGRATULATIONS!!YOU BEAT ME**********");
}

}
                 

}


decideWinner(cW,uW,dW);


}

beginGame();


