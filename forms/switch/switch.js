//User inputs their name and the value is stored in the variable "firstName2"
let firstName2 = prompt("What is your first name?")

//User inputs the state they live in and the value is stored in the variable "state2"
let state2 = prompt("What state do you live in? (2 capitalized letters, NE or FL)")

//User inputs the temp outside and the value is stored in the variable "temp2"
let temp2 = prompt("What is the current temp outside? (Fahrenheit)")

//creates an array titled "messages2" that stores the messages
let messages2 = ['wear a warm coat, hat, scarf, and gloves.', 'wear a warm coat, but you won"t need a hat, scarf, or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

switch (true){
    case (state2 == "NE" && temp2 < 32):
        console.log(`${firstName2}, ${messages2[0]}`)
        break
    case (state2 == "NE" && temp2 >= 32 && temp2 <= 50):
        console.log(`${firstName2}, ${messages2[1]}`)
        break
    case (state2 == "FL" && temp2 >= 32 && temp2 <= 50):
        console.log(`${firstName2}, ${messages2[2]}`)
        break
    case (state2 == "FL" && temp2 >= 50 && temp2 <= 70):
        console.log(`${firstName2}, ${messages2[3]}`)
        break
    default:
        console.log(`Unable to give recommendation.`)
        break
}