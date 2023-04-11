let switch_btns = document.querySelectorAll('.switch')
let power_reserve = document.querySelector('.power_reserve h1')
let price = document.querySelector('.price h1')
let speed = document.querySelector('.speed')
let temperature = document.querySelector('.speed')
let disks = document.querySelector('.speed')
let conditioner = document.querySelector('.conditioner')
let long_range = document.querySelector('.long_range')
let car_view = document.querySelector('.car_view')

switch_btns.forEach(el => el.onclick = () => el.classList.toggle('on'))

