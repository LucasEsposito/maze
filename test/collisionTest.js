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
        door31,
        wall,
        free,
        juanCanAccess20,
        juanCanAccess21;

    beforeEach(function(){
      level = build(1,"/test/resources/levels/example_1.json");
      juan = new Character(new Position(0,0));
      key20 = level.getBlockAt("4|0");
      key21 = level.getBlockAt("4|1");
      door31 = level.getBlockAt("0|5");
      wall = level.getBlockAt("1|0");
      free = level.getBlockAt("1|1");
      juanCanAccess20 = key20.canAccess(juan, level, new Position(4,0));
      juanCanAccess21 = key21.canAccess(juan,level, new Position(4,1));
    });

    it('Characters can\'t acces to walls', function(){
      assert(!wall.canAccess(juan, level, new Position("1|0")));
    });

    it('Characters can acces to Keys', function(){
      assert(juanCanAccess21);
    });

    it('Characters can acces to free blocks', function(){
      assert(free.canAccess(juan, level, new Position("1|1")));
    });

    it('Keys are counted after colliding', function(){
      assert.equal(juan._keys[1],1);
    });

    it('The character loses a key when he opens a door', function(){
      door31.canAccess(juan, level, new Position("0|5"));
      assert.equal(juan._keys[1],0);
    });

    it('The character can open doors if he have keys', function(){
      assert(door31.canAccess(juan, level, new Position("0|5")));
    });

    it('The character can\'t open doors if he doesn\'t have keys', function(){
      juan._keys[1] = 0;
      assert(!door31.canAccess(juan, level, new Position("0|5")));
    });
});
