(() => {
    class User {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        #speak() {
            return 'Hello'
        }

        greeting() {
            return `${this.#speak()} ${this.name}`
        }

        get uAge() {
            return this.age
        }

        set uAge(n: number) {
            this.age = n
        }
    }

    const user = new User('Enrique', 24)
    console.log(user.greeting())
    console.log(user.uAge)
    console.log(user.uAge = 30)
})()