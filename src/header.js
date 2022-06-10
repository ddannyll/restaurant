import './header.css'

const displayHeader = (container) => {
    const header = document.createElement('header')

    // Logo
    const logo = document.createElement('a')
    logo.href = ""
    const logoText = document.createElement('h2')
    logoText.innerText = 'Tetris Flavours'
    logo.appendChild(logoText)
    header.appendChild(logo)

    const ul = document.createElement('ul')

    const btns = []
    const buttonClassic = document.createElement('button')
    buttonClassic.innerText = 'Classic'
    btns.push(buttonClassic)
    
    const buttonModern = document.createElement('button')
    buttonModern.innerText = 'Modern'
    btns.push(buttonModern)

    for (let btn of btns) {
        const li = document.createElement('li')
        li.appendChild(btn)
        ul.appendChild(li)
    }

    header.appendChild(ul)




    container.appendChild(header)
}

export default displayHeader