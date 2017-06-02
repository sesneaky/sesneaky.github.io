var sketch = function( p ) {

  var canvas, canvasSize;
  var x, y, angle, interval, speed, centerX, centerY, angleBegin, angleEnd, minInterval, maxInterval;
  var i, j;
  var increasing;

  p.setup = function() {
    canvasSize = 100;
    centerX = canvasSize/2;
    centerY = canvasSize/2;
    minFibonacci = canvasSize/4;
    fibonacciLength = canvasSize/20;
    angleBegin = -p.PI/2;
    angleEnd = 3*p.PI/2;
    minInterval = p.PI/8;
    maxInterval = p.PI;
    canvas = p.createCanvas(canvasSize, canvasSize);
    canvas.parent('p5root');
    canvas.id('canvas1');
    interval = p.PI;
    increasing = false;
    p.noStroke();
    speed = 0.003;
  };

  p.draw = function() {
    if (p.frameCount % 3 != 0){
      return;
    }

    if (increasing){
      interval+=speed*interval;
    } else {
      interval-=speed*interval;
    }

    if (increasing && interval > maxInterval){
      increasing = false;
    } else if (!increasing && interval < minInterval){
      increasing = true;
    }

    i = 0;
    j = 1;
    p.fill(150, 50, 50);
    p.ellipse(centerX, centerY, canvasSize, canvasSize);
    p.fill(255);

    p.beginShape();

    for (angle = angleBegin; angle < angleEnd; angle += interval){
      x = p.cos(angle) * (minFibonacci + fibonacciLength * (j % 5));
      y = p.sin(angle) * (minFibonacci + fibonacciLength * (j % 5));

      p.vertex(centerX + x, centerY + y);

      var temp = j;
      j = i+j;
      i = temp;
    }

    p.endShape();
  };
};

var p5_1 = new p5(sketch);
