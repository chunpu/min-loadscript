module.exports = function loadScript(url, cb) {
	var doc = document
	var tag = 'script'

	var now = +new Date
	url = url.replace('__now__', now)

	var script = doc.createElement(tag)
	script.async = 1
	script.src = url

	if (cb) {
		script.onload = cb
	}

	var firstScript = doc.getElementsByTagName(tag)[0]
	firstScript.parentNode.insertBefore(script, firstScript)
}
