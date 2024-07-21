const imgs = [
    `https://sudotec.org.br/upload/projetos/p_89.jpg?202407152149`,
    `https://sudotec.org.br/upload/projetos/p_92.jpg?202407152149`,
    'https://sudotec.org.br/upload/projetos/p_85.jpg?202407172130',
    `https://sudotec.org.br/upload/projetos/p_88.jpg?202407211122`,
    `https://sudotec.org.br/upload/projetos/p_93.jpg?202407211122`,
    `https://sudotec.org.br/upload/projetos/p_90.jpg?202407211122`
]

let indexCarrossel = 0

function voltaImagem() {
    let imgCarrossel = document.getElementById(`imagem-carrossel`)

    indexCarrossel--

    if (indexCarrossel < 0) indexCarrossel = imgs.length - 1

    imgCarrossel.setAttribute(`src`, imgs[indexCarrossel])
}


function avancaImagem() {
    let imgCarrossel = document.getElementById(`imagem-carrossel`)

    indexCarrossel++

    if (indexCarrossel > imgs.length - 1) indexCarrossel = 0

    imgCarrossel.setAttribute(`src`, imgs[indexCarrossel])
}

setInterval(() => {
    avancaImagem()
}, 3000)
