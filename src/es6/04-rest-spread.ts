(() => {
    // arrays destructuring

    const fruits = ['Apple', 'Banana']
    const [a, b] = fruits
    console.log(a, b)

    // object destructuring
    const user = { username: 'Enrique', age: '24' }
    const { username, age } = user
    console.log(username, age)

    // spread operator
    const person = { name: 'Enrique', age: 28 }
    const country = 'PY'
    const data = { id: 1, ...person, country }
    console.log(data)

    // rest
    const sum = (num: number, ...values: number[]): number => {
        console.log(values)
        const result = num + values.reduce((sum, number) => {
            return sum + number
        }, 0)
        return result
    }
    console.log(sum(1,1,2,3))
})()