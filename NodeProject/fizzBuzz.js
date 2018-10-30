function fizzBuzz(x){
    let result = ""
    if (x % 3 == 0) result+="Fizz"
    if (x % 5 == 0) result+="Buzz"
    if(!result)     result = x
    return result
}

module.exports = fizzBuzz