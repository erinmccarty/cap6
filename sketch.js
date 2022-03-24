let angle = 0;
let value = 0;

let cam;
let blob;
let blob2;
//let play1=true;
//let play2=false;
let skin1;
let skin2;



function preload(){
  skin1=loadImage('scan1txt.png');
  skin2=loadImage('scan2txt.png');
  
  blob=loadModel('scan1obj.obj');
  blob2=loadModel('scan2obj.obj');

}

function setup(){
  
  //cnv = createCanvas(600,400, WEBGL);
  //cnv.mouseClicked(changeGray);
  
  createCanvas(1920, 1080, WEBGL);
  
  cam=createCapture(VIDEO);
  cam.size(1920, 1080);
  cam.hide();
 
  
}




function modelSkin(){
  
//MODELONE
  push();
  translate(-400, 0, 0);
  ambientLight(255);
  scale(1000);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(skin1);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //MODELTWO
  push();
  translate(0, 0, 0);
  //ambientLight(255);
  scale(1200);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(skin2);
  textureMode(NORMAL);
  model(blob2);
  
  pop();
  
  
}


function modelCam(){
 
  //MODELONE
  push();
  translate(-400, 0, 0);
  ambientLight(255);
  scale(1000);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //MODELTWO
  push();
  translate(0, 0, 0);
  //ambientLight(255);
  scale(1200);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob2);
  
  pop();
  
}






function draw() {
  
  background(7, 18, 10);
  //background(0,255,255);
  
  /*
  push();
  fill(value);
  translate(-200, -50, 0);
  rect(25, 25, 50, 50);
  pop();
  */
  
  /*
  if (mouseIsPressed === true) {
    modelTwo();
  } else {
    modelOne();
  }
  */
  
  if (mouseIsPressed === true) {
    modelSkin();
    
  } else {
    modelCam();
  }
  

  
  
  
  

  
  
  
  
  
  
  
  /*
  //MODELONE
  push();
  translate(-100, 0, 0);
  ambientLight(255);
  scale(760);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //MODELTWO
  push();
  translate(100, 0, 0);
  //ambientLight(255);
  scale(470);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob2);
  
  pop();
  */
  
  
  angle += 0.6;
}


