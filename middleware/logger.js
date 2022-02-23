const logger = (req, res, next)=>{
	console.info(req.method, req.path)
	console.info(req.body)
	next()
}

module.exports = logger