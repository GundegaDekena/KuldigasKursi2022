console.log("Hello");
let x=10;

let y=140;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  //fons
  background("skyblue"); 
  
  //saule
  fill('yellow');
  noStroke();
  ellipse(x,y,80,80);
  
  if (x<640){
    x +=1;
  }
  else{
    x=-20;
  }
  
  
  
  
  
  if(x<290){
    x +=1;// x vērtībai pieskaita viens
   y +=-0.5;
  }
  else if(x<680){
   x +=1;// x vērtībai pieskaita viens
   y +=0.5;
     }
  else{
    x=-40;
  }
  //teksts
  stroke("brown");
  strokeWeight(2);
  textSize(32);
  text("Saulespuķe!", 70, 70);
  //zāle
  fill ("lightgreen"); //krāsu raksta pirms figūras
  noStroke(); //noņem līniju
  rect(0, 355,640,125);
  //kāts
  stroke("green");
  strokeWeight(10);
  line(300, 150, 300, 430);
  //lapas
  fill("green");
  triangle(450, 200, 300, 300, 300, 380);
  triangle(150, 170, 300, 280, 300, 350);
  //zieds
  noStroke();
  fill("gold");
  ellipse (300, 150, 150, 150);
  //zieda vidus
  stroke("brown"); //punktam norāda līnijas krāsu
  strokeWeight(70); //līnijas biezums
  point(300, 150);
}