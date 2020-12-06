var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;

var particle;

var turn = 0;

PLAY=1;
END=0;
gameState=PLAY;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }  
}

function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
    fill("white");
    text("SCORE: " + score, 10, 35);

    textSize(20);
    fill("white");
    text("500", 22, 545);

    textSize(20);
    fill("white");
    text("500", 102, 545);

    textSize(20);
    fill("white");
    text("500", 182, 545);

    textSize(20);
    fill("white");
    text("500", 262, 545);

    textSize(20);
    fill("white");
    text("100", 342, 545);

    textSize(20);
    fill("white");
    text("100", 422, 545);

    textSize(20);
    fill("white");
    text("100", 502, 545);

    textSize(20);
    fill("white");
    text("200", 582, 545);

    textSize(20);
    fill("white");
    text("200", 662, 545);

    textSize(20);
    fill("white");
    text("200", 742, 545);

    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>760)
      {
        if(particle.body.position.x<300)
        {
          score=score+500;
          particle=null;
          if(turn>=5) gameState = "end";
        }
        
      }
    }

    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>760)
      {
        if(particle.body.position.x<600 && particle.body.position.x>301)
        {
          score=score+100;
          particle=null;
          if(turn>=5) gameState = "end";
        }
        
      }
    }

    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>760)
      {
        if(particle.body.position.x<900 && particle.body.position.x>601)
        {
          score=score+200;
          particle=null;
          if(turn>=5) gameState = "end";
        }
        
      }
    }

    if(gameState=="end"){
      textSize(50);
    fill("white");
    text("GAME OVER", 250, 240);
    }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
//     particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}