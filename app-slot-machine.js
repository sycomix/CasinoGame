/*Slot machine game, Utilize above to be a base idea of what i want the program to give an output on 


const slotMachine = slot => {
let container = []; 
Object.keys(slot).forEach(key => {
for(let i = 0; i < slot[key]; i++) {
container.push(key);
} 
})
return container[(Math.random() * container.length) | 0];
}

const slots = {
"bannana,bannana,bannana" : 20,
"apple,apple,apple": 10,
"orange,orange,oragne": 30,
"apple,orange,bannana": 2000,
"orange,bannana,apple":3000,
"bannana,apple,orange":3000
}

weightedLottery(slots); */


/*

Use this kind of function below for sending out the amount in the wallet and
telling them they are a winner

function halfOf(num) {
return `Half of ${num} is ${num/2}`
}

halfOf(215);


/* 
Ideas and concepts needed to build for Slot Machine

Lottery Weighted /  Hangman / Diner Menu / 
JS Objects as Function Arguments / Object Deconstruction
Bind and 'this'/ MDN track score/ Class and Instance Methods
Callback,Asychronous functions/ Lodash random and Times/ Do While Loops for making sure the game is run/ 
Check is looping is best to keep game running/ Asynchrounous programming
*/




//below subject to change if an optimized way is found. 

// build a wallet for a player
let playerWallet = 1000; //starting the player off with $1000
const wallet = document.getElementById("withdrawl-wallet") 
let images = ['apple.jpeg','banana.png', 'orange.png']




function add5() {
  let msg5 =  playerWallet +=5;
  return wallet.innerHTML = `"Now your wallet is at" $${msg5}`
}

function add50() {
  let msg50 = playerWallet +=50
  return wallet.innerHTML = `"Now your wallet is at" $${msg50}`
}

function add100() {
  let msg100 = playerWallet +=100
  return wallet.innerHTML = `"Now your wallet is at" $${msg100}`
}

// 




// Adding winning to the wallet  make this an onclick

function addWinningToWallet(){
  //code to write
} 

// make this an onclick 
const winningWithdrawal = //code to write

// make this an onclick
function startGame(){
  // code to write
}


/*

allow for the wallet to be added if the player chooses to

allow for any winnings to be included into the wallet


if it goes empty allow for a button for them to add money into the wallet and allow 
it to be shown only if the wallet is empty, the game cant keep going if 


they need to be able to stop playing and cash out at any time


let the player se tthe dollar/cent amount of the bet(in the game)/

let them continue playing as long as they have money or decide to cash out. 

*/

