const botao = document.getElementById('botao').addEventListener('click', ()=>{
    let notas = Number(document.getElementById('notas').value)
    let twittes = Number(document.getElementById('qtd__twetts').value)
    let resultado = document.getElementById('resultado')
    if(twittes == 100){
        let descontoPor100 = notas - 1
        resultado.textContent = `${descontoPor100}`
    }else if(twittes == 200){
        let descontoPor200 = notas - 2
        resultado.textContent = `${descontoPor200}`
    }else if(twittes == 300){
        let descontopPor300 = notas - 3
        resultado.textContent = `${descontopPor300}`
    } else if(twittes == 400){
        let descontopPor400 = notas - 4
        resultado.textContent = `${descontopPor400}`
    } else if(twittes == 500){
        let descontopPor500 = notas - 5
        resultado.textContent = `${descontopPor500}`
    } else if(twittes == 600){
        let descontopPor600 = notas - 6
        resultado.textContent = `${descontopPor600}`
    } else if(twittes == 700){
        let descontopPor700 = notas - 7
        resultado.textContent = `${descontopPor700}`
    } else if(twittes == 800){
        let descontopPor800 = notas - 8
        resultado.textContent = `${descontopPor800}`
    } else if(twittes == 900){
        let descontopPor900 = notas - 9
        resultado.textContent = `${descontopPor900}`
    } else if(twittes == 1000){
        let descontopPor1000 = notas - 10
        resultado.textContent = `${descontopPor1000}`
    } 
})

