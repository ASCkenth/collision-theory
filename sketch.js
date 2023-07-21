let Xpos=100,Ypos=100;
let enemyX=100;enemyY=100;
let redL,redR,redT,redB;
let eL,eR,eT,eB;

function setup() {
    createCanvas(500, 500);
    noStroke();
 
 
    rectMode(CENTER);
 }
 
 
 function draw() {
    background(0);
    fill(0,0,255);
    rect(enemyX,enemyY,50,50);

    fill(255,0,0);
    rect(Xpos,Ypos,50,50);
    if(keyIsDown(LEFT_ARROW))   Xpos-=3;
    if(keyIsDown(RIGHT_ARROW))  Xpos+=3;
    if(keyIsDown(UP_ARROW)) Ypos-=3;
    if(keyIsDown(DOWN_ARROW))   Ypos+=3;

    redL=Xpos-25;
    redR=Xpos+25;
    redT=Ypos-25;
    redB=Ypos+25;

    eL=enemyX-25;
    eR=enemyX+25;
    eT=enemyY-25;
    eB=enemyY+25;

    if(redL>eR||redR<eL||redT>eB||redB<eT){
//no collision
    }else{
        fill(random(255),random(255),random(255));
        textSize(20);
        text("collision",140,400);
    }
    text(redL+" "+eR,250,400);
 }
 