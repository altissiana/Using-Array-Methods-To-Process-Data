//1. What is the average price of all items?

var avg = items.reduce((a, b) => a + b.price, 0) / items.length

document.querySelector("#answer1").innerHTML = `The average price is $${avg.toFixed(2)}`

//2. Show me an array of items that cost between $14.00 and $18.00 USD?

var costBetween =
    items.filter(item => item.price < 18 && item.price > 14 && item.currency_code
        === "USD").map(item => item.title).join("\n\n")

document.querySelector("#answer2").innerHTML = costBetween

//3. Which item has a "GBP" currency code? Display it's name and price.

var gbpitem =
    items.filter(item => item.currency_code === "GBP")[0]

document.querySelector("#answer3").innerHTML = `${item.title} cost &pound;${gbpitem.price}`

//4. Display a list of all items who are made of wood.

var wooditems =
    items.filter(item => item.materials.includes("wood")).map(item.title + "is made of wood.")
        .join("\n\n")

document.querySelector("#answer4").innerHTML = wooditems

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightormore =
    items
        .filter(item => item.materials.length >= 8)
        .map(item => `${item.name} has ${item.materials.length} materials:<br>${item.materials.join("<br>")}`)
        .join("<br><br>")

document.querySelector("#answer5").innerHTML = eightormore

//6. How many items were made by their sellers?

var madebysellers = items.filter(item => item.who_made === "i_did").length

document.querySelector("#answer6").innerHTML = `${madebysellers} were made by their sellers`
