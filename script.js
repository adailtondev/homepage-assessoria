var botaoVerMais = document.querySelector('.botao-vermais')
var textoSobreNos = document.querySelector('.texto-sobre')

botaoVerMais.addEventListener('click', () => {
    if (textoSobreNos.style.height === 'auto') {
        textoSobreNos.style.height = '350px'
        botaoVerMais.innerHTML = 'Ver mais'
    }else {
        textoSobreNos.style.height = 'auto'
        botaoVerMais.innerHTML = 'Ver menos'
    }
})