function aprovado(nota1, nota2){
    let media = (nota1 + nota2) / 2
    if(media >= 6){
        return "PARABÉNS! Você foi aprovado!"
    }else{
        return ''
    }
}

console.log(aprovado(10,10))
console.log(aprovado(4, 4))