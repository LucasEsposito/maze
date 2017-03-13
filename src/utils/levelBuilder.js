"use strict";
let fs = require('fs'),
    jsonString,
    Block = require('../block.js'),
    Position = require('../position.js'),
    Level = require('../level.js');



module.exports = function build(levelNumber, path = ""){
  jsonToLevel(levelNumber, path);
  return makeLevel(levelNumber);
}


function makeLevel(levelNumber){
  let level = new Level();
  level.number = levelNumber;
  level.width = width();
  level.height = height();
  level.time = time();
  level.map = map();
  return level;
}

function jsonToLevel(levelNumber, path){ //if path=="" create one based on levelNumber
  jsonString = JSON.parse(fs.readFileSync(!!path ? path : "./levels/"+levelNumber+".json"),"utf8");
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
  let auxiliaryPosition = new Position(-1,0),
      map = new Map(); //<Position, Block>
  for(let block_ in blocks()){
    auxiliaryPosition = auxiliaryPosition.next(width(),height());
    map.set(auxiliaryPosition, block_);
  }
  return map;
}
