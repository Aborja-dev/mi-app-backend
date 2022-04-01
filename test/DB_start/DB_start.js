const Contact = require('../../models/Contact')
const { testData } = require('./DB_data')

const startDB = async ()=>{
	await Contact.deleteMany({})
	/* for (const contact of testData) {
		const newContact = new Contact(contact)
		await newContact.save()
	} */
	for (let i = 0; i < testData.length; i++) {
		const newContact = new Contact(testData[i])
		await newContact.save()
		console.log('index',i)
      
	}
}

module.exports = { startDB }