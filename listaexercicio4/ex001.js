function hipotenusa(catetoA, catetoB){
    let calculoHipotenusa = Math.sqrt((catetoA **2) + (catetoB **2))
    return (calculoHipotenusa.toFixed(2))
}


console.log(hipotenusa(10, 10))