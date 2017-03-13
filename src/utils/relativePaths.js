"use strict";
let fs = require('fs'),
    path = require('path');


module.exports = function relativeToAbsolutePath(relativePath){
  return path.join(__dirname, '..', '..', relativePath);
}
