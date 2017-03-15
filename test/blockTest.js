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
    let level = build(1,"/test/resources/levels/example_1.json");
    let juan = new Character(new Position(0,0));
    juan.addKey(20);
    console.log(juan);
    let juanCanAccess20 = key20.canAccess(juan, level, new Position(4,0)),
        juanCanAccess21 = key21.canAccess(juan,level, new Position(4,1));

    it('A key turns into a normal free block after pick up', function(){
        assert(1==1); //TODO: add real tests
    });
});
