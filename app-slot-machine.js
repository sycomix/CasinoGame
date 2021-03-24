// All of my constants to grab the html id's to be able to make the changes once they are clicked
const wallet = document.getElementById("withdrawl-wallet");
const addFive = document.getElementById("add-5");
const addFifty = document.getElementById("add-50");
const addHundred = document.getElementById("add-100");
const withDrawWallet = document.getElementById("wager");
const slot1 = document.getElementById("Pic1");
const slot2 = document.getElementById("Pic2");
const slot3 = document.getElementById("Pic3");
const startGame = document.getElementById("play");
const Bank = document.querySelectorAll(".stored-wallet")[0];
let playerWallet = 1000;
let takehomeWallet = []
let images = ['banana.png','orange.png','cherries.jpg', 'apple.png', 'lemons.jpg','pear.jpg','watermelon.png'];

// Slot machine play slot gets pressed and its a conditional statement
function slotMachine(){
  if(playerWallet <=5 ){ // If the player wallet is less than 5 
    return wallet.innerHTML = `Please Deposit at least $5 to play` // the function will stop and ask for $
  } else { //otherwise 
let randomPic1 = Math.floor(Math.random() * images.length);
let randomPic2 = Math.floor(Math.random() * images.length);
let randomPic3 = Math.floor(Math.random() * images.length);
// from the array of images i made in the images vairable it will give me a random image and then
slot1.src=`images/${images[randomPic1]}`
slot2.src=`images/${images[randomPic2]}`
slot3.src=`images/${images[randomPic3]}`
// calling my constants by id of the img id's and concatenating the source img with the random picture
if(randomPic1===randomPic2 && randomPic2===randomPic3){
  let msgWin = playerWallet +=50
  return wallet.innerHTML = `Congratulations You Won, now your wallet is at $${msgWin}`// if statement is winner
}else{
  let msgLoss =  playerWallet -=5;
  return wallet.innerHTML = `Now your wallet is at $${msgLoss}`
  }
}
}
// Functions to add to the player wallet by the amounts described 
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
// Function to withdraw money and return a balance of the amount
function withDraw() {
  takehomeWallet.push(playerWallet)
  const walletSum = () => takehomeWallet.reduce((num1,num2)=> num1 + num2)
  Bank.innerHTML = `Your withdrawl amounts are $${walletSum()}`
  let msgTaken = playerWallet -= playerWallet
  return wallet.innerHTML = `Now your wallet is at $${msgTaken}, If you would like to play again please add to the wallet`
}


// Onclick functions to allows the game to be interactive
startGame.onclick=()=>{
  slotMachine()
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



