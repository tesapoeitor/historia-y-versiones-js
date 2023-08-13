(() => {
    const newUser = (user: string, age: number, country: string, uId: number) => {
        return {
            user,
            age,
            country,
            uId
        }
    }

    console.log(newUser('enrique', 24, 'PY', 1))
})()