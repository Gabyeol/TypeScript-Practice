let count = 10, message = 'Your count'
let result = `${message} is ${count}`

let o: object = {name: 'Jack', age: 32}
o = {first: 1, second: 2}

interface IPerson {
    name: string
    age: number
    etc?: boolean
}

let person1: IPerson = {name: "Jack", age: 32, etc: true}
person1 = {name: "Jane", age: 25}

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

interface IAgeable {
    age?: number
}

function getAge(o: IAgeable) {
    return o != undefined && o.age ? o.age : 0
}

class Person1 {
    constructor(public name: string, public age?: number) {}
}

let jack1 : Person1 = new Person1('Jack', 32)

abstract class AbstractPerson2 {
    abstract name: string
    constructor(public age?: number) {}
}

class Person2 extends AbstractPerson2 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}

let jack2: Person2 = new Person2('Jack', 32)

const isGreater = (a: number, b: number): boolean => a > b

const f = (callback: () => void): void => callback()

let array = new Array
array.push(1)
array.push('a')


const split = (str: string, delim: string = ''): string[] => str.split(delim)

const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0

const multiply = (result, val) => result * val
let numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tempResult = numbers
    .filter(val => val % 2 != 0)
    .map(val => val * val)
    .reduce(multiply, 1)

let mathResult = Math.round(Math.sqrt(tempResult))
console.log(mathResult)


const arr: number[] = [1,2,3,4]
type ResultType = [boolean, string]
const tuple: ResultType = [true, 'the result is ok']
tuple.forEach(val => console.log(val.toString()))