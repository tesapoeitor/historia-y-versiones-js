(() => {
    const promise1 = new Promise((resolve, reject) => reject('Se rechazo'))
    const promise2 = new Promise((resolve, reject) => resolve('Se resolvió1'))
    const promise3 = new Promise((resolve, reject) => resolve('Se resolvió2'))

    // devuelve la primera promesa en resolverse
    Promise.any([promise1, promise2, promise3])
        .then(response => console.log(response))
})()