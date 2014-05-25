// Dependencies
var Colors = require ("./colors");

/**
 *  Node Flat Colors
 *
 *  Convert any color to the nearest flat ui color.
 *
 * */
var FlatColors = module.exports = function (r, g, b) {

    var rgb = Array.isArray(r) ? r : [ r, g, b ]
      , best = null
      ;

    for (var i = 0; i < Colors.length; ++i) {
        var d = distance(Colors[i], rgb)
        if (!best || d <= best.distance) {
            best = { distance : d, index : i };
        }
    }

    return Colors[best.index];
};

function distance (a, b) {
    return Math.sqrt(
        Math.pow(a[0]-b[0], 2)
        + Math.pow(a[1]-b[1], 2)
        + Math.pow(a[2]-b[2], 2)
    )
}

FlatColors._colors = Colors;
