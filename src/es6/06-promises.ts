(() => {
    const anotherFunction = () => {
        return new Promise<string>((resolve, reject) => {
            if(true) {
                resolve('Hey!!!')
            } else {
                reject('Whops!')
            }
        })
    }

    anotherFunction()
        .then(response => console.log(response))
        .catch(response => console.log(response))
})()