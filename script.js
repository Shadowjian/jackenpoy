// SOUND EFFECTS
const bgAudio = document.querySelector('#audio1')
bgAudio.loop = true

const draw = document.querySelector('#draw')
const slap = document.querySelector('#slap')
const awSlap = document.querySelector('#awslap')
const failed = document.querySelector('#failed')
const win = document.querySelector('#win')

const showWeaponP1 = document.querySelector('.show-weapon-p1')
const vs = document.querySelector('#vs')
const showWeaponComp = document.querySelector('.show-weapon-comp')
const round = document.querySelector("#round")
const winLose = document.querySelector('#win-lose')
const fight = document.querySelector("#fight")
let hpP1Count = document.querySelector('#hp-p1-count')
let hpCompCount = document.querySelector('#hp-comp-count')

let winP1 = document.querySelector("#player1-score")
let winComp = document.querySelector("#comp-score")

// GAMEPAD
const actionPad = document.querySelector("#action-pad")
actionPad.addEventListener('click', selectWeaponPad)

const weaponsP1 = document.querySelector('#p1-weapons')
const weaponsBoss = document.querySelector('#boss-weapons')

// TOUCH SCREEN
weaponsP1.addEventListener('click', selectWeapon)

let hpP1 = 100
let hpComp = 100
let roundCount = 1

let scoreP1 = 0;
let scoreComp = 0;


// USING TOUCHSCREEN
function selectWeapon(event) {
    bgAudio.play()
    round.classList.remove('hidden')
    fight.classList.add('hidden')
    vs.classList.remove('hidden')
    winLose.classList.add('hidden')
    showWeaponP1.classList.remove('hidden')
    showWeaponComp.classList.remove('hidden')
    
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

    // GAME LOGIC
    function rpsGame (p1) {
        // P1 WEAPON SELECTION
        let player1 = options[p1]
        if (p1 == 0) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
        } else if (p1 == 1) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand'></i>"
        } else if (p1 == 2) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>"
        }
        // COMPUTER WEAPON SELECTION
        let computer = options[Math.floor(Math.random()*3)]
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
           vs.textContent = "Draw"
           draw.currentTime = 0;
           draw.play()
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
           vs.textContent = ["😛!", "🤣!", "🤫!"][Math.floor(Math.random()*3)]
           slap.currentTime = 0;
           slap.play()
           hpComp -= 20
            
        } else {
            awSlap.currentTime = 0;
            awSlap.play()
            vs.textContent = ["🥴!", "😭!", "😢!"][Math.floor(Math.random()*3)]

            hpP1 -= 20
        }
    }
    
    rpsGame(p1)
    if (Math.floor(hpP1) == 0) {
        roundCount += 1
        scoreComp += 1
        winLose.classList.remove('hidden')
        winLose.innerHTML = "<h2>You Lose ☠️!</h2>"
        round.classList.add('hidden')
        failed.play()
        setTimeout(()=>{
            hpComp = 100
            hpP1 = 100
            hpCompCount.style.width = "100%"
            hpP1Count.style.width = "100%"
            winLose.classList.add('hidden')
            showWeaponP1.classList.add('hidden')
            showWeaponComp.classList.add('hidden')
            vs.classList.add('hidden')
            round.classList.remove('hidden')
            
        }, 1500)
        
        setTimeout(()=>{
            showWeaponComp.classList.remove('hidden')
            showWeaponP1.classList.remove('hidden')
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            fight.classList.remove('hidden')
        }, 3000)
              
    }

    if (Math.floor(hpComp) == 0) {
        roundCount += 1
        scoreP1 += 1
        winLose.classList.remove('hidden')
        winLose.innerHTML = "<h2>You Win 🥳!</h2>"
        round.classList.add('hidden')
        win.play()
        setTimeout(()=>{
            hpComp = 100
            hpP1 = 100
            hpCompCount.style.width = "100%"
            hpP1Count.style.width = "100%"
            winLose.classList.add('hidden')
            showWeaponP1.classList.add('hidden')
            showWeaponComp.classList.add('hidden')
            vs.classList.add('hidden')
            round.classList.remove('hidden')
        }, 1500)
        setTimeout(()=>{
            showWeaponComp.classList.remove('hidden')
            showWeaponP1.classList.remove('hidden')
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            fight.classList.remove('hidden')
        }, 3000)
    }

    console.log('round' + roundCount)
    // console.log('comp' + scoreComp, 'player1' + scoreP1)
    // if (roundCount == 3){
    //     round.innerHTML = "Final Round"
    //     if (scoreComp > scoreP1) {
    //         console.log('comp wins')
    //     } else {
    //         console.log('p1 wins')
    //     }
    // } else if (roundCount > 3) {
    //     roundCount = 1
    //     round.innerHTML = `Round ${roundCount}`
    // } else {
    //     round.innerHTML = `Round ${roundCount}`
    // }
    round.innerHTML = `Round ${roundCount}`
    winComp.innerHTML = `Wins: ${scoreComp}`
    winP1.innerHTML = `Wins: ${scoreP1}`
    hpP1Count.style.width = `${hpP1}%`
    hpCompCount.style.width = `${hpComp}%`

}
// USING GAMEPAD

