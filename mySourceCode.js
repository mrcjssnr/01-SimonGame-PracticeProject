"use strict";

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let start = true;

// HIGHER ORDER FUNCTION
function nextSequence() {
  const randomNum = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomNum];
  userClickedPattern = [];
  gamePattern.push(randomColor);
  console.log(gamePattern);
  level++;
  document.querySelector("#level-title").textContent = `level ${level}`;

  // called the function animateColor
  animateColor(randomColor);
  // called the function playAudio
  playAudio(randomColor);
}

// CALLBACK FUNCTIONS - PLAY AUDIO, ANIMATE COLOR
function playAudio(color) {
  const audioHtml = `<audio src=\"./sounds/${color}.mp3\" autoplay></audio>`;
  const hi = document
    .querySelector(".btn")
    .insertAdjacentHTML("afterbegin", audioHtml);
}

function animateColor(color) {
  document.querySelector("." + color).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + color).classList.remove("pressed");
  }, 300);
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  start = true;
}

function checkAnswer(currentLevel) {
  // if the answer is correct proceed to next sequence
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // if the answer is wrong or if the clicked button is not the same as the gamePattern, these codes will be executed
    playAudio("wrong");
    
    document.querySelector("#level-title").textContent =
      "Game Over, Press \"A\" key to Restart";

    document.querySelector("body").classList.add("game-over");
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 300);

    startOver();
  }
}

// --------- EVENT HANDLERS -------- //
// Added click event
document.querySelectorAll(".btn").forEach((e) =>
  e.addEventListener("click", function (ev) {
    const chosenColor = ev.target.id;
    userClickedPattern.push(chosenColor);

    playAudio(chosenColor);
    animateColor(chosenColor);
    checkAnswer(userClickedPattern.length - 1);
  })
);
// Added keypress event
document.addEventListener("keypress", function (ev) {
  if (ev.key === "a" && start) {
    console.log("you pressed the right key");
    start = false;
    nextSequence();
  }
});
