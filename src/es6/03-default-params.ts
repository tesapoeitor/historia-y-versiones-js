(() => {
    const addUser = (name: string, age: number, country: string) => {
        var name = name || 'Oscar'
        var age = age || 34
        var country = country || 'MX'
        console.log(name, age, country)
    }

    // addUser()
    addUser('David', 15, 'CO')

    const newAdmin = (name = 'Oscar', age = 34, country = 'CL') => {
        console.log(name, age, country)
    }

    newAdmin()
    newAdmin('Enrique', 24, 'PY')
})()