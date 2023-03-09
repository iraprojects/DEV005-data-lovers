import { apiHarry } from './api/apiHarry.js';
import listCH from './data/harrypotter/CharactersList.js';

const listElement = document.getElementById("list");
listElement.style.display = 'none';
const loadingDiv = document.getElementById("loading")

const charactersName = document.getElementById("characters-names");
const navMenu = document.querySelector('.Menu');
const navToogle = document.querySelector('.toggle')
apiHarry().then((listHarry) => {
  loadingDiv.style.display = 'none';
  listElement.style.display = 'block';
  /* let data = listHarry */

  listHarry.characters.map((item, index) => {
    const valitate = listCH.charactersList.find((itemCH) => itemCH.name === item.name);
    if (valitate) {
      charactersName.innerHTML +=
        `<ul class='ul-ch' id='ch${index}'>
          <li>Name: ${item.name}</li>
          <li>Birth: ${item.birth}</li>
          <li>House: ${item.house}</li>
          <li>Species: ${item.species}</li>
          <li>Gender: ${item.gender}</li>
          <li> <img src="${valitate.link}" alt="Picture of ${item.name}"> </li>
        </ul>`
    }
  })
})

navToogle.addEventListener('click', () => {
  navMenu.classList.toggle('Menu_visible');
  if (navMenu.classList.contains('Menu_visible')) {
    navToogle.setAttribute('aria-label', 'Close menu');
  }else {
    navToogle.setAttribute('aria-label', 'Open menu');
  }
})
/* 
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
}); */
