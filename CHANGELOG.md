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
