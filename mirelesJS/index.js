//funcion flecha
//ya tienen un return por defecto
let numero1, numero2;
const suma = (numero1,numero2)=>numero1+numero2;

//template string
` `
//auto ejecucion
(() =>{
//aqui va codigo
})()

//array, arraylist, list

//array 
const roles =[1,2,3]
//arraylist
const role1 = [{}]

//list
const role2 = {}
//destructuracion de objetos

const persona ={
    name: "mayco",
    age:24,
    address: {
        street: "huizayork",
        number:29
    }
}
console.log(persona.name);
console.log(persona.address.number);

const { name, address:{street}}=persona