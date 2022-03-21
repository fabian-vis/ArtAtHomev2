import {
    htmlSection,
    searchBar
} from './var.js'

import {
    errorState,
    header,
    flyIn,
    hideLoading
} from './states.js'

import {
    searchError
} from './searchError.js'

import {
    renderData
} from './render.js'

import './search.js'

/* ------------------------------------------------Data uit de API halen */
export function getData() {

    const searchTerm = searchBar.value
    let url = "https://www.rijksmuseum.nl/api/nl/collection?key=8op6V3T9&q=" + searchTerm + "&ps=5"

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            searchError(data)
            renderData(data)
        })
        .catch((err) => {
            console.log(err)
            errorState()
        })
}