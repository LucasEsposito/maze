"use strict";
let createFree = require('./utils/blockFactory.js').createFree;

module.exports = class Level {
  constructor(){
    this.number;
    this.width;
    this.height;
    this.map;
    this.time;
    this.isTimed;
  }

  /**
  * @param {String} position - position as string: "x|y"
  */
  getBlockAt(position){
    return this.map.get(position);
  }

  /**
  * @param {String} position - position as string: "x|y"
  */
  freeBlockAt(position){
    this.map.set(position, createFree());
  }

  allowMove(character, position){
    if(position.isValid(this.width, this.height)){
      position = position.toString();
      let newBlock = this.map.get(position);
      return newBlock.canAccess(character, this, position);
    }else{
      return false;
    }
  }
}
