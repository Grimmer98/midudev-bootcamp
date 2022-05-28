const list = []
list.push(1)
const anotherList = list.concat(157)

const persona = {
    name: "Oscar",
    twitter: "@BountyHunter",
    age: 23,
    isDeveloper: true
}

const sumar = (operando1, operando2) =>{
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

console.log(sumar(persona.age,7))