var morgan = require('morgan')

morgan.token('body',(req) =>req.body )

const logger = (tokens, req, res) => {
	return [
	  tokens.method(req, res),
	  tokens.url(req, res),
	  tokens.status(req, res),
	  JSON.stringify(tokens.body), '-',
	  tokens['response-time'](req, res), 'ms'
	].join(' ')
 }

module.exports = logger