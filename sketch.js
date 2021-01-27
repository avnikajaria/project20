var gaden, cat, mouse;//setup 
var gardenImage, catImage1,catImage2, mouseImage;//preload

function preload() {
    gardenImage=loadImage("images/garden.png");
    catImage1=loadImage("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage=loadImage("images/mouse1.png");
    
    
    }
    
    function setup(){
        createCanvas(1000,800);
        //create tom and jerry sprites here
        cat = createSprite(850,700,10,10);
        cat.addImage("catSitting",catImage1);
        cat.scale = 0.1;

        mouse = createSprite(200,680,10,10);
        mouse.addImage("mouseSitting",mouseImage);
        mouse.scale = 0.1;

    }
    
    function draw() {
    
        background(gardenImage);
        //Write condition here to evalute if tom and jerry collide
    
        if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        
    }
        drawSprites();
    }
    
    
    function keyPressed(){
    
      //For moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
          cat.velocityX = -5;
          cat.addAnimation("catRunning",catImage2);
          cat.changeAnimation("catRunning");
      }
    }