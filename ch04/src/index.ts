console.log('4th chapter')

// const period = 1000
// let count = 0
// console.log('program started..')
// const id = setInterval(() => {
//     if(count >= 3) {
//         clearInterval(id)
//         console.log('program finished..')
//     }
//     else 
//     console.log(++count)
// }, period)


function* rangeGenerator(from: number, to: number) {
    let value = from
    while(value < to) {
        yield value++
    }
}

let iterator = rangeGenerator(1, 3 + 1)
while(1) {
    const {value, done} = iterator.next()
    if(done) break
    // console.log(value)
}

// for(let value of rangeGenerator(4, 6+1))
    // console.log(value)


function* gen12() {
    yield 1
    yield 2
}

function* gen12345() {
    yield* gen12()
    yield* [3, 4]
    yield 5
}

// for(let value of gen12345())
//     console.log(value)


const createRangeIterable = (from: number, to: number) => {
    let currentValue = from
    return {
        next() {
            const value = currentValue < to ? currentValue++ : undefined
            const done = value == undefined
            return {value, done}
        }
    }
}

const iterator2 = createRangeIterable(1, 3 + 1)
while(true) {
    const {value, done} = iterator2.next()
    if(done) break
    // console.log(value)
}

const f = <T>(x: T): string => `f(${x})`
const g = <T>(x: T): string => `g(${x})`
const h = <T>(x: T): string => `h(${x})`
const compose = <T, R>(...functions: readonly Function[]): Function => (x:T): (T) => R => {
    const deepCopiedFunctions = [...functions]
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}

const composedFunction = compose(h, g, f)
console.log(
    composedFunction('x')
)

type FirstOrderFunc<T,R> = (T) => R
type SecondOrderFunc<T,R> = (T) => FirstOrderFunc<T,R>
type ThirdOrderFunc<T,R> = (T) => SecondOrderFunc<T,R>

const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1
console.log(inc(1))

const add: SecondOrderFunc<number, number> =
    (x: number): FirstOrderFunc<number, number> =>
    (y: number): number => x + y

console.log(
    add(1)(2)
)

const add3: ThirdOrderFunc<number, number> =
    (x: number): SecondOrderFunc<number, number> =>
    (y: number): FirstOrderFunc<number, number> =>
    (z: number): number => x + y + z

console.log(
    add3(1)(2)(3)
)