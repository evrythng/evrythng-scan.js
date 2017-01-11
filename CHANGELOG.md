# v2.0.0 (11-01-2017)

## Breaking changes

- **implicitScans**: `implicitScans` are not created automatically when scanning an image.
- **Options**: `type`, `timeout`, `threshold`, `redirect`, `createScanAction` and `spinner` options have been removed.
See [README](https://github.com/evrythng/evrythng-scan.js#spinner) for more information on how to use custom spinner.

## Features
- **Options**: Use `filter` option to filter out results based on `method` and `type`
```
app.scan({
  filter: {
    type: 'image'
  }
});
```
- **Options**: Use `debug` option to include debug information in response.
- **Options**: Use `perPage` option to specify max number of matches in response.
- **identify**: `.identify` method is now available on the app and allows to get Thng/product infromation
associated with provided value:
```
app.identify({
  filter: {
    type: 'text',
    value: 'value'
  }
});
```
- **redirect**: Redirect to url provided `app.redirect('https://evrythng.com')`

# v1.2.3 (20-10-2016)

## Bug fixes

- **Image resize**: send larger images when using `qrcode`, `1dbarcode`, `datamatrix` and `autodetect` types.
- **Timing**: Adds timing and type information to the created scan action.

# v1.2.2 (16-09-2016)

## Bug fixes

- **Options**: Send `threshold` param to server regardless of recognition type.

# v1.2.1 (15-09-2016)

## Bug fixes

- **Prepare options**: Allow to specify imageConversion options on setup.

# v1.2.0 (20-07-2016)

## Features

- **Options**: Supports new scanning engine. Added additional scan types `datamatrix` and `autodetect`.

## Bug fixes

- **Format**: Convert image to same format as the original file.

# v1.1.0 (09-06-2016)

## Changes

- **Scan plugin**: When `createScanAction` option is set, we return the `redirectionContext` and 
                   `redirectUrl` found in the _reaction_ of the created _scan_ action are
                   in the payload top level. It potentially overrides value obtained
                   from the _redirection_.

# v1.0.1 (05-09-2015)

## Bug fixes

- **Prepare options**: fixed bug when trying to process image without custom prepare options.

# v1.0.0 (18-08-2015)

## Features

- **Scan**: _Scanthng.js_ was converted to a plugin. This adds Product Recognition capabilities to any EVRYTHNG App.
