const mongoose = require('mongoose')

const conectionString = process.env.MONGO_DB_URI
//conexion a mongo
mongoose.connect(conectionString)
   .then(()=>{
      console.info('conexion a base de datos exitosa')
   })
   .catch((e)=>{
      console.error('ha ocurrido un error', e);
   })


//Contact.find({}).then(r=>console.log(r))
//const contact = new Contact({
//   name: 'Abraham',
//   number: '78-45-13'
//})
//contact.save()
//   .then(result=>{
//      console.log(result)
//      mongoose.connection.close()
//   })
//   .catch(error=>console.log(error))
//