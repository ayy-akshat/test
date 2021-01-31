const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2;
var ground1;
var wall1, wall2;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(400, 400, 50, 50);
  box2 = new Box(350, 0, 100, 50);

  ground1 = new Ground(400, 750, 800, 100);

  wall1 = new Ground(790, 400, 20, 800);
  wall2 = new Ground(10, 400, 20, 800);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground1.display();
  wall1.display();
  wall2.display();
  box1.display();
  box2.display();
}