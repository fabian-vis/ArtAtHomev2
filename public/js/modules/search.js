import {
    getData
} from './api.js'

import {
    searchBar,
    searchIcon,
    kruisje
} from './var.js'

/* ------------------------------------------------search function */
export function search(searchBar) {
    getData()
}

/* ------------------------------------------------Kruis icoon toevoegen aan de inputbar */
searchBar.addEventListener("keyup", () => {
    if (searchBar.value) {
        kruisje.classList.add('kruisjeToggle')
    } else if (!searchBar.value) {
        kruisje.classList.remove('kruisjeToggle')
    }
})
/* ------------------------------------------------ Klik op het kruisje om het inputveld weer leeg te maken */
searchIcon.addEventListener("click", () => {
    searchBar.value = "";
    let url = "https://www.rijksmuseum.nl/api/nl/collection?key=8op6V3T9";
    kruisje.classList.remove('kruisjeToggle')
    getData(url)
})
/* ------------------------------------------------Wanneer er getypt wordt in de input word de search functie uitgevoerd */

searchBar.addEventListener("keydown", (e) => {
    // ONLY SEARCHING IF ENTER IS PRESSED
    if (e.code === "Enter") {
        search()
    }
})