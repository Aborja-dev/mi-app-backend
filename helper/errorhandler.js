class Error {
   constructor(mensaje){
      this.mensaje = mensaje
      this.type = 'custom error'
   }
}

class noName extends Error{
   constructor(mensaje){
      super(mensaje)
      this.name = 'noNameError'
   }
}

class nameExists extends Error{
   constructor(mensaje){
      super(mensaje)
      this.name = 'repeatNameError'
   }
} 

module.exports = {noName, nameExists }