//These are used for the buttons
let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")

let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let newBtn = document.querySelector("#new-btn")

//To know which player is currently playing
//We know that we have two symbols so that the players will be:
//Player X  && Player O
let playerO=true
//We will be using only one variable and changing its value for eachTime
let count=0;


//We will be byhand calculate all the winning cases of the Tic Tac Toe
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    playerO=true;
    enableBoxes()
    msgContainer.classList.add("hide")
    count=0
}

//We will add actions or events to the buttons
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        //Player O
        count++
        if(playerO==true){
            box.innerText='O'
            box.classList.add("O")
            playerO=false
        }
        //Player X
        else{
            box.innerText='X'
            box.classList.add("X")
            playerO=true
        }
        box.disabled=true
        checkWinnable()
        if(count>=9){
            drawGame()
        }
    })
})

const drawGame = () => {
    msg.innerText=`The Game is Draw`
    msgContainer.classList.remove("hide")
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false
        box.innerText=''
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true
    }
}

const showWinner = (winner) => {
    msg.innerText=`Yoo The Winner is Player ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinnable = () => {
    for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText
        let pos2Value = boxes[pattern[1]].innerText
        let pos3Value = boxes[pattern[2]].innerText

        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value===pos2Value && pos2Value===pos3Value){
                // alert(`The Winner is Player ${pos1Value}`
                showWinner(pos1Value)
            }
        }
    }
}

newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