function selectWeaponPad(event) {
    
    showWeaponComp.innerHTML = 
    bgAudio.play()
    round.classList.remove('hidden')
    fight.classList.add('hidden')
    vs.classList.remove('hidden')
    winLose.classList.add('hidden')
    showWeaponP1.classList.remove('hidden')
    showWeaponComp.classList.remove('hidden')
    
    const options = "rps"
    let id = event.target.getAttribute("id");
    p1 = 0
    if (id === 'star-btn'){
        p1 = 0
    } else if (id === 'square-btn') {
        p1 = 1
    } else if (id === 'circle-btn') {
        p1 = 1
    } else if (id === 'heart-btn'){
        p1 = 2
    }

    // GAME LOGIC
    function rpsGame (p1) {
        // P1 WEAPON SELECTION
       
        let player1 = options[p1]
        if (p1 == 0) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
        } else if (p1 == 1) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand'></i>"
        } else if (p1 == 2) {
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>"
        }
        // COMPUTER WEAPON SELECTION
        let computer = options[Math.floor(Math.random()*3)]
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
           vs.textContent = "Draw"
           draw.currentTime = 0;
           draw.play()
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
           vs.textContent = ["😛!", "🤣!", "🤫!"][Math.floor(Math.random()*3)]
           slap.currentTime = 0;
            slap.play()
            hpComp -= 20
            
        } else {
            awSlap.currentTime = 0;
            awSlap.play()
            vs.textContent = ["🥴!", "😭!", "😢!"][Math.floor(Math.random()*3)]

            hpP1 -= 20
        }
    }
    
    rpsGame(p1)

    if (Math.floor(hpP1) == 0) {
        roundCount += 1
        scoreComp += 1
        winLose.classList.remove('hidden')
        winLose.innerHTML = "<h2>You Lose ☠️!</h2>"
        round.classList.add('hidden')
        failed.play()
        setTimeout(()=>{
            hpComp = 100
            hpP1 = 100
            hpCompCount.style.width = "100%"
            hpP1Count.style.width = "100%"
            winLose.classList.add('hidden')
            showWeaponP1.classList.add('hidden')
            showWeaponComp.classList.add('hidden')
            vs.classList.add('hidden')
            round.classList.remove('hidden')
            
        }, 1500)
        
        setTimeout(()=>{
            showWeaponComp.classList.remove('hidden')
            showWeaponP1.classList.remove('hidden')
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            fight.classList.remove('hidden')
        }, 3000)
              
    }

    if (Math.floor(hpComp) == 0) {
        roundCount += 1
        scoreP1 += 1
        winLose.classList.remove('hidden')
        winLose.innerHTML = "<h2>You Win 🥳!</h2>"
        round.classList.add('hidden')
        win.play()
        setTimeout(()=>{
            hpComp = 100
            hpP1 = 100
            hpCompCount.style.width = "100%"
            hpP1Count.style.width = "100%"
            winLose.classList.add('hidden')
            showWeaponP1.classList.add('hidden')
            showWeaponComp.classList.add('hidden')
            vs.classList.add('hidden')
            round.classList.remove('hidden')
        }, 1500)
        setTimeout(()=>{
            showWeaponComp.classList.remove('hidden')
            showWeaponP1.classList.remove('hidden')
            showWeaponP1.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            showWeaponComp.innerHTML = "<i class='fa-solid fa-hand-back-fist'></i>"
            fight.classList.remove('hidden')
        }, 3000)
    }

    console.log('round' + roundCount)
    // console.log('comp' + scoreComp, 'player1' + scoreP1)
    // if (roundCount == 3){
    //     round.innerHTML = "Final Round"
    //     if (scoreComp > scoreP1) {
    //         console.log('comp wins')
    //     } else {
    //         console.log('p1 wins')
    //     }
    // } else if (roundCount > 3) {
    //     roundCount = 1
    //     round.innerHTML = `Round ${roundCount}`
    // } else {
    //     round.innerHTML = `Round ${roundCount}`
    // }
    round.innerHTML = `Round ${roundCount}`
    winComp.innerHTML = `Wins: ${scoreComp}`
    winP1.innerHTML = `Wins: ${scoreP1}`
    hpP1Count.style.width = `${hpP1}%`
    hpCompCount.style.width = `${hpComp}%`

}

const gamePad = document.querySelector("#controller")
const gamePadCheckBox = document.querySelector("#gpad")
gamePadCheckBox.addEventListener('click', toggleGamePad)

// GAMEPAD OPTION

function toggleGamePad() {
    if (gamePadCheckBox.checked) {
        gamePad.classList.remove('hide')
        weaponsBoss.classList.add('hidden')
        weaponsP1.classList.add('hidden')
        alert("star=rock, square/circle=paper, heart=scissors")
    } else {
        gamePad.classList.add('hide')
        weaponsBoss.classList.remove('hidden')
        weaponsP1.classList.remove('hidden')
        
    }
}


