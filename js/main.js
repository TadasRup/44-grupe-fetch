// import { data } from '../data/list.js';
import {users} from './users.js';

const ulDOM = document.querySelector('ul');

const data = fetch('/data/users.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        users ('users_block', data);
    });



// let HTML = ``;

// for (const item of data) {
//     HTML += `<li>${item.id}) ${item.text}labas</li>`;
// }

// ulDOM.innerHTML = HTML;