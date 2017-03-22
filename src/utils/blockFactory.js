"use strict";
let Free = require('../block.js').Free,
    Wall = require('../block.js').Wall,
    Key = require('../block.js').Key,
    Door = require('../block.js').Door,
    relativePath = require('./extensions.js');


module.exports.createBlock = function createBlock(id){
  switch(true){
    case id.inClosedRange(0, 4):
      return new Free(id);
    case id.inClosedRange(10, 19):
      return new Wall(id);
    case id.inClosedRange(20, 28):
      return new Key(id);
    case id.inClosedRange(30, 38):
      return new Door(id);
    case id.inClosedRange(40, 41):
    case id == 50:
    case id.inClosedRange(60, 62):
      throw "Block not implemented: id="+id;
      break;
    case id == 90:
    case id == 99:
      return new Free(0); //TODO: create Start block and End block.
    default:
      throw "Invalid block id: " + id + ".";
  }
}

module.exports.createFree = function createFree(){
  return new Free(0);
}
