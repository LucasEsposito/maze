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
  images[0]=new Image();
  images[0].src ='/home/lucas/workspace/maze/static/img/block/10.png';
  imageX[0]=0;
  imageY[0]=0;
  canvas = document.getElementById('gameScreen');
  if(canvas.getContext){
    context = canvas.getContext('2d');
    let img = new Image()
    //let wall = new Wall(10); //por alguna razon no puedo declarar nada aca que no sea propio del lenguaje.
    img.src = '/home/lucas/workspace/maze/static/img/block/10.png';
    //img.addEventListener('load', function(){}, false);
    //img.onload = function(){
    //drawImageAtPosition(img, 0,3, context);
      ///context.drawImage(img, 32, 0);

      /*
      */

      img.onload = function(){
        canvas = document.getElementById('gameScreen');
        context = canvas.getContext('2d');
        context.drawImage(img, 32, 0);};
      for(let $index in images){
        context.drawImage(images[$index], imageX[$index], imageY[$index]);
      }
      let x = {a:2};
      let y = x.a;


      context.drawImage(img, 64, 0);
    //};
  }else{

  }
}
