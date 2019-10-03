'use strict';

var wizardsNumber = 4;
var wizardsFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/**
 * Setup the initial state of the page with wizards.
 */
var setup = function () {
  setup = document.querySelector('.setup');
  setup.querySelector('.setup-similar').classList.remove('hidden');
  setup.classList.remove('hidden');
};

/**
 * @param {number} min min value
 * @param {number} max max value
 * @return {number}
 */
var getRandomNumberInTheRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Drawing a wizard with changing some parameters.
 * @param {object} wizard wizard object with his information
 * @return {HTMLElement} create new HTMLElement of wizard
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var createWizardsWithAttributes = function () {
  var wizards = [];
  for (var i = 0; i < wizardsNumber; i++) {
    var randomNumber = getRandomNumberInTheRange(0, wizardsFirstNames.length);
    var character = {
      name: wizardsFirstNames[randomNumber] + ' ' + wizardsLastNames[randomNumber],
      coatColor: coatColors[getRandomNumberInTheRange(0, coatColors.length)],
      eyesColor: eyesColors[getRandomNumberInTheRange(0, eyesColors.length)],
    };
    wizards.push(character);
  }
  return wizards;
};

var createFragment = function () {
  var wizards = createWizardsWithAttributes();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsNumber; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createFragment();
setup();
