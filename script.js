var botaoVerMais = document.querySelector('.botao-vermais')
var textoSobreNos = document.querySelector('.texto-sobre')

botaoVerMais.addEventListener('click', () => {
    if (textoSobreNos.style.height === 'auto') {
        textoSobreNos.style.height = '350px'
    }else {
        textoSobreNos.style.height = 'auto'
        botaoVerMais.innerHTML = 'Ver menos'
    }
})