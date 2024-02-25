"use strict";

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

// HIGHER ORDER FUNCTION
function nextSequence() {
  const randomNum = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  // called the function animateColor
  animateColor(randomColor);
  // called the function playAudio
  playAudio(randomColor);
};

// CALLBACK FUNCTIONS - PLAY AUDIO, ANIMATE COLOR
function playAudio(color) {
  const audioHtml = `<audio src=\"./sounds/${color}.mp3\" autoplay></audio>`;
  const hi = document
    .querySelector(".btn")
    .insertAdjacentHTML("afterbegin", audioHtml);
  console.log(document.querySelector(".btn"));
};

function animateColor(color) {
  document.querySelector("." + color).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + color).classList.remove("pressed");
  }, 300);
};


//EVENT HANDLERS
const btn = document.querySelectorAll(".btn");
btn.forEach(e => e.addEventListener("click", function(ev) {
  const chosenColor = ev.target.id;
  userClickedPattern.push(chosenColor);

  playAudio(chosenColor);
  animateColor(chosenColor);
}));
