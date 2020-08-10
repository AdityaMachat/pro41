var Engine = Matter.Engine,
     World = Matter.World,
     Events = Matter.Events,
   Bodies = Matter.Bodies;
var drops=[];
function setup(){
  createCanvas(200,400);
   var maxdrops=100;
   var umbrella =new Umbrella(100,380);
   for(var i=0;i<maxdrops;){
   drops.push(new Drop(random(0,400),random(0,400)));
   }
  
}

function draw(){
   background("0"); 
   umbrella.display();
  for(var i=0;i< drops.length; i++) {
     drops[i].display();
   }
}   

