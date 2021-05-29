"use strict"

let secretNumber = Math.floor(Math.random() * 100) + 1

let score = 10
let highScore = 0

const displayMessage = function(message) {

  document.querySelector(".message").textContent = message
}

// Event Listener to the click of the button check to start the game
document.querySelector(".check").addEventListener("click", function() {

  const guess = Number(document.querySelector(".guess").value)

  if(!guess) { // If empty return an error

    displayMessage("⛔️ Insert a number!")
  }
  else if(guess === secretNumber) { // If correct guess

    displayMessage("🎉 Corret Number!")

    // Display the correct guess
    document.querySelector(".number").textContent = secretNumber

    // Change background to Green
    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"

    if(score > highScore) {

      highScore = score
      document.querySelector(".highscore").textContent = highScore
    }

  }
  if(guess !== secretNumber) {

    if(score > 1) {

      displayMessage(guess > secretNumber? "📈 Too High" : "📉 Too Low")

      score --
      document.querySelector(".score").textContent = score
    }
    else {

      displayMessage("You lost!")
      document.querySelector(".score").textContent = 0

      // Display the correct guess
      document.querySelector(".number").textContent = secretNumber

      // Change background to Red
      document.querySelector("body").style.backgroundColor = "#f33f"
    }
  }
})

// Reset game if button Again is pressed

document.querySelector(".again").addEventListener("click", function() {

  score = 10

  secretNumber = Math.floor(Math.random() * 100) + 1

  document.querySelector(".score").textContent = 10

  document.querySelector(".number").textContent = "?"

  displayMessage("Start guessing ...")

  document.querySelector(".guess").value = ""

  document.querySelector("body").style.backgroundColor = "#222"

  document.querySelector(".number").style.width = "15rem"

})