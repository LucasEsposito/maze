"use strict";

function draw(){
  let canvas = document.getElementById('gameScreen'),
      context;
  if(canvas.getContext){
    context = canvas.getContext('2d');
    context.fillRect(25,25,100,100);
    context.clearRect(45,45,60,60);
    context.strokeRect(50,50,50,50);
  }else{

  }
}
