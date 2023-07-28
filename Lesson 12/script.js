const array = document.querySelectorAll('.imgWrapper')
const button = document.querySelector('#buttonBtn')
const classy = document.querySelector('.bg-red')
const checkbox = document.querySelector('#checkbox')

function updateCheckbox() {
    const allBalloonsColored = Array.from(array).every((img) => img.classList.contains('bg-red'))
    checkbox.checked = allBalloonsColored
}

array.forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red')
        updateCheckbox()
    })
})

button.addEventListener('click', () => {
    array.forEach((img) => {
        img.classList.toggle('bg-red')
    })
    updateCheckbox()
})

checkbox.addEventListener('click', () => {
    array.forEach((img) => {
        img.classList.toggle('bg-red', checkbox.checked)
    })
})
