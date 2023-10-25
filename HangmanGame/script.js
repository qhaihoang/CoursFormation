"use strict"

const keyboard = document.querySelector(".keyboard")
const hangMan = document.querySelector(".hangMan img")
const wordDisplay = document.querySelector(".wordDisplay")
const guessCountText = document.querySelector(".lives b")
const gameModal = document.querySelector(".gameModal")
const words = "./mots.json"
let currentWord
const maxGuess = 7
let wrongGuess = 0
let correctLetters = []


fetch(words).then(handleFetch)
function handleFetch(response) {
    if (response.ok) {
        response.json().then(words => {
            const randomWord = words[Math.floor(Math.random(words) * words.length)]
            currentWord = randomWord
            console.log(randomWord);
            wordDisplay.innerHTML = randomWord.split("").map(() => `<li class="letter"></li>`).join("")
        }
        )

    }
}

const gameOver = (isVictory) =>{
    setTimeout(()=>{
        gameModal.classList.add("show")
    },300)
}

const initGame = (button, clickedLetter) => {
    console.log(button, clickedLetter);
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter,index)=>{
            if (letter === clickedLetter) {
                correctLetters.push(letter)
                wordDisplay.querySelectorAll("li")[index].innerText = letter
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
            }
        })
    }
    else{
        wrongGuess++
        hangMan.src = `./hangManImg/hangman-${wrongGuess}.svg`
    }
    button.disabled = true
    guessCountText.innerText = `${wrongGuess} / ${maxGuess}`
    if (wrongGuess === maxGuess) { return gameOver(true)  
    }

    if (clickedLetter.length === currentWord.length) {
        return gameOver(false)
    }
}



// keyboard 
for (let i = 97; i <= 122; i++) {

    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button)
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}
