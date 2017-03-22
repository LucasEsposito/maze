"use strict";
let Level = require('./level.js');

module.exports = class Character {
  constructor(startPosition) {
    this._keys = [0,0,0,0,0,0,0,0,0,0] // length = 10
    this.position = startPosition;
  }

  addKey(id){
    this._keys[id-20]++;
  }

  removeKey(id){
    this._keys[id-20]--;
  }

  usesKey(id){
    if(this._keys[id-20] > 0){
      this.removeKey(id);
      return true;
    }else{
      return false;
    }
  }

  move(position){
    if(level.allowMove(this,position)){
      this.position = position;
    }
  }

  // TODO
  setControls(){
    $(document).keypress( function(e){
      var k = e.keyCode || e.which;
      switch(k){
        case 119: //W
          break;
        case 100: //D
          break;
        case 115: //S
          break;
        case 97: //A
          break;
      }
    });
  }
}
