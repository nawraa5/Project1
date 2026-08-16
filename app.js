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
    },
    {
        color:'Gold',
        firstColor:'yellow',
        secondColor:'brown'
    }
]

const buttonElement = document.querySelector('#start-btn')

function startGame(){
    console,console.log('start Game');
    
}

buttonElement.addEventListener('click',startGame)



