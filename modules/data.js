const lowercase = (string) => {
    if (string[0].toLowerCase()) {
        const lowercase = string[0].toLowerCase() + (string).substring(1);
        return lowercase;
    } else {
        return string;
    }
}

const ajaxRequest = (url, callback) => {
    const loader = document.querySelector('#loader');
    loader.style.display = 'block';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            callback(JSON.parse(request.responseText));
            loader.style.display = 'none';
        } else {
            alert("That is not a Pokémon");
        }
    }
    request.onerror = () => {
        alert("Connection error");
    }

    request.send();
}

const searchPokemon = (url, callback) => {
    const form = document.querySelector('#search-form');

    form.onsubmit = e => {
        e.preventDefault();
        const searchTerm = lowercase(serialize(document.forms[0]));
        const requestUrl = url + searchTerm;

        ajaxRequest(requestUrl, callback);
    }
}

// This function takes an array of URLs
const searchTypesMulti = (url, callback) => {
    for (let i = 0; i < url.length; ++i) {
        ajaxRequest(url[i], data => {
            callback(data); // doesn't work yet
        });
    }
    return typeData;
}

export { searchPokemon, searchTypesMulti }