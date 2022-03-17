const { noName, nameExists } = require("./errorhandler")

const add = (array, newItem)=>{
   if (!newItem.hasOwnProperty('name')) {
      throw new noName('Error: el contacto no tiene nombre')
   }
   if (searchByName(array, newItem.name)) {
      throw new nameExists('El nombre ya existe')
   }
   return array.concat(newItem)
}
function update (array, idUpdate, newItem){
   return array.map( (item)=>
      item.id === Number(idUpdate)
         ?newItem
         :item
   ) 
}
const _delete = (array, idDelete)=>{
	return array.filter(({id})=>id!==idDelete)
}
const searchById = (array, id)=>{
      return array.find( item=>{
         if (item.hasOwnProperty('id')) {
            return item.id===id
         } else {
            throw new Error('Este objeto no tiene id')
         }  
})}
const searchByName = (array, name)=>{
      return array.some( item=>{
         if (item.hasOwnProperty('name')) {
            return item.name===name
         } else {
            throw new Error('Este objeto no tiene name')
         }  
})}

module.exports = {
	add: add,
	update: update,
	_delete: _delete
}

