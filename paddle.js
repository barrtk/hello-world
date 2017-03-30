var d;
var d2;
function Paddle(x,y){
  this.moveUp = false;
  this.movedown = false;
  this.x = x;
  this.y = y;
  this.w = 10;
  this.h = 60;
  this.show = function(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
  };

  this.collision = function(){
    this.paddle_botY = this.y+this.h/2;
    this.paddle_topY = this.y-this.h/2;


    fill('red');
    ellipse(this.paddle_topX,this.paddle_topY,5,5);
    fill('blue');


    if((ball.location.y>=paddleA.paddle_topY) && (ball.location.y<=paddleA.paddle_botY) && (ball.location.x <= 55)&&(ball.location.x >= 40)){
      ball.velocity.x *= -1.2;
      ball.location.x = 56;
    }

    if((ball.location.y>=paddleB.paddle_topY) && (ball.location.y<=paddleB.paddle_botY) && (ball.location.x >= width-55)&&(ball.location.x <= width-40)){
      ball.velocity.x *= -1.2;
      ball.location.x = width-56;
    }

  };


  this.move = function(up,down){
    this.up = up;
    this.down = down;
    if(this.moveUp){
      this.y-=10;
    }
    else if(this.moveDown){
      this.y+=10;
    }

    if(this.y>height){
      this.y = height;
    }
    else if(this.y<0)
    this.y = 0;

  };
}
