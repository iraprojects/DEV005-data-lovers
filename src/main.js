//import { example } from './data.js';
//import data from './data/harrypotter/harry.json' assert {type: 'json'}; 
//console.log(example, data['characters']);
import data from './data/harrypotter/harry.js';

const charactersName = document.querySelector('#characters-names');
const characters = data.characters 
characters.forEach((element, i) => {
    charactersName.innerHTML += `<li id='ch${i}'>${element.name + ' ' + element.birth}</li>`;
    //console.log(element.name) 
    
});