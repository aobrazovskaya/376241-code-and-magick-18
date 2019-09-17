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
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    var barHeight = -COLUMN_HEIGHT * times[i] / maxTime;
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT + barHeight - GAP, COLUMN_WIDTH);
    ctx.font = '16 px, PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP + TEXT_HEIGHT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(243, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT, COLUMN_WIDTH, barHeight);
  }
};
