"use strict";
let Position = require('./position.js'),
    Wall = require('./block.js').Wall,
    Level = require('./level.js');


let images = [],
  imageX = [],
  imageY = [];

function draw(){
  const IMAGE_SIZE = 32;
  let canvas,
      context,
      auxiliaryPosition;

  // for(var [key, value] of map){
  //   images[countResources] = new Imgage();
  //   images[countResources].src = value.spritePath();
  //   auxiliaryPosition = Position.fromString(key);
  //   imageX[countResources] = auxiliaryPosition.x;
  //   imageY[countResources] = auxiliaryPosition.y;
  //   countResources++;
  // }
  // images[0]=new Image();
  // images[0].src ='/home/lucas/workspace/maze/static/img/block/10.png';
  // imageX[0]=0;
  // imageY[0]=0;
  canvas = document.getElementById('gameScreen');
  if(canvas.getContext){
    context = canvas.getContext('2d');
    for(let i = 0; i < canvas.width/IMAGE_SIZE; i++){
      for(let j = 0; j < canvas.height/IMAGE_SIZE; j++){
        drawNewImageAt('/home/lucas/workspace/maze/static/img/block/10.png',i,j);
      }
    }
  }else{
    alert("Canvas not supported!");
  }
}

function drawNewImageAt(src,x,y){
  drawImageAt(createImage(src),x,y);
}

function createImage(src){
  let image = new Image();
  image.src = src;
  return image;
}

function drawImageAt(image, x,y){
  let canvas = document.getElementById('gameScreen');
  let context = canvas.getContext('2d');
  context.beginPath();
  context.drawImage(image, x*32, y*32);
  context.closePath();
}
