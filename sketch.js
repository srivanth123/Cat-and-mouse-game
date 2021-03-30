var cat
var mouse
var bg
function preload() {
   catImg=loadAnimation("images/cat1.png")
mouseImg=loadAnimation("images/mouse1.png")
bgImg=loadImage("images/garden.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
catImg3=loadAnimation("images/cat4.png")
mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,1000);

    bg=createSprite(30,300,1000,1000)
bg.addImage(bgImg)


    cat=createSprite(450,580,200,20)
    cat.addAnimation("running",catImg)
    cat.scale=0.09

    mouse=createSprite(75,575,160,50)
    mouse.addAnimation("running",mouseImg)
  mouse.scale=0.09

  

}

function draw() {

    background("white");
    
   if(keyDown(LEFT_ARROW)){
    cat.addAnimation("running",catImg2)
    cat.velocityX=-2

    mouse.addAnimation("running",mouseImg2)
   }

   if(cat.isTouching(mouse)){

mouse.addAnimation("running",mouseImg3)
cat.addAnimation("running",catImg3)
cat.velocityX=0
   }
   
  

    drawSprites();
}


function keyPressed(){

  


}
