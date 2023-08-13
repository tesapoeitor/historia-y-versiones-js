(() => {
    const users = {
        enrique: {
            country: 'Paraguay'
        },
        ana: {
            country: 'Mexico'
        }
    }

    console.log(users?.ana?.country)
    console.log(({} as any)?.juan?.country)
})()