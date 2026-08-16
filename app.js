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

const buttonElement = document.querySelector('#start-btn')
const targetColorElement = document.querySelector('#target-color')
const colorChoices= document.querySelectorAll('.color-choice')

let firstColor;
let secondColor;
let currentQuestion;


function startGame(){
  console.log('start Game');

  const randomColor = Math.floor(Math.random()*questions.length);
  currentQuestion = questions[randomColor];
  console.log(currentQuestion);

    targetColorElement.style.backgroundColor= currentQuestion.color;
}




colorChoices.forEach(function(colorChoice){

    colorChoice.addEventListener('click', function(){
       
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

                (secondColor === currentQuestion.secondColor && 
                    firstColor === currentQuestion.firstColor)){
                    
                        console.log('Correct !');
                    }

                    else{
                        console.log('Wrong !');
                    }
                }
            
        }
});


buttonElement.addEventListener('click',startGame);
