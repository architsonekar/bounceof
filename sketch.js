
var fbox,fbox1;


function setup() {
  createCanvas(800,400);
 
  fbox = createSprite(300,0,50,100);
  fbox.shapeColor= "green";
  fbox.velocityY = 6;
  fbox.debug=true;

  fbox1 = createSprite(300,400,50,100);
  fbox1.shapeColor= "green";
  fbox1.debug=true;
  fbox1.velocityY=-6;

}

function draw() {
  background("black"); 
  
bounceoff(fbox, fbox1);
  
  drawSprites();
}


function bounceoff(obj1, obj2){
  if(obj1.x-obj2.x<obj1.width/2 + obj2.width/2
    && obj2.x-obj1.x<obj1.width/2 + obj2.width/2){
    fbox.velocityX = fbox.velocityX *-1;
    fbox1.velocityX = fbox1.velocityX *-1;
  }
  if( obj1.y-obj2.y<obj1.height/2 + obj2.height/2
    && obj2.y-obj1.y<obj1.height/2 + obj2.height/2){
      fbox.velocityY = fbox.velocityY *-1;
      fbox1.velocityY = fbox1.velocityY *-1;
  }
 
}