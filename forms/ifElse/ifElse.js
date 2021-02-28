//User inputs their name and the value is stored in the variable "firstName"
let firstName = prompt("What is your first name?")

//User inputs the state they live in and the value is stored in the variable "state"
let state = prompt("What state do you live in? (2 capitalized letters, NE or FL)")

//User inputs the temp outside and the value is stored in the variable "temp"
let temp = prompt("What is the current temp outside? (Fahrenheit)")

//creates an array titled "messages" that stores the messages
let messages = ['wear a warm coat, hat, scarf, and gloves.', 'wear a warm coat, but you won"t need a hat, scarf, or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

//messages to output based on the state and temperature received from the user using if/else statements. There are 4 outcomes:
if (state == "NE" && temp < 32)
    console.log(`${firstName}, ${messages[0]}`)
else if (state == "NE" && temp >= 32 && temp <= 50)
    console.log(`${firstName}, ${messages[1]}`)
else if (state == "FL" && temp >= 32 && temp <= 50)
    console.log(`${firstName}, ${messages[2]}`)
else if (state == "FL" && temp >= 50 && temp <= 70)
    console.log(`${firstName}, ${messages[3]}`)
else
    console.log(`Unable to give recommendation.`)