var ball;
var score;


function setup() {
  createCanvas(850, 500);
  ball = new Ball();
  paddleA = new Paddle(40,height/2);
  paddleB = new Paddle(width-40,height/2);
  score = new Score();
}

function draw() {
  background(51);
  ball.show();
  ball.update();
  ball.checkEdges();
  paddleA.show();
  paddleA.move(65,90);
  paddleB.show();
  paddleB.move(UP_ARROW,DOWN_ARROW);
  ball.respawn();
  score.show();
  paddleA.collision();
  paddleB.collision();
}



function keyPressed(){
  if(keyCode === paddleA.up){
    paddleA.moveUp = true;
    paddleA.moveDown = false;
  }
  else if(keyCode === paddleA.down){
    paddleA.moveUp = false;
    paddleA.moveDown = true;
  }
  if(keyCode === paddleB.up){
    paddleB.moveUp = true;
    paddleB.moveDown = false;
  }
  else if(keyCode === paddleB.down){
    paddleB.moveUp = false;
    paddleB.moveDown = true;
  }
}
function keyReleased(){
  if(keyCode!=DOWN_ARROW&&keyCode!=UP_ARROW){
    paddleA.moveUp = false;
    paddleA.moveDown = false;
  }

  if(keyCode!=65&&keyCode!=90){
    paddleB.moveUp = false;
    paddleB.moveDown = false;
  }
}
