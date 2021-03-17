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


const wallet = document.getElementById("withdrawl-wallet");
const slotPics = document.getElementById("slot-images");
const addFive = document.getElementById("add-5");
const addFifty = document.getElementById("add-50");
const addHundred = document.getElementById("add-100");
const withDrawWallet = document.getElementById("wager");
const slot1 = document.getElementById("pic1");
const slot2 = document.getElementById("pic1");
const slot3 = document.getElementById("pic1");
let playerWallet = 1000;
let images = ['apple.jpeg','banana.png', 'orange.png'];

// Maybe the below will be used 

/*
const orange = <img src="images/orange.png" width="300" height="300"></img>;
const apple =  <img src="images/apple.jpg" width="300" height="300"></img>;
const banana =  <img src="images/banana.png" width="300" height="300"></img>;
*/
// How I get random pictures in the slots 
let randomPic1 = images[Math.floor(Math.random() * images.length)];
let randomPic2 = images[Math.floor(Math.random() * images.length)];
let randomPic3 = images[Math.floor(Math.random() * images.length)];


// create something to tie the document to the img slots because they need

if(randomPic1===randomPic2 && randomPic2===randomPic3){
  console.log("Win"); // Write a function to make sure that you win and add it to the wallet  
}else{
  console.log("Lose"); // Write a function to make sure that you lose money once you play 
}


function add5() {
  let msg5 =  playerWallet +=5;
  return wallet.innerHTML = `Now your wallet is at $${msg5}`
}

function add50() {
  let msg50 = playerWallet +=50
  return wallet.innerHTML = `Now your wallet is at $${msg50}`
}

function add100() {
  let msg100 = playerWallet +=100
  return wallet.innerHTML = `Now your wallet is at $${msg100}`
}
function withDraw() {
  // withDrawWallet.innerHTML = `Your balance is ${playerWallet}`
  let msgTaken = playerWallet -= playerWallet
  return wallet.innerHTML = `Now your wallet is at $${msgTaken}, If you would like to play again please add to the wallet`
}

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

addFive.onclick=()=>{
  add5();
}
addFifty.onclick=()=>{
  add50();
}
addHundred.onclick=()=>{
  add100();
}
withDrawWallet.onclick=()=>{
  withDraw();
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

