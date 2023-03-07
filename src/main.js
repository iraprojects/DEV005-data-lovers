import { apiHarry } from './api/apiHarry.js';
import listCH from './data/harrypotter/CharactersList.js';

const listElement = document.getElementById("list");
listElement.style.display = "none";
const loadingDiv = document.getElementById("loading")

const charactersName = document.querySelector('#characters-names');
var data;
apiHarry().then((listHarry) => {
    loadingDiv.style.display = "none";
    listElement.style.display= "block";
   
    listHarry.characters.map((item, index) => {
        const valitate = listCH.charactersList.find((itemCH) => itemCH.name == item.name)
        if(valitate){
            charactersName.innerHTML += 
            `<li id='ch${index}'>
                Name: ${item.name}
                Birth: ${item.birth}
                House: ${item.house}
                Species: ${item.species}
                Gender: ${item.gender}
                <img src="${valitate.link}" />
            </li>`;
        }
    })
    /* 
    + ' ' + element.birth*/
    data = listHarry
})

