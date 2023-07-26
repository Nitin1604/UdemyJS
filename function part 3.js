console.log('Functions calling other functions')

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    
    const juice = `Juice with ${applesPieces} piece of apple and ${orangePieces} piece of orange are ready to drink`
    return juice
}
console.log(fruitProcessor(4,1))
