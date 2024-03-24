const botao = document.getElementById('botao').addEventListener('click', ()=>{
    let entrada = Number(document.getElementById('twetts').value)
    let resultado = document.getElementById('resultado')
    let calculo = (entrada * 20) * 4
    resultado.textContent = `${calculo}`
})