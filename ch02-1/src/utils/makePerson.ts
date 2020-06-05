export function makePerson(name: string, age: number, isMale: boolean) {
    return {name: name, age: age, sex: isMale ? "Male" : "Female"}
}
export function testMakePerson() {
    console.log(
        makePerson('Jane', 22, false),
        makePerson('Jack', 33, true)
    )
}