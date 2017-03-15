"use strict";

class Block { // abstract
  constructor(id) {
    this.id = id;
    this.sprite = "../static/img/block/"+id+".png"
  }
}


module.exports.Free = class Free extends Block { // id: 0,1,2,3,4,5
  constructor(id) {
    super(id);
    this.walkable = true;
  }

  canAccess(character, level, position){
    return true;
  }
}


class Occupied extends Block { //abstract
  constructor(id) {
    super(id);
    this.walkable = false;
  }

  canAccess(character, level, position){
    return false;
  }
}


module.exports.Wall = class Wall extends Occupied { // id: 10..19 ?
  constructor(id) {
    super(id);
  }
}


module.exports.Key = class Key extends Block { // id: 20..28
  constructor(id) {
    super(id);
  }

  canAccess(character, level, position){
    character.addKey(this.id);
    level.freeBlockAt(position);
    return true;
  }
}


module.exports.Door = class Door extends Occupied { // id: 30..38
  constructor(id) {
    super(id);
  }

  canAccess(character, level, position){
    console.log(character._keys);
    if(character.usesKey(this.id - 10)){
      level.freeBlockAt(position);
      return true;
    }else{
      return false;
    }
  }
}
