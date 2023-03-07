import { apiHarry } from './api/apiHarry.js';
import listCH from './data/harrypotter/CharactersList.js';

const listElement = document.getElementById("list");
listElement.style.display = "none";
const loadingDiv = document.getElementById("loading")

const charactersName = document.getElementById("characters-names");
var data;
apiHarry().then((listHarry) => {
    loadingDiv.style.display = "none";
    listElement.style.display= "block";
   console.log(listHarry)
    listHarry.characters.map((item, index) => {
        console.log(item.name)
        const valitate = listCH.charactersList.find((itemCH) => itemCH.name == item.name)
        console.log(valitate)
        if(valitate){
            charactersName.innerHTML+=
                `<ul class='ul-ch' id='ch${index}'>
                    <li>Name: ${item.name}</li>
                    <li>Birth: ${item.birth}</li>
                    <li>House: ${item.house}</li>
                    <li>Species: ${item.species}</li>
                    <li>Gender: ${item.gender}</li>
                    <li> <img src="${valitate.link}"> </li>
                </ul>`
        }
    })
    /* 
    + ' ' + element.birth*/
    data = listHarry
})

