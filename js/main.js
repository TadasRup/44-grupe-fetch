// import { data } from '../data/list.js';

const ulDOM = document.querySelector('ul');

const data = [];

let HTML = ``;

for (const item of data) {
    HTML += `<li>${item.id}) ${item.text}labas</li>`;
}

ulDOM.innerHTML = HTML;