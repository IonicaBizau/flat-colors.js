
[![flat-colors](http://i.imgur.com/S57IeyN.png)](#)

# flat-colors

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/flat-colors.js.svg)](https://travis-ci.org/IonicaBizau/flat-colors.js/) [![Version](https://img.shields.io/npm/v/flat-colors.svg)](https://www.npmjs.com/package/flat-colors) [![Downloads](https://img.shields.io/npm/dt/flat-colors.svg)](https://www.npmjs.com/package/flat-colors) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Find the nearest flat color for a RGB/Hex input.

## :cloud: Installation

```sh
$ npm i --save flat-colors
```


## :clipboard: Example



```js
// Dependencies
var FlatColors = require("flat-colors")

// Get the flat red
console.log(FlatColors(255, 0, 0));
// => [211, 84, 0]

// Same thing, but using a rgb array
console.log(FlatColors([255, 0, 0]));
// => [211, 84, 0]


// Still same color but using hex color
console.log(FlatColors("#f00"));
// => [211, 84, 0]

// Random flat color
console.log(FlatColors());
// => [?, ?, ?]
```

## :memo: Documentation


### `FlatColors(r, g, b)`
Finds the nearest flat color for rgb and hex inputs.

#### Params
- **String|Number|Array** `r`: The color as string in hex format, the *red* value or the rgb passed as array. If `undefined`, a random color will be returned.
- **Number** `g`: The green value.
- **Number** `b`: The blue value.

#### Return
- **Array** An array containing the rgb values of the flat color which was found.

### `toRgb(hex)`
Converts a hex format color into rgb.

#### Params
- **String** `hex`: The color in the hex format.

#### Return
- **Array** The rgb array or null.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :cake: Thanks
The color values are taken from [flatuicolors.com](http://flatuicolors.com). :art:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`cli-confeti`](https://github.com/IonicaBizau/cli-confeti#readme)—Confeti in your terminal.
 - [`color-it`](https://github.com/IonicaBizau/node-color-it#readme)—Flat colors for your Node.js strings.
 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`flat-colors-groupped`](https://github.com/IonicaBizau/flat-colors-groupped#readme)—Groupped flat colors by their range.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
