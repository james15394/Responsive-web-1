const head = document.querySelector('header');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const li = document.querySelectorAll('.nav li');

window.addEventListener('scroll', () => {
    head.classList.toggle("sticky", window.scrollY > 0);
})

toggle.addEventListener('click', (e) => {
    nav.classList.toggle('display');
})
li.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.toggle('display');
    })
})
