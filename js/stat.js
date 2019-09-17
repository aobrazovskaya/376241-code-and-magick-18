'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 25;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var barHeight = -BAR_HEIGHT * times[i] / maxTime;
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH, barHeight);
  }
};