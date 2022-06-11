
import dtImg from '../images/dt.png'

const displayModern = (container) => {
    container.className = 'main-left'
    const h1 = document.createElement('h1')
    h1.innerText = 'Modern Tetris'
    container.appendChild(h1)

    
    const p = document.createElement('p')
    p.innerHTML = 'Nearly all Tetris releases since 2001 are of this type. Featuring the Super Rotation System, 7-bag radomizer, hold, slow falling pieces, multiple previewes, emphasis on T-Spin clears, and forgiving lock delays. Modern Tetris has had extremely prominent releases spanning two decades, such as Tetris DS, Tetris Friends, Tetris 99, and Tetris Effect.'
    container.appendChild(p)

    const hachi = new Image()
    hachi.src = dtImg
    container.appendChild(hachi)
}

export default displayModern