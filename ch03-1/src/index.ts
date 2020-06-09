let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result)

let o: object = {name: 'Jack', age: 32}
console.log(o)
o = {first: 1, second: 2}
console.log(o)

interface IPerson {
    name: string
    age: number
    etc?: boolean
}

let person1: IPerson = {name: "Jack", age: 32, etc: true}
console.log(person1)
person1 = {name: "Jane", age: 25}
console.log(person1)

let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}

function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ? 
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}

printMe(ai)

interface IAgeable {
    age?: number
}

function getAge(o: IAgeable) {
    return o != undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({age:32}))


class Person1 {
    constructor(public name: string, public age?: number) {}
}

let jack1 : Person1 = new Person1('Jack', 32)

console.log(jack1)