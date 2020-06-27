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
    console.log(value)
}