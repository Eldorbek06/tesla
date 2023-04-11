let switch_btns = document.querySelectorAll('.switch')
let power_reserve = document.querySelector('.power_reserve h1')
let price = document.querySelector('.price h1')
let speed = document.querySelector('.speed')
let temperature = document.querySelector('.temperature')
let disks = document.querySelector('.disks')
let conditioner = document.querySelector('.conditioner')
let long_range = document.querySelector('.long_range')
let car_view = document.querySelector('.car_view')
let balons = document.querySelectorAll('.balon')
let image = document.querySelector('.image .tesla')
let speedNum = 60
let power_reserveNum = 750
let priceNum = '$89, 990'
let temperatureNum = 20
let disksNum = 19
let animaS = 1

switch_btns.forEach(el => el.onclick = () => {
    el.classList.toggle('on')
    if (long_range.lastElementChild.classList.contains('on')) {
        priceNum = "$100, 000"
        setPrice()
    } else {
        priceNum = '$89, 990'
        setPrice()
    }
})

speed.querySelectorAll('img').forEach((el, idx) => el.onclick = () => {
    if (idx === 0) {
        speedNum += 5
        power_reserveNum -= 62.5
        animaS -= 0.09
    } else {
        speedNum -= 5
        power_reserveNum += 62.5
        animaS += 0.09
    }
    if (speedNum <= 5) {
        speedNum = 5
        power_reserveNum = 1500
        el.classList.add('unclickable')
    } else if (speedNum >= 110) {
        speedNum = 110
        power_reserveNum = 62.5
        animaS = 0.1
        el.classList.add('unclickable')
    } else {
        speed.querySelectorAll('img').forEach(el => el.classList.remove('unclickable'))
    }
    setAnimaDuration()
    setSpeed()
    setPower_reserve()
})

temperature.querySelectorAll('img').forEach((el, idx) => el.onclick = () => {
    idx === 0 ? temperatureNum++ : temperatureNum--
    setTemperature()
    let condT = conditioner.querySelector('p')
    temperatureNum <= 10 ? condT.innerHTML = "Печка" : condT.innerHTML = "Кондиционер"
})

disks.querySelectorAll('img').forEach((el, idx) => el.onclick = () => {
    idx === 0 ? disksNum += 2 : disksNum -= 2
    if (disksNum > 20) {
        disksNum = 21
        el.classList.add('unclickable')
        balons.forEach(el => el.style.scale = '1.1')
    } else if (disksNum < 18) {
        disksNum = 17
        el.classList.add('unclickable')
        balons.forEach(el => el.style.scale = '0.9')
    } else {
        disks.querySelectorAll('img').forEach(el => el.classList.remove('unclickable'))
        balons.forEach(el => el.style.scale = null)
    }
    setDisks()
})

car_view.onclick = () => {
    if (car_view.lastElementChild.classList.contains('on')) {
        location.assign('/')
        image.src = '/public/images/tesla.png'
    } else {
        location.assign('/salon.html')
        image.src = '/public/images/tasla black cabin.png'
    }
}

function setSpeed() { speed.querySelector(".value h1").innerHTML = `${speedNum} км/ч` }
function setPower_reserve() { power_reserve.innerHTML = `${power_reserveNum}км` }
function setPrice() { price.innerHTML = `${priceNum}` }
function setTemperature() { temperature.querySelector(".value h1").innerHTML = `${temperatureNum}°` }
function setDisks() { disks.querySelector(".value h1").innerHTML = disksNum }
function setAnimaDuration() { balons.forEach(el => el.style.animation = `rotateBalon ${animaS}s infinite`) }
function switchToggle() { switch_btns.forEach(el => el.classList.toggle('on')) }
setSpeed()
setPower_reserve()
setPrice()
setTemperature()
setDisks()