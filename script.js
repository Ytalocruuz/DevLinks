function toggleMode() {
    const html = document.documentElement

    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    // Função abaixo  que engolba a funão de cima, para colocar no light modo. 

    html.classList.toggle('light')

    //  tenho que pegar a tag img 
    // substituir a imagem. 
    // se tiver light mode, adicionar a imagem light
    // se tiver sem light mode, manter a imagem normal. 

    const image = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        image.setAttribute('src', './assets/avatar.png')
    }else{
        image.setAttribute('src','./assets/avatar.png')
    }
    
}