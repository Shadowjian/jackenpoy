const weapons = document.querySelector('#weapons')
weapons.addEventListener('click', getInfo)
let display  = document.querySelector('.display')
let score = document.querySelector('.score')
let vs = document.querySelector('.vs')

let scoreP1 = 0
let scoreComp = 0
function getInfo(event) {
    const options = "rps"
    let id = event.target.getAttribute("id");
    p1 = 0
    if (id ==='rock'){
        p1 = 0
    } else if (id === 'paper') {
        p1 = 1
    } else if (id === 'scissors'){
        p1 = 2
    }
 
    function rpsGame (p1) {

        let player1 = options[p1]
        let computer = options[Math.floor(Math.random(1)*3)]
        
        // declaring winner
        let result = player1 + computer

        vs.innerText = `p1(${player1}) vs comp(${computer})`
        console.log(result)
    
        if (player1 == computer) {
            // console.log("it's a tie")
            display.innerText = "RESULT: It's a tie"
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
            scoreP1 += 1
            // console.log('p1 wins')
            display.innerText = "RESULT: Player 1 Wins"

        } else {
            // console.log('comp wins')
            display.innerText = "RESULT: Computer wins"
            scoreComp += 1
        }
    }

    rpsGame(p1)

    // console.log("P1:"+ scoreP1, "Comp:" + scoreComp)

    score.innerText = `SCORE: Player1: ${scoreP1} Computer: ${scoreComp}`
}






