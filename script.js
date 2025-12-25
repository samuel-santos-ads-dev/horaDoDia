function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var rodape = window.document.getElementById('ano')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var ano = data.getFullYear()
    msg.innerText = `São ${hora} horas e ${minutos} minutos`
    rodape.innerText = ano
    if (hora >= 0 && hora < 12) {
        //Bomdia
        img.src = 'manha.png'
        window.document.body.style.background = '#683114'
    }
    else if (hora >= 12 && hora < 18){
        //Boatarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#d9a36d'
    }
    else{
        //Boa noite
        img.src = 'noite.png'
        window.document.body.style.background = '#3d3354'
    }
}
