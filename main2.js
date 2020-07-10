var canvas = document.getElementById('myCanvasTwo');
var context = canvas.getContext('2d');

var size = 50;
var padding = 5;
var rowCounter = 0;

for (rowCounter; rowCounter < 5; rowCounter = rowCounter + 1) {
  
  var positionX = 15;
  var positionY = 15;
  var squareCounter = 0;
  
  for (squareCounter; squareCounter <= rowCounter; squareCounter = squareCounter + 1) {
    
    context.fillStyle = 'rgba(255, 165, 0, 0.5)';
    context.fillRect(positionX + squareCounter * (padding + size), positionY + rowCounter * (padding + size), size, size);
  }
  
}