const mongoose = require('mongoose')
const close = (req, res, next) => {
	if (req) {
      console.log(req);
   } else if(res){
      console.log(res);
   }
   next
 }

module.exports = close