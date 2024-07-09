
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var btn1;
var ground1;
var angle = 60;
var  fan, fan1, fan2, fan3;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn1 = createImg("up.png");
  btn1.position(20,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

ground1 = Bodies.rectangle(100,300,100,20, ground_options)
World.add(world,ground1);




  ground = Bodies.rectangle(100,400,600,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(120,10,20,ball_options);
  World.add(world,ball);
  
  fan = new Ground(50,370,50,30);
  fan1 = new Ground(150,370,50,30);
  fan2 = new Ground(250,370,50,30);
  fan3 = new Ground(350,370,50,30);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(ground1, angle);  

  push();
   translate(ground1.position.x, ground1.position.y);
  rotate(angle)
  rect(0, 0, 100, 20);
  pop();
  //angle = angle + 1
 angle +=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,600,20);
 
console.log(ground.position.y);
fan.show();
fan1.show();
fan2.show();
fan3.show();
  
  
}
function vForce(){
Matter.Body.applyForce(ball,{x:0, y:0}, {x:0,y:-0.05})

}
