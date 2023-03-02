const button = document.getElementById('button')
const input = document.getElementById('search')


const openInput = () => {
    if (input.classList.contains('active')) {
        input.classList.remove('active')
    } else {
        input.classList.add('active')
    }



}

button.addEventListener('click', openInput)