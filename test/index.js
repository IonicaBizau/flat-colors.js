// Dependencies
var FlatColors = require("../lib")
  , Assert = require("assert")
  ;

// rgb
it("should support rgb", function (cb) {
    var red = FlatColors(255, 0, 0);
    Assert.deepEqual(red, FlatColors.colors[16]);
    cb();
});

// rgb array
it("should support rbg passed as array", function (cb) {
    var red = FlatColors([255, 0, 0]);
    Assert.deepEqual(red, FlatColors.colors[16]);
    cb();
});

// hex
it("should support hex input", function (cb) {
    var red = FlatColors("#f00");
    Assert.deepEqual(red, FlatColors.colors[16]);
    cb();
});

// colors
it("the colors field should contain the colors", function (cb) {
    Assert.equal(Array.isArray(FlatColors.colors), true);
    cb();
});
