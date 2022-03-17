const add = (array, newItem)=>{
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

module.exports = {
	add: add,
	update: update,
	_delete: _delete
}

