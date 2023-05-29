// Copyright (c) 2020 colton grant All rights reserved
//
// Created by: Colton
// Created on: april 2023
// This file contains the JS functions for index.html

"use strict"


function calculate () {
  const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6

/**
 * This function updates the slider value.
 */
  const numberGuessed = parseInt(document.getElementById('guessed-number').value)

  if (numberGuessed == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + "!" + " You got it right! Good job."
  }

  if (numberGuessed !== randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + "!" + " You got it wrong! Try again."  
  }
}