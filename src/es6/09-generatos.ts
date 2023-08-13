(() => {
    function* iterate(names: string[]) {
        for(let name of names) {
            yield name
        }
    }

    const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer'])
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
})()