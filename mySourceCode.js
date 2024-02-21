"use strict";

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];



const nextSequence = function () {
  const randomNum = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  // PUT SOME FLASH-LIKE ANIMATION
  document.querySelector("." + randomColor).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + randomColor).classList.remove("pressed");
  }, 300);
}

// Called the function
nextSequence();