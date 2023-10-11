"use strict"

// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var randomNum = -1
var count = 0

function changeText(newText) {
    let textC = document.querySelector(".textContainer")
    textC.innerText = newText
}


/** Fonction qui permet de tester si le nombre présent dans l'input est bon 
 * Cette fonction est lancée quand le bouton "proposer" est appuyé
*/
function tryNumber() {


    /** Récupérer l'input de l'utilisateur */
    const userNum = document.querySelector(".inputNum").value
    /** Compare avec le nombre avec celui généré */
    if (isNaN(userNum)) {
        count++;
        changeText("Ce n'est pas un nombre !")

    }
    else if (userNum < 1 || userNum > 100) {
        count++
        changeText("Ce nombre n'est pas compris entre 1 et 100 !")
    }
    else if (userNum === randomNum) {
        //correctNum = true;
        count++;
        changeText("Bien joué ! Vous avec pris " + count + " essais !")
        /** Fonction de fin de jeu */
        endGame()
    }
    else if (userNum < randomNum) {
        count++;
        changeText("C'est plus grand que " + userNum + " !")

    }
    else if (userNum > randomNum) {
        count++;
        changeText("C'est plus petit que " + userNum + " !")
    }
    if (count >= 7) {

        changeText("Vous avez perdu !")
        endGame()
    }
    /* Empty user input */
    const input = document.querySelector(".inputNum")
    input.value = ""
}

/** Fonction de fin de jeu */
function endGame() {
    /** Cacher l'input et bouton proposer */
    const input = document.querySelector(".inputNum")
    const btnTry = document.querySelector(".btn1")
    const btnStart = document.querySelector(".btnStart")
    input.classList.add("hidden")
    btnTry.classList.add("hidden")
    btnStart.classList.remove("hidden")

    flipCard()
    /** Afficher "Voulez vous recommencez ?" avec les boutons */
}

/** Fonction de lancement de jeu */
function startGame() {

    flipCard(true)
    /** Change le nouveau nombre à deviner */
    randomNum = Math.floor(Math.random() * 100) + 1
    const cardFront = document.querySelector(".cardFront")
    cardFront.innerText = randomNum
    /** Reset le count */
    count = 0
    /** Afficher l'input et le bouton Proposer et cacher Start */
    const input = document.querySelector(".inputNum")
    const btnTry = document.querySelector(".btn1")
    const btnStart = document.querySelector(".btnStart")
    input.classList.remove("hidden")
    btnTry.classList.remove("hidden")
    btnStart.classList.add("hidden")
}

function flipCard(reverse){
    const cardBack = document.querySelector(".cardBack")
    const cardFront = document.querySelector(".cardFront")
    const cardInner = document.querySelector(".cardInner")
    if(reverse){
        cardBack.classList.remove("flipthecard")
        cardFront.classList.remove("flipthecard")
        cardInner.classList.remove("flipthecard2")
    } else {
        cardBack.classList.add("flipthecard")
        cardFront.classList.add("flipthecard")
        cardInner.classList.add("flipthecard2")
    }

} 






