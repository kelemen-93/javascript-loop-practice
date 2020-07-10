var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

var size = 30;
var padding = 5;
var rowCount = 0;
var r = 255;
var b = 120;



for (rowCount; rowCount < 6; rowCount += 1) {
  
  var positionX = 125;
  var positionY = 50;
  var squareCount = 0;
  
  for (squareCount; squareCount < 6; squareCount += 1) {
    
    context.fillStyle = 'rgb(' + r + ', 79, ' + b + ')';
    context.fillRect(positionX + squareCount * (size + padding), positionY + rowCount * (size + padding), size, size);
    
    r -= 7;
    
  }
  
   b += 15;
  
}

