var canvas = document.getElementById('myCanvasFour');
var context = canvas.getContext('2d');

var triangleBase = 100;
var triangleHeight = 100;
var padding = 5;
var positionX = 120;
var positionY = 120;
var triangleCount = 0;

for (triangleCount; triangleCount < 30; triangleCount += 1) {
  
  context.beginPath();
  context.moveTo(positionX + triangleCount * padding, positionY + triangleCount * padding);
  context.lineTo(positionX + triangleBase + triangleCount * padding, positionY + triangleCount * padding);
  context.lineTo(positionX  + triangleBase + triangleCount * padding - (triangleBase / 2), positionY + triangleCount * padding - triangleHeight);
  context.closePath();
  
  context.strokeStyle = 'gray';
  context.stroke();
}