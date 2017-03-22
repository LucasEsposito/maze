"use strict";
let fs = require('fs'),
    path = require('path');

Number.prototype.inClosedRange = function(x,y){
  let min = Math.min(x, y),
      max = Math.max(x, y);
  return this >= min && this <= max;
}

module.exports.relativeToAbsolutePath = function relativeToAbsolutePath(relativePath){
  return path.join(__dirname, '..', '..', relativePath);
}
