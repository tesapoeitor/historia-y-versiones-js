var lastName = 'Aguilera'
lastName = 'Perez'
console.log(lastName)

let fruit = 'Apple'
fruit = 'Watermelon'
console.log(fruit)

const animal = 'Dog'
// animal = 'Cat'

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Watermelon' // block scope
        const fruit3 = 'Melon' // block scope
    }
    console.log(fruit1)
    // console.log(fruit2)
    // console.log(fruit3)
}