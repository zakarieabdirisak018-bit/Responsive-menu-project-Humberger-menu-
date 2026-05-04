

const menuBtn = document.querySelector(".menu-img");
const navigation = document.querySelector('.nav-links');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
  navigation.classList.toggle('show-nav-links');
}