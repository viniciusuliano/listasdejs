let array = [1,2,3,4,5]

let procura = array.map((elemento) =>{
    if(elemento % 2 == 0){
        return 'Par'
    }else {
        return 'Impar'
    }
})

console.log(procura)