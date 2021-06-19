
const dark = document.getElementById('dark')

dark.addEventListener('click', () => {
    const html = document.querySelector('html');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }
})