import hachiImg from '../images/hachi.png'

const displayHome = (container) => {
    container.className = 'main-left'



    const h1 = document.createElement('h1')
    h1.innerText = 'Tetris Effect'
    container.appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'Many people, after playing Tetris for more than an hour straight, report being plagued by after-images of the game for up to days afterwards, an ability to play the game in their head, and a tendency to identify everything in the world as being made of <em>four squares</em> and attempt to determine \'where it fits in.\''
    container.appendChild(p)

    const hachi = new Image()
    hachi.src = hachiImg
    hachi.className = 'four'
    container.appendChild(hachi)

}

export default displayHome