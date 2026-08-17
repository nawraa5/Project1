const questions = [
    {
        color: 'green',
        firstColor:'yellow',
        secondColor:'blue',
       
    },
    {
        color:'grey',
        firstColor: 'white',
        secondColor: 'black'
    },
    {
        color:'pink',
        firstColor:'red',
        secondColor:'white'
    },
    {
        color: 'orange',
        firstColor: 'red',
        secondColor: 'yellow'
    },
    {
        color:'Purple',
        firstColor:'blue',
        secondColor:'red'
    }
]

const buttonElement = document.querySelector('#start-btn');
const targetColorElement = document.querySelector('#target-color');
const colorChoices= document.querySelectorAll('.color-choice');
const resaultElement = document.querySelector('#result');
const scoreElement= document.querySelector('#score');
const timeElement= document.querySelector('#time');


let firstColor;
let secondColor;
let currentQuestion;
let score=0;
let time =20;
let timer;
let gameActive = false;



function startGame(){
  console.log('start Game');

  gameActive= true;
  firstColor=null;
  secondColor=null;

  const randomColor = Math.floor(Math.random()*questions.length);
  currentQuestion = questions[randomColor];
  console.log(currentQuestion);

  targetColorElement.style.backgroundColor= currentQuestion.color;
  
  startTimer();
}




colorChoices.forEach(function(colorChoice){

    colorChoice.addEventListener('click', function(){
        if(!gameActive){
            return;
        }

        const selectedColor = colorChoice.dataset.color;
        
        if(!firstColor){
            firstColor=selectedColor;
            console.log('First color:',firstColor);
        }

        else{
            secondColor=selectedColor;
            console.log('Second color :',secondColor);

            if(
                (firstColor === currentQuestion.firstColor && 
                    secondColor === currentQuestion.secondColor) ||

                (firstColor === currentQuestion.secondColor && 
                    secondColor === currentQuestion.firstColor)){
                    
                        resaultElement.textContent='Correct !';
                        score+=100;
                        scoreElement.textContent=`Score: ${score}`;

                        setTimeout(function(){
                        resaultElement.textContent=''
                        startGame();

                    }, 1000);

                    }

                    else{
                        resaultElement.textContent='Wrong !';

                        setTimeout(function(){
                        resaultElement.textContent=''
                        
                        

                    }, 1000);


                    }

                    

                    firstColor=null;
                    secondColor=null;
                }
            }
        )
        }
);


function startTimer(){
    clearInterval(timer);

    time=20;
    timer= setInterval(function(){
        time--;

        timeElement.textContent='Time:'+time;

        if(time ===0){
            clearInterval(timer);
            gameActive=false;
            resaultElement.textContent='Time Up !';
            setTimeout(function(){
            resaultElement.textContent='';
           
        
    }, 1000 );
            
}

    },1000);
}



buttonElement.addEventListener('click',startGame);
