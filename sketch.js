var cat, catImage,catCollide
var mouse, mouseImage,mouseCollide
var garden,gardenImage

function preload() {
    //load the images here
    mouseImage = loadAnimation("Coding C-20 Class/Project 20/images/jerryOne.png","Coding C-20 Class/Project 20/images/jerryTwo.png","Coding C-20 Class/Project 20/images/jerryThree.png","Coding C-20 Class/Project 20/images/jerryFour.png");
    catImage = loadAnimation("Coding C-20 Class/Project 20/images/tomOne.png","Coding C-20 Class/Project 20/images/tomTwo.png","Coding C-20 Class/Project 20/images/tomThree.png","Coding C-20 Class/Project 20/images/tomFour.png");
    gardenImage = loadAnimation("Coding C-20 Class/Project 20/images/garden.png");
    catCollide = loadAnimation("Coding C-20 Class/Project 20/images/tomThree.png");
    mouseCollide = loadImage("Coding C-20 Class/Project 20/images/jerryThree.png");
}

function setup(){
    createCanvas(800,800);
    garden = createSprite(400,400,800,800);
    garden.addImage(gardenImage);
    //create tom and jerry sprites here
    cat = createSprite(900,760,20,20);
    mouse = createSprite(250,760,15,15);
    mouse.addAnimation("jerry",mouseImage);
    
}

function draw() {

    background("white");
    
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
 mouse.changeAnimation("mouse_collided",mouseCollide);
 cat.changeAnimation("cat_collided",catCollide);
 cat.velocityX = 0;
}

keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("tom",catImage);
  }


}
