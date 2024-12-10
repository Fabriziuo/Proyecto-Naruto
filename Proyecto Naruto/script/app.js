// NEGRO PATO :)
// HOLI
const txtCharacter = document.getElementById("txt-character");
const containerCards = document.getElementById("containerCards");
const URL1 = "https://narutodb.xyz/api/character?page=1&limit=1400";

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.characters;
}

const createCards = (character) => {
    const card = document.createElement("div");
    card.classList.add("card-character");

    const imgCard = document.createElement("img");
    imgCard.src = character.images;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add("description-card");
    
    const nameCharacter = document.createElement("h2");
    nameCharacter.textContent = character.name;
    

    containerDescription.appendChild(nameCharacter);
    

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
}

const generateAllCharacters = async () => {
    const data = await getApi(URL1);
    data.map(character => createCards(character));
}



window.addEventListener("DOMContentLoaded", generateAllCharacters);
