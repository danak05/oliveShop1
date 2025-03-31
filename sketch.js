let i1;
let i2
let i3;
let i4;
let i5;
let i6;

let state=0;

function preload(){
  i1=loadImage('01_NavBar.png');
  i2=loadImage('02_AdBanner.png');
  i3=loadImage('03_Product.png');
  i4=loadImage('04_GNB.png');
  i5=loadImage('05_ai_icon.png');
  i6=loadImage('06_green.png')
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  if(state==0){
    background(255);
  image(i1,0,0,393,128);
  image(i2,0,128,393,284);
  image(i3,0,412,393,440);
  image(i4,0,764,393,88);
  image(i5,320,688,60,60);
  }else if(state==1){
    background(255);
  image(i1,0,0,393,128);
  image(i2,0,128,393,284);
  image(i3,0,412,393,440);
  image(i4,0,764,393,88);
  image(i5,320,688,60,60);
  image(i6,0,612,393,152);
  }
  
  
}

function mouseClicked(){
  if(mouseX>=320&&mouseX<=380){
    if(mouseY>=688&&mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}