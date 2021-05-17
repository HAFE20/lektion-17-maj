import getName from './modules/module';

let name: string = getName();

const headingElem: HTMLElement = document.querySelector('h1');
headingElem.innerHTML = `Hello ${name}`;

console.log("hello world!", name);