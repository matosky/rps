const box1 = document.getElementById('options')
const box2 = document.getElementById('choices')
const computer = document.getElementById('computerBox')
const winLose = document.getElementById('i-win')
const myPicked = document.getElementById('mypicked')
const playAgain = document.getElementById('playAgain')
const confirmText = document.getElementById('confirm')
const score = document.getElementById('score')
const btnRule = document.getElementById('btn-rule')
const rules = document.getElementById('rules')
const modal = document.getElementById('modal')




const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

const computerOptions = ['paper','scissors','rock']

const options = 
[
    {image:'paper.svg', borderColor:'10px solid hsl(230, 89%, 62%)'},
    {image:'scissors.svg', borderColor:'10px solid hsl(39, 89%, 49%)'},
    {image:'rock.svg', borderColor:'10px solid hsl(349, 71%, 52%)'}
]





// all options available pick
const availableOptions = document.querySelectorAll('.option')
availableOptions.forEach(choice=>{
    choice.addEventListener('click', initGame)
})

// Starting Game on Pick..................................................
let newScore = parseFloat(score.textContent);

function initGame(e){
    myPicked.firstElementChild.src=e.target.src;

    if(e.target.id==='paper'){
        myPicked.style.border = `${options[0].borderColor}`
    }else if(e.target.id==='scissors'){
        myPicked.style.border = `${options[1].borderColor}`
    }else{
        myPicked.style.border = `${options[2].borderColor}`
    }


// computer picked................................................
   let random = Math.floor(Math.random()*options.length)
   const computerChoice = random
    computer.firstElementChild.src = `${options[computerChoice].image}`
    computer.style.border = `${options[computerChoice].borderColor}`

    winLose.classList.add('hide')
    computer.classList.add('hide')
    box1.classList.add('hide')
    box2.classList.add('show')
    setTimeout(()=>{
     computer.classList.remove('hide')
    },1000)

    setTimeout(()=>{
        winLose.classList.remove('hide')
    },1000)

    
    function decideWinner(){
        const computerValue = computerOptions[random]
        const myValue = e.target.id
        if(computerValue===myValue){
            confirmText.textContent = "GAME IS TIED"

        }else if(computerValue==='paper'&&myValue==='rock'
          || computerValue==='rock'&&myValue==='scissors'
          || computerValue==='scissors'&&myValue==='paper'

        ){
            confirmText.textContent = "YOU LOSE"
            if(newScore===0){
                newScore=0
            }else if(newScore > 0){
                newScore=newScore-1;
                setTimeout(()=>{
                 score.textContent = newScore;
             },2000)
            }

        }else if(myValue==='paper'&&computerValue==='rock'
            || myValue==='rock'&&computerValue==='scissors'
            || myValue==='scissors'&&computerValue==='paper'
        ){
           confirmText.textContent = "YOU WIN"
           newScore=newScore+1;
            setTimeout(()=>{
                score.textContent = newScore;
            },2000)
        }
    }

    decideWinner()

}

playAgain.addEventListener('click', nextRound)

function nextRound(){
    box2.classList.remove('show')
    box1.classList.remove('hide')
}


// handle display rules........................................

btnRule.addEventListener('click', handleRules)

function handleRules(){
    modal.classList.toggle('toggleModal')
    rules.classList.toggle('toggleModal')
}


