const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(){
 drawer.classList.toggle('open');
});
