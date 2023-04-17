let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
//console.log(countEl)
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
   // document.getElementById("count-el").innerHTML=count
   
}
function save(){
    let newCount =  + count + " - " 
    saveEl.textContent += newCount
    countEl.innerText=0
    count=0
}

welcomeEl = document.getElementById('welcome-el')
//console.log(welcomeEl)
let name  = "John" 
let greetings = 'Hi, my name is'
let emoji = '👋'
let myGreating = greetings + ' ' + name + emoji
welcomeEl.innerText= myGreating


let nam = 'linda'
let great = ' hi, there'

function greet() {
    var grtnm=nam+great
    console.log(grtnm)
}
greet()


// let firstName = ' John '
// let SecondName = ' Wachira '

// let fullName = firstName + SecondName

// console.log(fullName)



// let name = 'John'
// let greetings = 'Hi, my name is'
// let myGreating = greetings + ' ' + name + '!'
// console.log(myGreating)


// let message = "You have 3 new notifications"
// let username = "Per"
// messageToUser = username +', '+ message + '!'
// console.log(messageToUser)




// let LapsCompleted = 0;
// function laps(){
    
//     LapsCompleted = LapsCompleted + 1
//     console.log(LapsCompleted)
//     LapsCompleted = LapsCompleted + 1
//     console.log(LapsCompleted)
//     LapsCompleted = LapsCompleted + 1
//     console.log(LapsCompleted)
// }
// laps()
// laps()
// laps()




// function numb(){
//     console.log(42)
// }
// numb()


// let lap1 = 30;
// let lap3 = 40;
// let lap4 = 50;

// function sum(){
//     total = lap1+lap3+lap4
//     console.log(total)
// }
// sum()
// let myage=24
// let dogage=7
// let mydogage=myage*dogage
// console.log(mydogage)

// let bonusPoints = 50;
// console.log(bonusPoints)
// bonusPoints=bonusPoints+50;
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75;
// console.log(bonusPoints)
// bonusPoints=bonusPoints + 45;
// console.log(bonusPoints)

