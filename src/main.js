import { apiHarry } from './api/apiHarry.js';
import { filterData, filterProtagonists } from './data.js';
import listCH from './data/harrypotter/CharactersList.js';

const listElement = document.getElementById("list");
listElement.style.display = 'none';
const loadingDiv = document.getElementById("loading")
let dataList;
const charactersName = document.getElementById("characters-names");
const navMenu = document.querySelector('.Menu');
const navToogle = document.querySelector('.toggle');

apiHarry().then((listHarry) => {
  loadingDiv.style.display = 'none';
  listElement.style.display = 'block';
  dataList = listHarry;
  renderProtagonists();
  //renderList(listHarry.characters)
});

function renderList(listHarry) {
  let listInsert = "";
  listHarry.map((item, index) => {
    const valitate = listCH.charactersList.find((itemCH) => itemCH.name === item.name);
    if (valitate) {
      listInsert +=
        `<ul class='ul-ch' id='ch${index}'>
          <li> <img src="${valitate.link}" alt="Picture of ${item.name}"> </li>
          <li>Name: ${item.name}</li>
          <li>Birth: ${item.birth}</li>
          <li>House: ${item.house ? item.house : "Not apply"}</li>
          <li>Species: ${item.species}</li>
          <li>Gender: ${item.gender}</li>
        </ul>`
    }
  })
  charactersName.innerHTML = listInsert
}

navToogle.addEventListener('click', () => {
  navMenu.classList.toggle('Menu_visible');
  if (navMenu.classList.contains('Menu_visible')) {
    navToogle.setAttribute('aria-label', 'Close menu');
  }else {
    navToogle.setAttribute('aria-label', 'Open menu');
  }
});

const selectHouse = document.getElementById("sl-house");
let dataFilter;
selectHouse.addEventListener('change', () => {
  if(selectHouse.value !== "All Characters")  dataFilter = filterData(dataList.characters, selectHouse.value);
  else dataFilter = dataList.characters;
  renderList(dataFilter);
  title.style.display='none';
  subtitle.style.display = 'block';
  subtitle.textContent = `${selectHouse.value}`;
});

const btnHome = document.querySelector('#btn-home');
const title = document.querySelector('h1');
const subtitle = document.querySelector('#subtitle');
const protagonists = [
  'Harry Potter', 
  'Ronald Weasley', 
  'Hermione Granger', 
  'Albus Dumbledore', 
  'Severus Snape', 
  'Tom Riddle (Voldemort)'
];

const renderProtagonists = () => {
  dataFilter = filterProtagonists(dataList.characters, protagonists);
  title.style.display='block';
  selectHouse.value='Filter by';
  subtitle.style.display='none';
  renderList(dataFilter);
};

btnHome.addEventListener('click', () => {
  renderProtagonists();
});

//limpiar evento y agregar funciones
const slSort = document.querySelector('#sl-sort');
slSort.addEventListener('change', () => {
  let dataSort;
  if(slSort.value !== "sort-by") {
    dataSort = dataList.characters.concat().sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    renderList(dataSort);
  } else renderList(dataList.characters);
});


/* const selectHouse = document.getElementById("sl-house");
selectHouse.addEventListener('change', () => {
  let dataFilter;
  if(selectHouse.value !== "")  dataFilter = dataList.characters.filter((item) => item.house === selectHouse.value)
  else dataFilter = dataList.characters
  
  renderList(dataFilter)
}) */
