const botao = document.getElementById('botao').addEventListener('click', ()=>{
    let entrada = Number(document.getElementById('entrada__dados').value)
    let diferencaIngresso = 170 - entrada
    let resultado = document.getElementById('resultado')
    resultado.textContent = `A diferença entre os valores é: ${diferencaIngresso} VALOR PAGO: $170,00
    VALOR RECEBIDO: ${entrada} `
    resultado.style.textAlign = 'center'
})  