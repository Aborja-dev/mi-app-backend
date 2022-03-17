let { contactos } = require('../helper/data')
const { add, update, _delete } = require('../helper/CRUD.JS')
const newItem = {
	id: 5,
	name: 'abraham',
	number: '45678'
}

console.log('Add');
console.log( add(contactos, newItem))
console.log('Update');
console.log( update(contactos, 2, newItem))
console.log('Delete');
console.log( _delete(contactos, 2))