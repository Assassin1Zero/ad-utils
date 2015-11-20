var flashVersion = require('./lib/flash-detect'),
    frameUtils = require('./lib/frame-utils'),
    helper = require('./lib/helper'),
    dimensions = require('./lib/dimensions');

module.exports = {

    flashVersion: flashVersion,
    frame: frameUtils,
    helper: helper,
    dimensions: dimensions
};
