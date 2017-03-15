"use strict";
let Free = require('./block.js').Free;

module.exports = class Level {
  constructor(){
    this.number = undefined;
    this.width = undefined;
    this.width = undefined;
    this.time = undefined;
    this.map = undefined;
  }

  move(character, position){
    position = position.toString();
    let newBlock = map.get(position);
    return newBlock.canAccess(character, this, position);
  }

  freeBlockAt(position){
    let x = new Free(0);
    this.map.set(position, x);
  }
}
