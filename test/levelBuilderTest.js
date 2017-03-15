"use strict";
let build = require('../src/utils/levelBuilder.js'),
    Block = require('../src/block.js'),
    Position = require('../src/position.js'),
    Level = require('../src/level.js');
let assert = require('chai').assert;

describe('Level Builder Suite', function(){
    let exampleLevel = build(1,"/test/resources/levels/example_1.json");
    let firstPosition = Position.fromString(exampleLevel.map.keys().next().value);
    let blockAt_3_2 = exampleLevel.map.get("3|2");

    it('example_1 level number is ok', function(){
        assert.equal(exampleLevel.number,1);
    });

    it('example_1 width is ok', function(){
        assert.equal(exampleLevel.width,5);
    });

    it('example_1 height is ok', function(){
        assert.equal(exampleLevel.height,7);
    });

    it('example_1 blocks are ok', function(){
        assert.equal(exampleLevel.map.size,7*5);
    });

    it('example_1 time is ok', function(){
        assert.equal(exampleLevel.time,120);
    });

    it('first position: x == 0', function(){
        assert.equal(firstPosition.x,0);
    });

    it('first position: y == 0', function(){
        assert.equal(firstPosition.y,0);
    });

    it('position x=3, y=2 has block id 8', function(){
        assert.equal(blockAt_3_2,8);
    });
});
