import getName from './modules/module';

let name: string = getName();

const startpageElem: HTMLElement = document.querySelector('#startpage');
const anotherpageElem: HTMLElement = document.querySelector('#another-page');
const changeButton: HTMLElement = document.querySelector('#change');

changeButton.addEventListener('click', () => {
  startpageElem.classList.add('hide');
  anotherpageElem.classList.remove('hide');
  anotherpageElem.classList.add('show');
});

console.log("hello world!", name);