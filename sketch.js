
var PLAY = 1;
var END = 2;
var gameState = 1;

var alien  , bullet, bg, debris,bulletGroup,debrisGroup,debris2,debris3,debris4,debris2Group,debris3Group,debris4Group,background,form ;
var alienImage,debrisImage,debris2Image,debris3Image,debris4Image,bgImg;
var soundtrackS,deadS,shootS;


function preload(){
alienImage = loadImage("alien.png");
debrisImage = loadImage("meteor.png");
debris2Image = loadImage("ship.png");
debris3Image = loadImage("planet.png");
debris4Image = loadImage("Sun.png");
bgImg = loadImage("universe.jpg");
soundtrackS = loadSound("gun.mp3");
deadS  = loadSound("dead.mp3")
shootS = loadSound("shoot.mp3");
}



function setup() {
  createCanvas(1000,700);

  // creating bow to shoot arrow
  alien = createSprite(880,220,20,50);
 alien.addImage(alienImage);
  alien.scale = 0.1;

  
 debrisGroup = new Group();
 debris2Group = new Group();
 debris3Group = new Group();
 debris4Group = new Group();
 bulletGroup = new Group();
   score = 0  
  
}

function draw() {
background(bgImg);

 

   if(gameState === PLAY){
 

  if (bulletGroup.isTouching(debrisGroup)){
    debrisGroup.setVelocityXEach(0);
    debrisGroup.setLifetimeEach(0);
    debrisGroup.destroyEach();
    bulletGroup.destroyEach();
  

   

    

     score= score+2;
     shootS.play();
     
   }
   if (bulletGroup.isTouching(debris2Group)){
    debris2Group.setVelocityXEach(0);
    debrisGroup.setLifetimeEach(0);
    debris2Group.destroyEach();
    bulletGroup.destroyEach();
 
   

     score= score+2;
     shootS.play();
   }
   if (bulletGroup.isTouching(debris3Group)){
    debris3Group.setVelocityXEach(0);
    debris3Group.setLifetimeEach(0);
    debris3Group.destroyEach();
    bulletGroup.destroyEach();
  
   

     

     score= score+2;
     shootS.play();
   }
   if (bulletGroup.isTouching(debris4Group)){
    debris4Group.setVelocityXEach(0);
    debris4Group.setLifetimeEach(0);
    debris4Group.destroyEach();
    bulletGroup.destroyEach();
 \
   


     score= score+2;
     shootS.play();
   }
   
  //moving bow
 alien.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createBullet ();
  soundtrackS.play();
    
  }

  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 10 == 0) {
    if (select_balloon == 1) {
      debri();
    } 
    else if (select_balloon == 2) {
      debri2();
    } else if (select_balloon == 3) {
      debri3();
    } else {
      debri4();
    }
  }
 
  if (debrisGroup.isTouching(alien)||  (debris2Group.isTouching(alien)) || (debris3Group.isTouching(alien)) || 
  (debris4Group.isTouching(alien)) ){
    debrisGroup.destroyEach();
    debris2Group.destroyEach();
    debris3Group.destroyEach();
    debris4Group.destroyEach();
    bulletGroup.destroyEach();
    alien.destroy();
    
     gameState = END;
     deadS.play();
   } 
 
   
} else
 if(gameState === END){
   background("black")
  stroke(25);
   fill("red");
   textSize(40);
     text("GAME OVER",200,350)

   

       stroke(25);
     fill("red");
     textSize(40);
       text("PRESS R TO RESTART THE GAME ",200,450)
  reset();
     

 }
  drawSprites();
          textSize(30);
          fill("white");
           text("Score: "+ score, 500,50);
           
}


function debri() {
  var debris = createSprite(0,Math.round(random(20, 600)), 10, 10);
  debris.addImage(debrisImage);
  debris.velocityX = 10;
  debris.lifetime = 300;
  debris.scale = 0.1;
  
 debrisGroup.add(debris);
  
}
function debri2() {
  var debris2 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  debris2.addImage(debris2Image);
  debris2.velocityX = 8;
  debris2.lifetime = 300;
  debris2.scale = 0.5;
  debris2Group.add(debris2);
}

function debri3() {
  var debris3 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  debris3.addImage(debris3Image);
  debris3.velocityX = 6;
  debris3.lifetime = 300;
  debris3.scale = 0.1;
  debris3Group.add(debris3);
}

function debri4() {
  var debris4 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  debris4.addImage(debris4Image);
  debris4.velocityX = 4;
  debris4.lifetime = 300;
  debris4.scale = 0.1;
  debris4Group.add(debris4);
}




  



// Creating  arrows for bow
 

 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
 
  bullet.x = 880;
  bullet.y=alien.y;
  bullet.velocityX = -4;
  bullet.lifetime = 250;
  bullet.scale = 0.3;
  
  bulletGroup.add(bullet)
}


function reset(){
  if (keyDown("r")){
score = 0;
gameState = PLAY;
alien = createSprite(880,220,20,50);
 alien.addImage(alienImage);
  alien.scale = 0.1;
  }
}




















