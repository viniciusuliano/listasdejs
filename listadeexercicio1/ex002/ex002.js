document.getElementById('botao').addEventListener('click', ()=>{
    let entrada = Number(document.getElementById('dias').value)
    let soma = entrada * 8
    let resultado = document.getElementById('resultado')
    resultado.textContent = `NUMERO DE CURTIDAS: ${soma}`

})