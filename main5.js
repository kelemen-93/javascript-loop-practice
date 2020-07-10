var canvas = document.getElementById('myCanvasFive');
var context = canvas.getContext('2d');

var squareCount = 0;
var positionX = 0;
var positionY = 0;
var size = 10;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var recWidth = canvasWidth;
var recHeight = canvasHeight;
var hueValue = 360;


for (squareCount; squareCount < 17; squareCount += 1) {
  
  context.fillStyle = 'hsl(' + hueValue + ', 60%, 45%)';
  context.fillRect(positionX, positionY, recWidth, recHeight);
  hueValue -= 360 / 17;
  positionX += size;
  positionY += size;
  recWidth -= 2 * size;
  recHeight -= 2 * size;
  
}
