var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	
	Engine.run(engine);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	//Create a Ground
	var ground_options={
		isStatic: true
	}

    ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options );//{isStatic:true} 
    World.add(world, ground);

	var package_options={
		//isStatic=false
		restitution:0.5
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);//{restitution:3, isStatic:true}
	World.add(world, packageBody);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyPressed()){}


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
	//Matter.Body.setVelocity(packageBody,position.y);
  } 
}




