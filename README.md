# evrythng-scan.js

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Getting started

### Install evrythng-scan.js using npm.

```javascript
npm install evrythng-scan
```

Then require it into any module.

```javascript
const EVT = require('evrythng')
const EVTScan = require('evrythng-scan')

EVT.use(EVTScan)

/* ... Init app using EVT.js ... */

app.scan().then(match => {
  app.redirect(match.redirections[0].redirectUrl)
})
```

### Browser

To use evrythng-scan from a browser, download `dist/evrythng-scan.min.js` or use a CDN such as CDNJS or jsDelivr.

Then, add it as a script tag to your page:

```html
<script src="evrythng.min.js"></script>
<script src="evrythng-scan.min.js"></script>
<script>
    EVT.use(EVTScan)

    /* ... Init app using EVT.js ... */

    app.scan().then(match => {
      app.redirect(match.redirections[0].redirectUrl)
    })
</script>
```

Or use an AMD loader (such as RequireJS):

```javascript
require(['./evrythng.min.js', './evrythng-scan.min.js'], (EVT, EVTScan) => {
    EVT.use(EVTScan)

    /* ... Init app using EVT.js ... */

    app.scan().then(match => {
      app.redirect(match.redirections[0].redirectUrl)
    })
})
```

If you're using browserify, the `evrythng-scan` npm module also works from the browser.