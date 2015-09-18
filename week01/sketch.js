function setup() {
  createCanvas(600,800);
}

function draw() {
  //This is going to be a beautiful flower
  translate(300,300);
  var n=1;//sections of 2PI used for super complex flower
  var e=7;//number of ellipses in the basic pattern
  // background(70,0,70);
  background(20,14,78);
  stroke(255,255,255);
  line(0,0,0,350);
  fill(255,180,255);
  for(var j=1;j<=n;j++){
    for(var i=1;i<=e;i++){
      bezier(0,0,-47,-80,-47,-120,0,-175);
      bezier(0,-175,47,-120,47,-80,0,0);
      // ellipse(0,-100,60,150);
      rotate(2*PI/e);
    }
    rotate(2*PI/n);
  }
  // stroke(144,190,72);
  fill(255,235,139);
  stroke(255,255,255);
  ellipse(0,0,100,100);
  translate(0,350);
  rotate(-2*PI/7);
  fill(144,190,72);
  bezier(0,0,-30,-100,-30,-140,0,-240);
  bezier(0,0,30,-100,30,-140,0,-240);
  rotate(4*PI/7);
  bezier(0,0,-30,-100,-30,-140,0,-240);
  bezier(0,0,30,-100,30,-140,0,-240);
}