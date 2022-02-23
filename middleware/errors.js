const error404 = (req,res)=>{
	res.status(404).json({
		error: 'Not found'
	})
}

module.exports = error404