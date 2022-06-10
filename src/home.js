import './home.css'
import hachiImg from './hachi.png'

const displayHome = (container) => {
    const main = document.createElement('main')

    const homeContent = document.createElement('div')
    homeContent.id = 'home-content'
    main.appendChild(homeContent)

    const h1 = document.createElement('h1')
    h1.innerText = 'Tetris Effect'
    homeContent.appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'Many people, after playing Tetris for more than an hour straight, report being plagued by after-images of the game for up to days afterwards, an ability to play the game in their head, and a tendency to identify everything in the world as being made of <em>four squares</em> and attempt to determine \'where it fits in.\''
    homeContent.appendChild(p)

    const hachi = new Image()
    hachi.src = hachiImg
    homeContent.appendChild(hachi)

    container.appendChild(main)
}

export default displayHome