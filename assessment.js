const numbers = [2,3,5,6,8]
const cards = ['Jack', 'Queen', 'King']

const printSequence =()=>{
    let result = [];
    for (let i = 0; i < numbers.length + cards.length; i++){
        if(i < numbers.length){
            result.push(numbers[i]);
        }
        else{
            result.push(cards[i - numbers.length]);
        }
    }
    result.splice(7, 0 , "Queen")
    result.push("King")
    console.log(result)
    
}

printSequence()