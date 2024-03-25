let array = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]
let arraypositivos = []
let arrayNegativos = []
let somaDasMedias = 0
let procura = array.map((elemento) =>{
    if(elemento < 0){
        return arrayNegativos.push(elemento)
    }else if(elemento > 0){
        arraypositivos.push(elemento)
        somaDasMedias += elemento
    }
})

let media = somaDasMedias / arraypositivos.length

console.log(arrayNegativos)
console.log(arraypositivos)
console.log(somaDasMedias)
console.log(media)