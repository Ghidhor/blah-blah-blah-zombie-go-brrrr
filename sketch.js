var helicopterIMG, helicopterSprite, packageSprite,packageIMG,backgroundIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background;
var wallSprite , wall2Sprite,portaltotheendSprite
var wallBody , wall2Body,portaltotheendBody
var humenSolder , humenimage
var zembie,zembieimege


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG= loadImage("download.jpg")
	humenimage = loadImage("fission_mailed.png")
	zembieimege = loadImage("mission_failed.png")
}

function setup() {
	createCanvas(800, 700);
	background(backgroundIMG)
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
    portaltotheendSprite = createSprite(width/2,height - 40 , 200 , 10)
	wallSprite = createSprite(width/2.5,height-70,10,100)
	humenSolder = createSprite(width/1.85,height - 80 , 10,80)
	humenSolder.addImage(humenimage)
	humenSolder.scale = 0.1
	wall2Sprite = createSprite(width/1.75,height - 70,10,100)
	engine = Engine.create();
	world = engine.world;
    zembie = createSprite(200,height - 80 , 10 ,80)
	zembie.addImage(zembieimege)
	zembie.scale = 0.1

	packageBody = Bodies.circle(width/2 , 250, 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
    
	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  background(backgroundIMG);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
    /* Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.shin godzilla go skreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */
	Matter.Body.setStatic(packageBody, false);
    
    helicopterSprite.velocityX = 5
    
  }
}



