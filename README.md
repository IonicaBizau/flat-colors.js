![](http://i.imgur.com/S57IeyN.png)

# `flatcolors`
Find the nearest flat color for a RGB/Hex input.

## Installation
```sh
$ npm install flatcolors
```

## Documentation
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

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
