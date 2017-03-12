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
    this.x < width ? this.toEast() : this.toSouth().resetX();
  }

  copy(){
    return new Position(this.x, this.y);
  }
}
