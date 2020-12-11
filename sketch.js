const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1,rectangle2,rectangle3;

var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);

	rectangle1 = createSprite(1100,650,200,20);
	rectangle1.shapeColor=color(225);

	rectangle2 = createSprite(1000,610,20,100);
	rectangle2.shapeColor=color(225);

	rectangle3 = createSprite(1200,610,20,100);
	rectangle3.shapeColor=color(225);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	

	Engine.run(engine);
  
}


function draw() {
   background(0);

  

  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

	}
}

