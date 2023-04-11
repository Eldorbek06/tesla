let switch_btns = document.querySelectorAll('.switch')
let car_view = document.querySelector('.car_view')
let mainImageBox = document.querySelector('.tesla')
let mainImage = document.querySelector('.image .tesla')
let colorBtns = document.querySelectorAll('.list span')



switch_btns.forEach(el => el.onclick = () => el.classList.toggle('on'))
car_view.onclick = () => {
    if (car_view.lastElementChild.classList.contains('on')) {
        location.assign('/')
        image.src = '/public/images/tesla.png'
    } else {
        location.assign('/salon.html')
        image.src = '/public/images/tasla black cabin.png'
    }
}

colorBtns.forEach((el, idx) => {
    el.onclick = () => {
        if (idx === 0) {
            mainImage.src = '/public/images/tasla black cabin.png'
        } else if (idx === 1) {
            mainImage.src = '/public/images/tasla white cabin.png'
        } else {
            mainImage.src = '/public/images/tasla pink cabin.png'
        }
    }
})