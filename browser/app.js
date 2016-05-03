var loadScript = require('../')

loadScript('./some.js?time=__now__', function() {
	console.log('loaded')
})
