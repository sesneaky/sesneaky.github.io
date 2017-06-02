var sketch2 = function( p ) {

  var canvas2, cy, d=15;

  p.setup = function() {
    canvas2 = p.createCanvas(300, 30);
    canvas2.parent('p5root2');
    canvas2.id('canvas2');

    cy = 10;
    p.noFill();
    p.stroke(150, 50, 50);
    p.strokeWeight(1.3);
  };

  p.draw = function() {
    if (p.frameCount % 3 != 0){
      return;
    }

    p.background(255);
    s(10, cy);
    e(30, cy);
    at(50, cy);
    s(70, cy);
    e(90, cy);
    s(110, cy);
    n(130, cy);
    e(150, cy);
    a(170, cy);
    k(190, cy);
    y(210, cy);
    dott(225, cy);
    c(240, cy);
    o(260, cy);
    m(285, cy);
  };

  function s(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, 1.15*p.PI, 1.85*p.PI);
    p.arc(x, y, d, d, 0.15*p.PI, 0.85*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x-.4*d, y-.2*d, x+.4*d, y+.2*d);
  }

  function e(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, 0.25*p.PI, 1.93*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x-.4*d, y-.08*d, x+.5*d, y-.08*d);
  }

  function at(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, 0.4*p.PI, 2.2*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.arc(x, y, .6*d, .6*d, 0.2*p.PI, 1.8*p.PI);
    p.line(x+.2*d, y-.2*d, x+.2*d, y+.2*d);
    p.line(x+.2*d, y+.3*d, x+.4*d, y+.3*d);
  }

  function n(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, 0.70*p.PI, 1.30*p.PI);
    p.arc(x, y, d, d, -0.30*p.PI, 0.30*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x-.3*d, y-.4*d, x+.3*d, y+.4*d);
  }

  function a(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, -0.75*p.PI, 0.73*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.arc(x, y+.3*d, .8*d, .8*d, p.PI, 2*p.PI);
    p.line(x+.5*d, y, x+.5*d, y+.5*d);
  }

  function k(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x+.2*d, y, d, d, 0.4*p.PI, 1.6*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x-.4*d, y-.5*d, x-.4*d, y+.5*d);
  }

  function y(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y-.5*d, d, d, 0, p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x+.3*d, y-.08*d, x-.3*d, y+.5*d);
  }

  function dott(x, y)
  {
    p.stroke(150, 50, 50);
    p.ellipse(x, y+.3*d, .2*d, .2*d);
  }

  function c(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x, y, d, d, 0.2*p.PI, 1.8*p.PI);
  }

  function o(x, y)
  {
    p.stroke(150, 50, 50);
    p.ellipse(x, y, d, d);
  }

  function m(x, y)
  {
    p.stroke(150, 50, 50);
    p.arc(x-.2*d, y, d, d, 0.65*p.PI, 1.35*p.PI);
    p.arc(x+.2*d, y, d, d, 1.65*p.PI, 2.35*p.PI);
    p.stroke(150, 50, 50, p.frameCount%512*2);
    p.line(x-.4*d, y-.4*d, x, y-.08*d);
    p.line(x+.4*d, y-.4*d, x, y-.08*d);
  }
};

var p5_2 = new p5(sketch2);
