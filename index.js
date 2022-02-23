const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const error404 = require('./middleware/errors.js')
const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)
const now = Date.now()
const date =new Date(now)

let contactos = [
	{ 
		'name': 'Arto Hellas', 
		'number': '040-123456',
		'id': 1
	},
	{ 
		'name': 'Ada Lovelace', 
		'number': '39-44-5323523',
		'id': 2
	},
	{ 
		'name': 'Dan Abramov', 
		'number': '12-43-234345',
		'id': 3
	},
	{ 
		'name': 'Mary Poppendieck', 
		'number': '39-23-6423122',
		'id': 4
	}
]
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
		id: contactos.length++,
		name,
		number
	}
	contactos = [...contactos, newContact]
	res.json(newContact)
})
app.put('/api/persons/:id', (req, res)=>{
	const {id} = req.params
	const {name, number} = req.body
	const _contact = {
		id: id,
		name,
		number
	}
	contactos = contactos.map((contact)=> contact.id===Number(id)?_contact:contact)
	const contact = contactos.find(c=>c.id === Number(req.params.id))
	res.json(contact)
})
app.delete('/api/persons/:id', (req, res)=>{
	const {id} = req.params
	contactos = contactos.filter(c=>c.id !== Number(id))
	res.status(204).end()
})

app.use(error404)
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`servidor corriendo en el puerto ${PORT}`)
})