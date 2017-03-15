"use strict";
let assert = require('chai').assert;
let build = require('../src/utils/levelBuilder.js'),
    Position = require('../src/position.js'),
    Character = require('../src/character.js'),
    Free = require('../src/block.js').Free,
    Wall = require('../src/block.js').Wall,
    Key = require('../src/block.js').Key,
    Door = require('../src/block.js').Door;






describe('Block Suite', function(){
    let level,
        juan,
        key20,
        key21,
        juanCanAccess20,
        juanCanAccess21;


    beforeEach(function(){
      level = build(1,"/test/resources/levels/example_1.json");
      juan = new Character(new Position(0,0));
      key20 = level.getBlockAt("4|0");
      key21 = level.getBlockAt("4|1");
      juan.addKey(20);
      juanCanAccess20 = key20.canAccess(juan, level, new Position(4,0)),
      juanCanAccess21 = key21.canAccess(juan,level, new Position(4,1));
    });

    it('A key turns into a normal free block after pick up', function(){
        assert(juanCanAccess20);
              console.log(juan._keys);
    });

    it('A key turns into a normal free block after pick up', function(){
        assert(!juanCanAccess21); //TODO: fix bug!
              console.log(juan._keys);
    });
});
