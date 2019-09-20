'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP = 35;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 20;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 130;

/**
 * Draw rectangle with its shadow.
 * @param {object} ctx canvas context
 * @param {number} x rectangle's starting point by x coordinate
 * @param {number} y rectangle's starting point by y coordinate
 * @param {string} color rectangle's fillstyle
 */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/**
 * Select max element of array.
 * @param {Array} arr input array
 * @return {number} max element
 */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/**
 * Get random color by changing saturation
 * @param {number} valueOfHSLHue numerical value of hue in hsl
 * @return {string} hsl final value
 */
var getRandomColorBySaturation = function (valueOfHSLHue) {
  return 'hsl(' + valueOfHSLHue + ', ' + Math.round(Math.random() * 100) + '%, 50%)';
};

/**
 * Fill rectangle bar color by name
 * @param {string} name player name
 * @return {string} color
 */
var getFillColor = function (name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColorBySaturation(245);
};

/**
 * Draw player level statistics
 * @param {object} ctx canvas context
 * @param {string} players array of player's names
 * @param {number} times player level time
 */
window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < players.length; i++) {
    var barHeight = -COLUMN_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT + barHeight - GAP, COLUMN_WIDTH);
    ctx.font = '16 px, PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP + TEXT_HEIGHT);

    ctx.fillStyle = getFillColor(players[i]);

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT, COLUMN_WIDTH, barHeight);
  }
};
