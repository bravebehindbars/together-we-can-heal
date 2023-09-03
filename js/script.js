let ham = document.getElementsByClassName('slider')[0]
let menu = document.getElementsByClassName('menu')[0]
let navbar = document.getElementsByClassName('nav-bar')[0]
let sliderImg = document.getElementById('slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/isolated child.jpg','./img/recovery_quotes.jpg','./img/teenagers holding hands.jpg', ]
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===3){
        i=0;
    }
}
setInterval(slide,2000)