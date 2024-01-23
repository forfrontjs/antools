let form = document.querySelector('.form')
let popup = ()=>{
form.classList.toggle('active')
}

let log_form = document.querySelector('.log_form')
let popin = ()=>{
    log_form.classList.toggle('beactive')
}

let burger = document.querySelector('.burger')
let burgerBtn = document.querySelector('.burger_btn')

let toggleBurger = ()=>{
    burger.classList.toggle('active')
    burgerBtn.classList.toggle('active')
}