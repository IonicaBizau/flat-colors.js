node-flatcolors
===============

A collection of flat UI colors inspired from this website http://flatuicolors.com/
This library exports a function that accept three parameters (r, g, b colors). It returns the nearest flat color for rgb inputs.

## How to use

```js
var FlatColors = require("flatcolors");
console.log(Flatcolors(255, 0, 0));
// outputs: [ 211, 84, 0 ]
```

## License
See the LICENSE file.
