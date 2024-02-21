"use strict";

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];



const nextSequence = function () {
  const randomNum = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);
}

