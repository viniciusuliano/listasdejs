function mediaFinal(nota01, nota02){
    let media = (nota01 + nota02)/2
    if(media == 10){
        return 'Aprovado com distinção'
    }else if(media >= 7){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }

}


console.log(mediaFinal(10, 10))
console.log(mediaFinal(4, 4))
console.log(mediaFinal(7,8))