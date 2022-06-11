import displayHeader from "./modules/header";
import displayHome from "./modules/home";
import displayClassic from "./modules/classic";
import displayModern from "./modules/modern";
import 'destyle.css'
import './style.css'

const content = document.querySelector('#content')
const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')

content.appendChild(header)
content.appendChild(main)
content.appendChild(footer)

displayHeader(header)
displayHome(main)

const classicBtn = document.querySelector('#classic-btn')
classicBtn.onclick = () => {
    removeChildren(main)
    displayClassic(main)
}

const modernBtn = document.querySelector('#modern-btn')
modernBtn.onclick = () => {
    removeChildren(main)
    displayModern(main)
}




function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}