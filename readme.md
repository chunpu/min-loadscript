min-loadscript
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-loadscript.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-loadscript
[downloads-image]: http://img.shields.io/npm/dm/min-loadscript.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-loadscript
[david-image]: http://img.shields.io/david/chunpu/min-loadscript.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-loadscript


simple load script like ga

Installation
---

```sh
npm i min-loadscript
```

```js
var loadScript = require('min-loadscript')

loadScript('./some.js?time=__now__', function() {
	console.log('loaded')
})
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-loadscript.svg?style=flat-square
[license-url]: #
