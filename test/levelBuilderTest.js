"use strict";
let build = require('../src/utils/levelBuilder.js'),
    Block = require('../src/block.js'),
    Position = require('../src/position.js'),
    Level = require('../src/level.js');
let assert = require('chai').assert;

function createExample_1(){
  return build(1,"/home/lucas/workspace/maze/test/resources/levels/example_1.json");
}

describe('Level Builder Suite', function(){
    let exampleLevel = createExample_1();

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
});
