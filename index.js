require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const error404 = require('./middleware/errors.js')
const Contact = require('./models/Contact')

let { contactos } = require('./helper/data')
const { add, update, _delete } = require('./js/CRUD.JS')
const { searchById } = require('./js/CRUD.JS')
const close = require('./middleware/dbClose')

var morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(close())

const now = Date.now()
const date =new Date(now)

app.get('/', (request, response)=>{
	response.send('<h1>Hola node</h1>')
})
app.get('/api/info', (request, response)=>{
	response.send(`<h3>La agenda tiene ${contactos.length} contactos</h3><p>${date.toUTCString()}</p>`)
})
app.get('/api/persons', (req, res)=>{
	Contact.find({}).then(result=>{
		res.json(result)
	})
})
app.get('/api/persons/:id', (req, res)=>{
	const id = req.params.id
	Contact.find({_id: id}).then(result=>{
		console.log('find', result);
		res.json(result)
	})
	
})
app.post('/api/persons', (req, res)=>{
	const _contact = new Contact({ ...req.body })
	_contact.save()
		.then(result=>{
			res.json(result)
		})
		.catch( (error) => {
			console.error(error);
			res.status(400).json({error: error})
		})
		
})
app.put('/api/persons/:id', (req, res)=>{
	const id = req.params.id
	Contact.updateOne({ _id: id },{...req.body})
		.then(()=>{
			console.log('se realizo la actualizacion')
			Contact.findById(id).then(result=>{
				res.json(result)
			})
		})
		.findById(id)
	
})
app.delete('/api/persons/:id', (req, res)=>{
	const id = req.params.id
	Contact.deleteOne({_id: id}).then(()=>{
		res.status(204).end()
	})
})

app.use(error404)
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`servidor corriendo en el puerto ${PORT}`)
})