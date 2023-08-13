(() => {
    const hello = () => {
        throw new Error('Aquí se genera un error')
    }
    // antes de es10 en el catch siempre recibíamos un error
    try {
        hello()
    } catch(error) {
        console.log(error)
    }

    // en es10 no es necesario recibir el error en el catch
    try {
        hello()
    } catch {
        console.log('error')
    }
})()