```js
var loadScript = require('min-loadscript')

loadScript('./some.js?time=__now__', function() {
	console.log('loaded')
})
```
