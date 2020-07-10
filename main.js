var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 45;
var positionX = 20;
var positionY = 20;
var i = 0;

for (i; i < 10; i = i + 1) {
  
  context.fillStyle = 'rgba(255, 165, 0, 0.5)';
  context.fillRect(positionX, positionY, size, size);
  
  positionX += size / 2;
  positionY += size / 2;
  
}