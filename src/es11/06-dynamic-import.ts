const button = document.querySelector<HTMLButtonElement>('#btn')

button?.addEventListener('click', async () => {
    const module = await import('./module')
    console.log(module)
    module.hello()
})