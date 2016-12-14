# evrythng-scan.js

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

Getting started

Install immutable using npm.

npm install immutable
Then require it into any module.

var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
Browser

To use immutable from a browser, download dist/immutable.min.js or use a CDN such as CDNJS or jsDelivr.

Then, add it as a script tag to your page:

<script src="immutable.min.js"></script>
<script>
    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
</script>
Or use an AMD loader (such as RequireJS):

require(['./immutable.min.js'], function (Immutable) {
    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
});
If you're using browserify, the immutable npm module also works from the browser.