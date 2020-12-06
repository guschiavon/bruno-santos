const burger = document.getElementById('burger')
const nav = document.getElementById('nav-menu')

burger.addEventListener('click', function(){
  this.classList.toggle('open')
  nav.classList.toggle('mobile-nav')
})