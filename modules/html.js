
const capitalise = (string) => {
    const capitalised = string[0].toUpperCase() + (string).substring(1);
    return capitalised;
}

const appendHtml = (data) => {
    console.log(data);

    // Pokemon sprite
    const spriteElement = document.querySelector('#pokemon-sprite');
    spriteElement.src = data.sprites.front_default;
    spriteElement.alt = capitalise(data.name);

    // Pokemon name and pokedex number
    const pokemonName = document.querySelector('#pokemon-name');
    const pokemonNumber = document.querySelector('#pokemon-number');

    pokemonName.innerHTML = capitalise(data.name);
    pokemonNumber.innerHTML = (data.id);

    const colours = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    }

    // Create array of the pokemon's types
    const types = [];
    for (let i = 0; i < data.types.length; ++i) {
        types.push(data.types[`${i}`].type["name"]);
    }

    // Append pokemon type to element
    const typeElements = Array.from(document.querySelectorAll('.pokemon-type'));
    for (let i = 0; i < typeElements.length; ++i) {
        if (types[i]) {
            typeElements[i].innerHTML = capitalise(types[i]);
            typeElements[i].style.backgroundColor = colours[types[i]];
        } else {
            typeElements[i].innerHTML = "";
            typeElements[i].style.backgroundColor = 'transparent';
        }
    }

    // Pokemon abilities
    const abilitiesContainer = document.querySelector('#pokemon-abilities');
    abilitiesContainer.style.display = "block";

    // Remove any existing elements
    const children = Array.from(document.querySelectorAll('#pokemon-abilities p'));
    if (children) {
        for (let i = 0; i < children.length; ++i) {
            children[i].parentNode.removeChild(children[i]);
        }
    }

    for (let i = 0; i < data.abilities.length; ++i) {
        // Create paragraph element
        let element = document.createElement("p");
        abilitiesContainer.appendChild(element);

        // Format element text and append to innerHTML
        let ability = data.abilities[`${i}`].ability["name"];
        if (ability.includes("-")) {
            ability = ability.split("-");
            let abilityString = "";
            ability.forEach(e => {
                abilityString += capitalise(e) + " ";
            });
            element.innerHTML = abilityString.trim();
        } else {
            element.innerHTML = capitalise(ability);
        }
    }

    // Pokemon stats
    const statsContainer = document.querySelector('#pokemon-stats');
    statsContainer.style.opacity = "1";
    const statsDiv = Array.from(document.querySelectorAll('.stat-bar div'));
    const statsValues = Array.from(document.querySelectorAll('.stat-bar span'));
    for (let i = 0; i < statsDiv.length; ++i) {
        let stat = data.stats[`${i}`].base_stat;
        statsDiv[i].style.width = `${stat}px`;
        statsValues[i].innerHTML = stat;
    }

}

export { appendHtml }