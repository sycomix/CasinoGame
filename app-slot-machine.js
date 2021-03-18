const wallet = document.getElementById("withdrawl-wallet");
const slotPics = document.getElementById("slot-images");
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
let images = ['apple.jpg','banana.png', 'orange.png'];


function slotMachine(){
  if(playerWallet <=5 ){ 
    return wallet.innerHTML = `Please Deposit at least $5 to play`
  } else {
let randomPic1 = Math.floor(Math.random() * images.length);
let randomPic2 = Math.floor(Math.random() * images.length);
let randomPic3 = Math.floor(Math.random() * images.length);

slot1.src=`images/${images[randomPic1]}`
slot2.src=`images/${images[randomPic2]}`
slot3.src=`images/${images[randomPic3]}`

if(randomPic1===randomPic2 && randomPic2===randomPic3){
  let msgWin = playerWallet +=50
  return wallet.innerHTML = `Congratulations You Won, now your wallet is at $${msgWin}`
}else{
  let msgLoss =  playerWallet -=5;
  return wallet.innerHTML = `Now your wallet is at $${msgLoss}`
  }
}
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



