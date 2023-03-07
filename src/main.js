//import { example } from './data.js';
//import data from './data/harrypotter/harry.json' assert {type: 'json'};
//console.log(example, data['characters']);
import data from "./data/harrypotter/harry.js";
import listCH from "./data/harrypotter/CharactersList.js";

const charactersName = document.querySelector("#p-characters");
const characters = data.characters;

characters.forEach((element, i) => {
  if (listCH.charactersList.includes(element.name)) {
    charactersName.insertAdjacentHTML (
      "afterend",
      `<ul class='ul-ch' id='ch${i}'>
          <li>Name: ${element.name}</li>
          <li>Birth: ${element.birth}</li>
          <li>House: ${element.house}</li>
          <li>Species: ${element.species}</li>
          <li>Gender: ${element.gender}</li>
      </ul>`
    );
  }
});
