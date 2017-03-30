var scoreRight = 0;
var scoreLeft = 0;
function Score(){
  var col;
  var col2;
  this.show = function(){
    textSize(32);
    noStroke();
    textStyle('helvetica');
    textAlign(CENTER);
    if(scoreLeft>scoreRight){
      col2 = color(220,20,60); //red
      col = color(50,205,50); //green
    }
    else if(scoreLeft==scoreRight){
      col = color(255,99,71); // orange
      col2 = color(255,99,71); // orange
    }
    else if(scoreLeft<scoreRight){
      col = color(220,20,60); //red
      col2 = color(50,205,50); //green
    }
    fill(col);
    lewo = text(scoreLeft, width / 2 + 75, height/7);
    fill(col2);
    prawo = text(scoreRight, width / 2 - 75, height/7);



};
}
