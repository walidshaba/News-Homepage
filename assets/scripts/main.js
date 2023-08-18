const burger = document.getElementById('burger-cont');
const blurScreen = document.getElementById('blur');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  if (burger.className == 'burger-menu') {
    burger.classList.add('active');
    menu.classList.add('active');
    blurScreen.classList.add('active');
  } else {
    burger.classList.remove('active');
    menu.classList.remove('active');
    blurScreen.classList.remove('active');
  }
});
