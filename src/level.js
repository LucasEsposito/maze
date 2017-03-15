"use strict";
let createFree = require('./utils/blockFactory.js').createFree;

module.exports = class Level {
  constructor(){
    this.number = undefined;
    this.width = undefined;
    this.width = undefined;
    this.time = undefined;
    this.map = undefined;
  }

  /**
  * @param {String} position - the position as string: "x|y"
  */
  getBlockAt(position){
    return this.map.get(position);
  }

  move(character, position){
    position = position.toString();
    let newBlock = this.map.get(position);
    return newBlock.canAccess(character, this, position);
  }

  freeBlockAt(position){
    this.map.set(position, createFree());
  }
}
