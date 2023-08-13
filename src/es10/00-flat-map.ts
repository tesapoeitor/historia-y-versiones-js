(() => {
    const array = [1,2,3,[2,4,[4,5]]]
    console.log(array.flat(3))

    const array2 = [1,2,3,4,5]
    console.log(array2.flatMap(value => [value, value * 2]))
})()