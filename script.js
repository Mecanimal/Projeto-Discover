function ToggleMode(params) {
    const html=document.documentElement
    html.classList.toggle('light')

    const img=document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', 'assets/assets/avatar-light.png')
        img.setAttribute('alt', 'QUE TIPO DE PESSOA USA LIGHT MODE?')
    } else {
        img.setAttribute('src', 'assets/assets/avatar.png')
        img.setAttribute('alt', 'literalmente o mayk brito')
    }
}