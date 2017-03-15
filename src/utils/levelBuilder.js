"use strict";
let fs = require('fs'),
    jsonString,
    Block = require('../block.js'),
    Position = require('../position.js'),
    Level = require('../level.js'),
    relativeToAbsolutePath = require('./relativePaths.js'),
    createBlock = require('./blockFactory').createBlock;



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

function jsonToLevel(levelNumber, relativePath=""){
  let absolutePath;
  if(relativePath!=""){
    absolutePath = relativeToAbsolutePath(relativePath);
  }else{
    absolutePath = relativeToAbsolutePath("../../static/levels/"+levelNumber+".json");
  }
  jsonString = JSON.parse(fs.readFileSync(absolutePath),"utf8");
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
      auxiliaryBlock,
      map = new Map(), // <Position.toString(), Block>
      block = blocks();
  for(let $index in block){
    auxiliaryPosition = auxiliaryPosition.next(width(),height());
    auxiliaryBlock = createBlock(block[$index]);
    map.set(auxiliaryPosition.toString(), auxiliaryBlock);
  }
  return map;
}
