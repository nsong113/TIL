'use strict';
//1. 필요한 것들을 select하고. variable에 저장한다.
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//classList: read the class , property. -> method를 가짐
//.remove('hidden','ddd')
//.add('hidden')  -hidden클래스를 추가

//keyboard event
document.addEventListener('keydown', function (event) {
  //console.log('preessing');
  //console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//keydown,: we just press down the key
//key press: keep out finger on a certain key, 그냥 키보드 누르는거
//keyup: only happens when we lift or finger off the keyboard
//->특정 키가 눌렸는지 : 어떤 키를 누르든 자바스크립트는 오브젝트를 형성하고 우리는 event handler function에 불러오기만 하면 된다. ->perameter를 넣는데
