// question 1

var sum = items.reduce(function(a,b){
    return a + b.price
}, 0)

var avg = sum / items.length

document.querySelector("#answer1").innerHTML = `The average price is $${avg.toFixed(2)}`

////////////////////////////////////////////////////////////////
// question 2

var costBetween = items.filter(function(item){
    if(item.price > 14 && item.price < 18){
        return true
    }else{
        return false
    }
}).map(function(item){
    return item.title
}).join("<br><br>")
 

document.querySelector("#answer2").innerHTML = `${costBetween}`

////////////////////////////////////////////////////////////////
// question 3

var result = items.filter(function(item){
    if(item.currency_code = "GBP"){
        return true
    }else{
        return false
    }
})[0]

console.log(result);

document.querySelector("#answer3").innerHTML = `${result.title}&pound;${result}`


////////////////////////////////////////////////////////////////
// question 4

var wood = items.filter(function(item){
    if(item.materials.includes('wood')){
        return true
    }else{
        return false
    }
})


document.querySelector("#answer4").innerHTML =${}


////////////////////////////////////////////////////////////////
// question 5

var mat= items.filter(function(item){
    if(item.material.length >= 8){
        return true
    }else{
        return false 
    }
})


////////////////////////////////////////////////////////////////
// question 6

var who = items. filter(function(item){
    if(item.material.who_made = "i_did"){
        return true
    }else{
        return false
    }

})


