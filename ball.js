var r = 24;
var ballColor = 255;
function Ball() {

      this.location = createVector(width/2, height/2);
      this.velocity = createVector(random(-5,5),random(-5,5));

      this.topspeed = 15;

      if(this.velocity.x>0 && this.velocity.y>0 ){
        this.acceleration = createVector(0.001,0.001);
      }else if(this.velocity.x<0 && this.velocity.y<0){
        this.acceleration = createVector(-0.001,-0.001);
      }else if(this.velocity.x>0 && this.velocity.y<0){
        this.acceleration = createVector(0.001,-0.001);
      }else if(this.velocity.x<0 && this.velocity.y>0){
        this.acceleration = createVector(0.001,-0.001);
      }


  this.update = function(){
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);

  };

  this.show = function(){
    noStroke();
    fill(ballColor);
    ellipse(this.location.x, this.location.y, r, r);
  };

  this.checkEdges = function() {



    if (this.location.y < 0+r/2) {
      this.velocity.y *= -1;
      this.acceleration.y *=-1;
    }
    else if (this.location.y > height-r/2) {
      this.velocity.y *= -1;
      this.acceleration.y *=-1;
    }
    else if (this.location.x < 0+r/2) {
      this.velocity.x *= -1;
      this.acceleration.y *=-1;
    }
    else if (this.location.x > width-r/2) {
      this.velocity.x *= -1;
      this.acceleration.y *=-1;
    }

  };
  this.respawn = function(){
    if (this.location.x < 0+r/2) {
      this.location.x = width/2;
      this.location.y = height/2;
      this.velocity = createVector(random(-3,2),random(2,3));
      scoreLeft += 1;
    }
    else if (this.location.x > width-r/2) {
      this.location.x = width/2;
      this.location.y = height/2;
      this.velocity = createVector(random(-3,2),random(2,3));
      scoreRight += 1;
    }

  };
}