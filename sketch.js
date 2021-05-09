var canvas;
var music;
var b1,b2,b3,b4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,580,220,30);
b2=createSprite(200,580,220,30);
b3=createSprite(500,580,220,30);
b4=createSprite(700,580,220,30);


b1.shapeColor="yellow";
b2.shapeColor="blue";
b3.shapeColor="green";
b4.shapeColor="orange";


    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40);
box.shapeColor="white";
box.velocityX=5;
box.velocityY=10;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(b1.isTouching(box)&&box.bounceOff(b1)){
box.shapeColor="yellow";
music.play();
}
if(b2.isTouching(box)){
    box.shapeColor="blue";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
    }
    if(b3.isTouching(box)&&box.bounceOff(b3)){
        box.shapeColor="green";
        music.play();
        }
        if(b4.isTouching(box)&&box.bounceOff(b4)){
            box.shapeColor="orange";
            music.play();
            }
            drawSprites();
}
