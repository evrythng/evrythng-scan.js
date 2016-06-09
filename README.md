# EVRYTHNG-SCAN.JS (plugin for EVT.js)

**evrythng-scan.js** is an extension plugin to be used with [evrythng.js](https://github.com/evrythng/evrythng.js) or 
[evrythng-extended.js](https://github.com/evrythng/evrythng-extended.js) JS libraries.

It lets you identify EVRYTHNG Products and Thngs directly from any Web Application. By using a blend of cutting-edge 
HTML5 and our backend product recognition service, it allows a (mobile) browser to take a `picture` of an object, 
a `QR code` or a `barcode` and recognize them as [EVRYTHNG Products or Thngs](https://dashboard.evrythng.com).

## Setting your Thngs and Products to work with evrythng-scan.js

### Prerequisites

Before using the Product Recognition service you'll need:

- [An EVRYTHNG developer account](https://dashboard.evrythng.com)
- Create a Project and an Application in your Account
- Create a Web Application and initialize your EVRYTHNG App with [evrythng.js](https://github.com/evrythng/evrythng.js)

### Supported Devices

The following mobile browsers are currently supported by **evrythng-scan.js**:

- Android 3.0+ browser
- Chrome for Android 0.16+
- iOS version 6+
- Firefox Mobile 10.0+
- IE 10+

### Using QR codes

QR codes can be used to identify both Products and Thngs (i.e.: unique instances of Products). To enable this 
all you need to do is to create a Thng or a Product (via our API or Dashboard) and setup a 
[Redirection](https://dashboard.evrythng.com/developers/apidoc/redirections). 
This basically creates a short identity for your object and stores it directly in a QR code.

### Using 1D barcodes

Usually a 1D barcode identifies a type of product (aka SKU) and not an instance. However, the EVRYTHNG engine 
supports identifying both Thngs and Products based on 1D barcodes.

To enable this, you need to add an Identifier to your Thng or Product (via our API or Dashboard). In the
 Dashboard, `Name` must match the type of barcode you want to read, currently we support the following types:
 
- `ean_13`
- `ean_8`
- `upc_8`
- `upc_13`

The `Value` field must match the full number on the barcode, e.g.: 3057640100178.

### Using Image Recognition

Image recognition allows you to recognize Products simply by taking a picture of the product itself. 
Unlike 1D and QR code recognition, image recognition is not enabled as a default in your account and requires 
a Premium account. [Contact us to enable it for your account](https://evrythng.com/contact-us/).

If you do have this feature enabled, you can activate image recognition for any Product through the dashboard by 
clicking on "Setup image recognition" on the Product page and upload your reference images.

Read more about [Image Recognition Documentation](https://dashboard.evrythng.com/developers/quickstart/image-recognition).


## Installation

### Browser

##### With [Bower](http://bower.io/)

    bower install evrythng-scan --save
    
The Bower package is [AMD](http://requirejs.org/docs/whyamd.html)-compatible. This means you can load 
it asynchronously using tools like [Require.js](http://requirejs.org/) or simply dropping the script tag 
into your HTML page:

    <script src="bower_components/evrythng-scan/dist/evrythng-scan.min.js"></script>

See [Usage](#usage) below for more details.

##### Load from CDN

Add the script tag into your HTML page:

    <script src="//cdn.evrythng.net/toolkit/evrythng-js-sdk/evrythng-scan-1.1.0.min.js"></script>
 
Or always get the last release:

    <script src="//cdn.evrythng.net/toolkit/evrythng-js-sdk/evrythng-scan.min.js"></script>
    
For HTTPS you need to use:

    <script src="//d10ka0m22z5ju5.cloudfront.net/toolkit/evrythng-js-sdk/evrythng-scan-1.1.0.min.js"></script>
    <script src="//d10ka0m22z5ju5.cloudfront.net/toolkit/evrythng-js-sdk/evrythng-scan.min.js"></script>

## Usage

#### RequireJS (AMD)

```javascript
requirejs.config({
    paths: {
        'evrythng': '../bower_components/evrythng/dist/evrythng',
        'evrythng-scan': '../bower_components/evrythng-scan/dist/evrythng-scan'
    }
});
    
require(['evrythng', 'evrythng-scan'], function (EVT, Scan) {

  EVT.use(Scan);
  ...
  
});
```

#### Globals

```javascript
// The plugin is attached as EVT.Scan
EVT.use(EVT.Scan);
...
```

## Examples

#### General

```javascript
var app = new EVT.App(APP_API_KEY);

// Setup global settings - see more below
Scan.setup({
  type: 'objpic'
});

// app now has a .scan() method that will open up the file browser or image capture
// process it to ensure best results and will send a recognition request to the [API](https://dashboard.evrythng.com/developers/apidoc/product-recognition)

// Promise API
app.scan().then(function(result) {
  // Do something on success
}, function(error) {
  // Do something on error
});

// Callback API
app.scan({}, function(result) {
  // success callback
}, function(error) {
  // error callback
});

// One-off settings
app.scan({
  redirect: false,
  threshold: 25
}).then(...);

// Process base64 image if you already have it (does not launch image capture)
app.scan('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...').then(...);

...
```

**Note: Due to browser limitations, the `scan` method without supplied image data must be called as a result of 
a user action - a click event handler or similar. E.g.:**

```javascript
document.querySelector('#scan').addEventListener('click', function() {
  app.scan().then(...);
});

// jQuery
$('#scan').on('click', function() {
  app.scan().then(...);
});
```

## Options

#### type
Type: `String` Default: `qrcode`

Indicates the type of image that the user is supposed to be scanning. Accepts a string with any of the 
following values: `qrcode`, `1dbarcode` or `objpic`. `objpic` is the option to indicate for scanning product labels.

#### redirect
Type: `Boolean` Default: `true`

Indicates whether the library should automatically redirect user to the redirection URL associated with 
the scanned Thng or Product. This URL can be set in the [dashboard](https://dashboard.evrythng.com) on any Product 
or Thng page. If you have permissions to the Redirector, you can also set custom redirection rules.

#### threshold
Type: `Integer` Default: `0` Range: `0..99`

If `type` is set to `objpic`, you can set an additional parameter to decide whether you want the response to contain only the best result or a list of matching results ordered by descending score (which is a percentage).
The value specified in the `threshold` parameter is used to specify what deviation from the strongest score other items may be within in order to be included in the response.

Example: image recognition resulted in three matches:

* Product_1, score: 80
* Product_2, score: 70
* Product_3, score: 50
* Product_4, score: 10

Depending on the `threshold` value, the output of identify() will be different:
* `threshold = 0` will return a single match, `Product1` object
* `threshold = 5` will return a list with only the first match: [`Product1`]
* `threshold = 10` will return a list of matches in the `data` field: `[ Product1, Product2 ]`
* `threshold = 50` will return a list of matches in the `data` field: `[ Product1, Product2, Product3 ]`

**Note: Setting this option to a positive value will disable automatic redirection and creating scan action if 
more than one match was found.**

#### timeout
Type: `Integer` Default: `10000`

Sets the timeout for AJAX calls and geolocation, in ms.

#### imageConversion

```javascript
imageConversion : {
  greyscale: Boolean,
  resizeTo: Integer
}
```
    
##### imageConversion.greyscale
Type: `Boolean` Default: `true`
    
Indicates whether the library should send a black and white version of the scanned image for identification.
If you do not need to distinguish similar images with different colors, this yields better and faster results.

##### imageConversion.resizeTo
Type: `Integer` Default: `240` Range: `144..`
    
Sets the maximum *smaller* dimension of the image (in pixels, automatically resized) to be sent to the server 
for recognition. The best trade-off between speed and quality is currently around 240.

#### spinner

*evrythng-scan.js** uses [spin.js](http://fgnass.github.io/spin.js/) library to display a configurable spinner
while processing the scan recognition.

```javascript
spinner: {
  enabled: true,
  appendTo: document.getElementsByTagName('body')[0],
  options: {
    length: 30,
    radius: 48,
    hwaccel: true
  }
}
```

##### spinner.enabled
Type: `Boolean` Default: `true`

Indicates whether to display the built-in spinner. Set to `false` to disable it.

##### spinner.appendTo
Type: `DOM Element` Default: `document.getElementsByTagName('body')[0]`

Reference to DOM element our spinner will be attached to. If invalid or null, spinner will be attached to the body.

##### spinner.options
Type: `Object` Default: `{ length: 30, radius: 48, hwaccel: true }`

Spinner options as described in [`spin.js` documentation](http://fgnass.github.io/spin.js/).

#### createAnonymousUser
Type: `Boolean` Default: `false`

If enabled, **evrythng-scan.js** will try to create an Anonymous User and save it in local storage 
(falling back to cookies) for subsequent requests. For convenience, this User will be added to the 
output of the `scan()` method. In these scenarios, the item recognized is also converted into a resource. E.g.:

```javascript
app.scan({
  createAnonymousUser: true
}).then(function(result) {
  console.log(result.user);
  console.log(result.product);
  
  return result.product.property().read();
});
```

The most common use case for this is easily tracking users from the beginning, by device, without forcing 
them to create an account or login with Facebook in our "experience" app. Obviously, Anonymous Users are 
not as "valuable" as full App Users, because we don't store their personal details, but in some situations 
that's good enough.

#### createScanAction
Type: `Boolean` Default: `false`

If enabled, **evrythng-scan.js** will try to create a Scan Action after identifying the Thng or Product. 
It uses `EVT.settings.geolocation` to decide whether to ask for device location. If user allows this, 
the precise location will be recorded in this Action, otherwise the Engine will guess a broad location from IP.

If this Scan Action triggered any Reactor rules, the reactions will be added to the output of the `scan()` method.
Now, if one of those reactions was a redirection and the `redirect` option is set, **evrythng-scan.js** will 
redirect the user to URL defined in the reaction instead of the default one.

**Note: if there are more than 1 match, the scan is not performed. See [threshold](#threshold) option.**

---

## Documentation

Check the [Image Recognition Quickstart guide](https://dashboard.evrythng.com/developers/quickstart/image-recognition) 
and the [Product Recognition Service API](https://dashboard.evrythng.com/developers/apidoc/product-recognition).

## Related tools

#### evrythng.js

[`evrythng.js`](https://github.com/evrythng/evrythng.js) is the core version of *evrythng.js* intended to be used in 
public applications and/or devices.

#### evrythng-extended.js

[`evrythng-extended.js`](https://github.com/evrythng/evrythng-extended.js) is an extended version of *evrythng.js* which 
includes Operator access to the API.
