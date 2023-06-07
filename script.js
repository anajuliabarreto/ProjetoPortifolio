function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //OUTRA FORMA
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

/*
    SE FOR TROCAR A IMAGEM
    // pegar
    const img = document.querySelector("#profile img")

    // substituir
    if (html.classList.contains('light')) {
        // se tiver light mode, aicionar a imagem light
        img.setAttribute('src', './endereço da imagem')
    } else {
        // se tiver sem light mode, manter a imagem 
        img.setAttribute('src', './endereço da imagem que já tinha')
    }
*/
}