
import nesImg from '../images/nes.png'

const displayClassic = (container) => {
    container.className = 'main-right'
    const h1 = document.createElement('h1')
    h1.innerText = 'Classic Tetris'
    container.appendChild(h1)

    const hachi = new Image()
    hachi.src = nesImg
    container.appendChild(hachi)

    const p = document.createElement('p')
    p.innerHTML = 'This Tetris is defined by slow left and right piece movement, emphasis on Tetris line clears, and no lock delay when the piece lands.The principle game in this archetype is the NTSC version of Tetris for the Nintendo Entertainment System. In 1990 it was featured as one of the three games used at the Nintendo World Championships, the largest esports event at the time.'
    container.appendChild(p)
}

export default displayClassic