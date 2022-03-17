const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const error404 = require('./middleware/errors.js')
const app = express()
app.use(express.json())
app.use(cors())
//app.use(logger)
const now = Date.now()
const date =new Date(now)
let { contactos } = require('./helper/helper')
const { add, update, _delete } = require('./helper/CRUD.JS')
app.get('/', (request, response)=>{
	response.send('<h1>Hola node</h1>')
})
app.get('/api/info', (request, response)=>{
	response.send(`<h3>La agenda tiene ${contactos.length} contactos</h3><p>${date.toUTCString()}</p>`)
})
app.get('/api/persons', (req, res)=>{
	res.json(contactos)
})
app.post('/api/persons', (req, res)=>{
	const {name, number} = req.body
	const newContact = {
		id: Math.floor(Math.random()*1000),
		name: name,
		number: number
	}
	contactos = add(contactos, newContact)
	res.json(newContact)
})
app.put('/api/persons/:id', (req, res)=>{
	const {id} = req.params
	const newContact = req.body
	const _contact = {
		id: id,
		...newContact
	}
	contactos = update(contactos, id, _contact)
	res.json(_contact)
})
app.delete('/api/persons/:id', (req, res)=>{
	const {id} = req.params
	contactos = _delete(contactos, id)
	res.status(204).end()
})

app.use(error404)
const PORT = process.env.PORT || 3004
app.listen(PORT, ()=>{
	console.log(`servidor corriendo en el puerto ${PORT}`)
})