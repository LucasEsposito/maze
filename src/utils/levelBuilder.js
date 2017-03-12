"use strict";
let fs = require('fs'),
    jsonString,
    block = require('../block.js'),
    position = require('../position.js'),
    level = require('../level.js');


module.exports = function make(levelNumber){
  let level = new Level();
  level.number = levelNumber;
  level.width = width();
  level.width = height();
  level.time = time();
  level.map = map();
  return level;
}



function jsonLevel(levelNumber){
  jsonString = JSON.parse(fs.readFileSync("./levels/"+levelNumber+".json"),"utf8");
}

function number(){
  return jsonString.levelNumber;
}

function width(){
  return jsonString.width;
}

function height(){
  return jsonString.height;
}

function blocks(){
  return jsonString.blocks;
}

function time(){
  return jsonString.time;
}

function map(){
  let auxiliaryPosition = new Position(-1,0);
      map = new Map(); //<Position, Block>
  for(block in blocks()){
    map.put(auxiliaryPosition.next( width(), height() ).copy(),
            block);
  }
}
