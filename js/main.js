let switch_btns = document.querySelectorAll('.switch')

switch_btns.forEach(el => {
    el.onclick = () => {
        el.classList.toggle('on')
    }
})