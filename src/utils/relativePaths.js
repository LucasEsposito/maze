"use strict";
let fs = require('fs'),
    path = require('path');

/**
 * The parameter should be the relative path from the project folder.
 */
module.exports = function relativeToAbsolutePath(relativePath){
  return path.join(__dirname, '..', '..', relativePath);
}
