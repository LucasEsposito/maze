"use strict";
let Position = require('./position.js'),
    Wall = require('./block.js').Wall;

function draw(){
  const IMAGE_SIZE = 32;
  let canvas,
      context;
  canvas = document.getElementById('gameScreen');
  if(canvas.getContext){
    context = canvas.getContext('2d');
    let img = new Image();
    //let wall = new Wall(10); //por alguna razon no puedo declarar nada aca que no sea propio del lenguaje.
    img.src = '/home/lucas/workspace/maze/static/img/block/10.png';
    //img.addEventListener('load', function(){}, false);
    //img.onload = function(){
    //drawImageAtPosition(img, 0,3, context);
      context.drawImage(img, 32, 0);



      context.drawImage(img, 64, 0);
    //};
  }else{

  }
}
