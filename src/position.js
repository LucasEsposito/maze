"use strict";

module.exports = class Position {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  toNorth(){
    this.y++;
  }

  toSouth(){
    this.y--;
  }

  toWest(){
    this.x--;
  }

  toEast(){
    this.x++;
  }

  resetX(){
    this.x = 0;
  }

  resetY(){
    this.y = 0;
  }

  next(width, height){
    return new Position(this.x < width ? this.x+1 : 0, this.x < width ? this.y : this.y+1);
  }
}
