'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var charactersFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var charactersLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coarColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var characters = [];
var getRandomNumberFromArray = function (arr) {
  Math.floor(Math.random * arr.length);
};

for (var i = 0; i < 4; i++) {
  var character = {
    name: charactersFirstNames[Math.floor(Math.random * charactersFirstNames.length)] + charactersLastNames[Math.floor(Math.random * charactersLastNames.length)];
  }
  characters[name] = 
  
};
