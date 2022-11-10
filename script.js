
const bgAudio = document.querySelector('#audio1')
const slap = document.querySelector('#slap')
const awSlap = document.querySelector('#awslap')
const failed = document.querySelector('#failed')
const win = document.querySelector('#win')
bgAudio.loop = true;
bgAudio.play()
const weaponsP1 = document.querySelector('#p1-weapons')
let display  = document.querySelector('.display')
let score = document.querySelector('.score')
let vs = document.querySelector('.vs')

// weaponsP1.addEventListener('mouseover', showWeapon)
// weaponsP1.addEventListener('mouseout', hideWeapon)

const showWeaponP1 = document.querySelector('.show-weapon-p1')
const showWeaponComp = document.querySelector('.show-weapon-comp')

// function showWeapon(event) {
//     let x = event.target
//     showWeaponP1.classList.remove('hidden')
//     showWeaponComp.classList.remove('hidden')
// }

// function hideWeapon(event) {
//     let x = event.target
//     showWeaponP1.classList.add('hidden')
//     showWeaponComp.classList.add('hidden')
// }

weaponsP1.addEventListener('click', getInfo)

let scoreP1 = 0
let scoreComp = 0

let round = document.querySelector("#round")
let winLose = document.querySelector('#win-lose')
let hpP1Count = document.querySelector('#hp-p1-count')
let hpCompCount = document.querySelector('#hp-comp-count')
const fight = document.querySelector("#fight")
let hpP1 = 100
let hpComp = 100
let roundCount = 1
function getInfo(event) {
    fight.classList.add('hidden')
    winLose.classList.add('hidden')
    fight.classList.add('hidden')    
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
    showWeaponP1.classList.remove('hidden')
    showWeaponComp.classList.remove('hidden')
    
    function rpsGame (p1) {

        if (p1 == 0) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
        } else if (p1 == 1) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand'></i>"
        } else if (p1 == 2) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>"
        }

        let player1 = options[p1]
        let computer = options[Math.floor(Math.random(1)*3)]
        
        if (computer == 'r') {
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
        } else if (computer == 'p') {
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand'></i>"
        } else if (computer == 's') {
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>"
        }

        // declaring winner
        let result = player1 + computer
    
        if (player1 == computer) {
            // console.log("it's a tie")
            // display.innerText = "RESULT: It's a tie"
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
            slap.play()
            hpComp -= 25

            // display.innerText = "RESULT: Player 1 Wins"
            
        } else {
            // console.log('comp wins')
            // display.innerText = "RESULT: Computer wins"
            awSlap.play()
            hpP1 -= 25
        }
    }
    
    rpsGame(p1)
    console.log(hpComp)
    console.log(hpP1)
    if (Math.floor(hpP1) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        fight.classList.remove('hidden')
        failed.play()
        winLose.classList.remove('hidden')
        winLose.innerHTML = "<h2>You Lose!</h2>"
    }
    if (Math.floor(hpComp) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        winLose.classList.remove('hidden')
        fight.classList.remove('hidden')
        win.play()
        winLose.innerHTML = "<h2>You Win!</h2>"
    }

    round.innerHTML = `Round ${roundCount}`
    hpP1Count.style.width = `${hpP1}%`
    hpCompCount.style.width = `${hpComp}%`
}






