const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;
menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
window.addEventListener('scroll', () => {
    if(pageYOffset > offset) {
        navbar.classList.add('navbar-active');
    }
    else {
        navbar.classList.remove('navbar-active');
    }
});
new Typed('.typed-js',{
    strings : ['Developer','Designer','Bussinesman'],
    typeSpeed : 40,
    delaySpeed : 90,
    loop : true
  });