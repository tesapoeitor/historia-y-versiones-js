(() => {
    const user = { username: 'enrique', age: 24, country: 'Paraguay' }
    const { username, ...values } = user
    console.log(username)
    console.log(values)
})()