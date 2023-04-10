let switch_btns = document.querySelectorAll('.switch')
let power_reserve = document.querySelector('.power_reserve h1')
let price = document.querySelector('.price h1')
let speed = document.querySelector('.speed')
let temperature = document.querySelector('.speed')
let disks = document.querySelector('.speed')


switch_btns.forEach(el => el.onclick = () => el.classList.toggle('on'))