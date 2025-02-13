## Documentation

You can see below the API reference of this module.

### `FlatColors(r, g, b)`
Finds the nearest flat color for rgb and hex inputs.

#### Params

- **String|Number|Array|undefined** `r`: The color as string in hex format, the *red* value or the rgb passed as array. If `undefined`, a random color will be returned.
- **Number** `g`: The green value.
- **Number** `b`: The blue value.

#### Return
- **Array** An array containing the rgb values of the flat color which was found.

### `toRgb(hex)`
Converts a hex format color into rgb.

#### Params

- **String** `hex`: The color in the hex format.

#### Return
- **Array|null** The rgb array or null.

