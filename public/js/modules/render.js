/* ------------------------------------------------Data word op de pagina gerenderd */

import {
    htmlSection
} from './var.js'

import {
    header,
    flyIn,
    hideLoading
} from './states.js'

export function renderData(data) {
    // console.log(id)
    hideLoading()
    flyIn()
    header()
    data.artObjects.forEach(kunst => {
        htmlSection.insertAdjacentHTML('afterbegin',
            `
                    <article>
                    <a href="#kunst/${kunst.id}">
                            <p>${kunst.title}</p> 
                            <p>${kunst.principalOrFirstMaker}</p>
                            <img src="${kunst.webImage.url.slice(0, -3)+"=s1000"}">
                    </a>
                    </article>
            `)
    })
}