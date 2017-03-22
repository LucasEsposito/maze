"use strict";
let Level = require('./level.js');

module.exports = class Character {
  constructor(startPosition) {
    this._keys = [0,0,0,0,0,0,0,0,0,0]
    this.position = startPosition;
  }

  addKey(id){
    this._keys[id-20]++;
  }

  removeKey(id){
    this._keys[id-20]--;
  }

  usesKey(id){
    console.log("rrrrrrrrrrrrrrrr");
    if(this._keys[id-20] > 0){
      this.removeKey(id);
      return true;
    }else{
      return false;
    }
  }

  move(position){
    if(level.move(this,position)){
      this.position = position;
    }
  }
}
