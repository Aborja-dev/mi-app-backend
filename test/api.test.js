const { default: mongoose } = require('mongoose')
const supertest = require('supertest')
const { app, server} = require('../index')
const { testData } = require('./DB_start/DB_data')
const { startDB } = require('./DB_start/DB_start')
const api = supertest(app)


beforeEach(startDB)

describe('prueba de contactApi', () => {
	test('prueba de get',async ()=>{
		await api
			.get('/api/persons')
			.expect(200)
			.expect('Content-Type', /application\/json/)
		const result = await api.get('/api/persons')
		expect(result.body).toHaveLength(testData.length)
	}),
   
	test('post a contact',async ()=>{
		const newcontact = {
			name: 'Ankahara',
			number: '12345'
		}
		await api
			.post('/api/persons')
			.send(newcontact)
			.expect(200)
		const result = await api.get('/api/persons')
		expect(result.body).toHaveLength(testData.length + 1)
	})
})

afterAll(async () => {
	mongoose.connection.close()
	server.close()
}) 

