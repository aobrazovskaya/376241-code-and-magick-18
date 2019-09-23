'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var charactersFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var charactersLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

/**
 * Get random number with min value and max value.
 * @param {number} min min value
 * @param {number} max max value
 * @return {number} random number in the range
 */
var getRandomNumberInTheRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var characters = [];
for (var i = 0; i < 4; i++) {
  var randomNumber = getRandomNumberInTheRange(0, charactersFirstNames.length);
  var character = {
    name: charactersFirstNames[randomNumber] + ' ' + charactersLastNames[randomNumber],
    coatColor: coatColors[getRandomNumberInTheRange(0, coatColors.length)],
    eyesColor: eyesColors[getRandomNumberInTheRange(0, eyesColors.length)],
  };
  characters.push(character);
}
