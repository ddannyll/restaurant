
const displayHeader = (container) => {

    // Logo
    const logo = document.createElement('a')
    logo.href = ""
    const logoText = document.createElement('h2')
    logoText.innerText = 'Tetris Flavours'
    logo.appendChild(logoText)
    container.appendChild(logo)

    const ul = document.createElement('ul')

    const btns = []
    const buttonClassic = document.createElement('button')
    buttonClassic.id = 'classic-btn'
    buttonClassic.innerText = 'Classic'
    btns.push(buttonClassic)
    
    const buttonModern = document.createElement('button')
    buttonModern.id = 'modern-btn'
    buttonModern.innerText = 'Modern'
    btns.push(buttonModern)

    for (let btn of btns) {
        const li = document.createElement('li')
        li.appendChild(btn)
        ul.appendChild(li)
    }

    container.appendChild(ul)
}

export default displayHeader