//#if else example

// let firstCard = 12
// let scondCard = 10

// let sum = firstCard + scondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// } else {
//     console.log("You're out of the game 😭")
// }

// let age = 21

// if (age >= 21) {
//     console.log("Welcome!")
// } else {
//     console.log("You can not enter the club!")
// }

// let age = 105

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not elgible, you have already gotten one")
// }

// #boolean
// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   //  true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// #Arrays
// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// // console.log( experience [1] )
// // console.log( experience [2] )
// // console.log( experience [0] )

//---------------------------------------------------------------------

// let cards = [7, 4]
// cards.push(6)
// //console.log(cards)

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.pop()

// console.log(messages)

// ---------------------------------------

// #for loop
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 10;  count <= 20;  count += 1 )  {
    
//     console.log(count)

// }

// ----------------------------------

// for (let i = 10; i<= 100; i += 10) {
//     console.log(i)
// }

// ----------------------------------

// #for loop + arrays
// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "🙌"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length; i ++) {
//     console.log(messages[i])
// }

// ----------------------------------

// # returning a vaule
//let playr1 = 102
// let playr2 = 107

// function RaceTime() {
//     if (playr1 < playr2) {
//         return playr1
//     } else if (playr2 < playr1) {
//         return playr2
//     } else {
//         return playr1
//     }
// }

// function TotulRaceTime() {
//     return playr1 + playr2
// }

// let sum7 =  RaceTime()

// console.log(sum7)

// --------------------------------------

// #The logical AND operator
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse && givesCertificate) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }
// ------------------------------------------------
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (hasSolvedChallenge && hasHintsLeft ) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// ------------------------------------

// #The logical OR operator
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true
// let likesStartups = fauls

// if (likesDocumentaries === true || likesStartups === true ) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// ------------------------------------------------------------------------------------


// Objects - store data in-depth - composite / complex data type
// key-value pairs

let player = { // Difining an Opject in JS
    name: "Ozy", // insted of (let) we difining two varubls like that
    chips: 200
}


let cards = [] // array - ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let Player = document.getElementById("player-el")

Player.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    
    // if 1     -> return 11
    // if 11-13 -> return 10

    let randomNum = Math.floor( Math.random()* 13 ) + 1
    if (randomNum > 10 ) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}


function renderGame() {
    
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to draw a new card?")
    } else if (sum === 21) {
        message = ("You've got Blackjack!")
        hasBlackjack = true
    } else {
        message = ("You're out of the game!")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}













