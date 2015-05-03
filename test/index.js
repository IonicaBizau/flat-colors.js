// Dependencies
var FlatColors = require("../lib")
  , Assert = require("assert")
  ;

// rgb
it("should support rgb", function (cb) {
    var red = FlatColors(255, 0, 0);
    Assert(red, [231, 76, 60]);
    cb();
});

// rgb array
it("should support rbg passed as array", function (cb) {
    var red = FlatColors([255, 0, 0]);
    Assert(red, [231, 76, 60]);
    cb();
});

// hex
it("should support hex input", function (cb) {
    var red = FlatColors("#f00");
    Assert(red, [231, 76, 60]);
    cb();
});
