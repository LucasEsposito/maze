"use strict";

module.exports = class Position {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  static fromString(string){
    let splited = string.split("|");
    return new Position(splited[0],splited[1]);
  }


  toString(){
    return String(this.x)+'|'+String(this.y);
  }

  next(width, height){
    return new Position(this.x < width-1 ? this.x+1 : 0, this.x < width-1 ? this.y : this.y+1);
  }
}
