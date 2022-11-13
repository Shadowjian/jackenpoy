// SOUND EFFECTS
const bgAudio = document.querySelector('#audio1')
bgAudio.loop = true

const slap = document.querySelector('#slap')
const awSlap = document.querySelector('#awslap')
const failed = document.querySelector('#failed')
const win = document.querySelector('#win')

// let display  = document.querySelector('.display')
// let score = document.querySelector('.score')
const showWeaponP1 = document.querySelector('.show-weapon-p1')
const vs = document.querySelector('#vs')
const showWeaponComp = document.querySelector('.show-weapon-comp')
const round = document.querySelector("#round")
const winLose = document.querySelector('#win-lose')
const fight = document.querySelector("#fight")
let hpP1Count = document.querySelector('#hp-p1-count')
let hpCompCount = document.querySelector('#hp-comp-count')

// GAMEPAD
const actionPad = document.querySelector("#action-pad")
actionPad.addEventListener('click', selectWeaponPad)

const weaponsP1 = document.querySelector('#p1-weapons')
const weaponsBoss = document.querySelector('#boss-weapons')

weaponsP1.addEventListener('click', selectWeapon)


let hpP1 = 100
let hpComp = 100
let roundCount = 1


// USING TOUCHSCREEN
function selectWeapon(event) {
    bgAudio.play()
    fight.classList.add('hidden')
    vs.classList.remove('hidden')
    winLose.classList.add('hidden')
    showWeaponP1.classList.remove('hidden')
    showWeaponComp.classList.remove('hidden')
    
    const options = "rps"
    let id = event.target.getAttribute("id");
    p1 = 0
    if (id ==='rock' || id === 'star-btn'){
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
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
           vs.textContent = ["😛!", "🤣!", "🤫!"][Math.floor(Math.random()*3)]
            slap.play()
            hpComp -= 25
            
        } else {
            awSlap.play()
            vs.textContent = ["🥴!", "😭!", "😢!"][Math.floor(Math.random()*3)]

            hpP1 -= 25
        }
    }
    
    rpsGame(p1)
    // console.log(hpComp)
    // console.log(hpP1)
    if (Math.floor(hpP1) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        fight.classList.remove('hidden')
        failed.play()
        winLose.classList.remove('hidden')
        vs.classList.add('hidden')
        winLose.innerHTML = "<h2>You Lose ☠️!</h2>"
    }
    if (Math.floor(hpComp) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        winLose.classList.remove('hidden')
        fight.classList.remove('hidden')
        vs.classList.add('hidden')
        win.play()
        winLose.innerHTML = "<h2>You Win 🥳!</h2>"
    }

    round.innerHTML = `Round ${roundCount}`
    hpP1Count.style.width = `${hpP1}%`
    hpCompCount.style.width = `${hpComp}%`
}

// USING GAMEPAD

function selectWeaponPad(event) {
    // if (event.target.tagName ==="i"){
    bgAudio.play()
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
        } else if (result == 'rs' || result == 'pr' || result == 'sp' ) {
           vs.textContent = ["😛!", "🤣!", "🤫!"][Math.floor(Math.random()*3)]
            slap.play()
            hpComp -= 25
            
        } else {
            awSlap.play()
            vs.textContent = ["🥴!", "😭!", "😢!"][Math.floor(Math.random()*3)]

            hpP1 -= 25
        }
    }
    
    rpsGame(p1)
    // console.log(hpComp)
    // console.log(hpP1)
    if (Math.floor(hpP1) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        fight.classList.remove('hidden')
        failed.play()
        winLose.classList.remove('hidden')
        vs.classList.add('hidden')
        winLose.innerHTML = "<h2>You Lose ☠️!</h2>"
    }
    if (Math.floor(hpComp) == 0) {
        roundCount += 1
        hpComp = 100
        hpP1 = 100
        showWeaponP1.classList.add('hidden')
        showWeaponComp.classList.add('hidden')
        winLose.classList.remove('hidden')
        fight.classList.remove('hidden')
        vs.classList.add('hidden')
        win.play()
        winLose.innerHTML = "<h2>You Win 🥳!</h2>"
    }

    round.innerHTML = `Round ${roundCount}`
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



