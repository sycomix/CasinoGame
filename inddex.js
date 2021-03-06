const deckOfCards = {
    2: ['diamond', 'spade', 'hearts', 'clubs'],
    3: ['diamond', 'spade', 'hearts', 'clubs'],
    4: ['diamond', 'spade', 'hearts', 'clubs'],
    5: ['diamond', 'spade', 'hearts', 'clubs'],
    6: ['diamond', 'spade', 'hearts', 'clubs'],
    7: ['diamond', 'spade', 'hearts', 'clubs'],
    8: ['diamond', 'spade', 'hearts', 'clubs'],
    9: ['diamond', 'spade', 'hearts', 'clubs'],
    10: ['diamond', 'spade', 'hearts', 'clubs'],
    Ace: ['diamond', 'spade', 'hearts', 'clubs'],
    Jack: ['diamond', 'spade', 'hearts', 'clubs'],
    Queen: ['diamond', 'spade', 'hearts', 'clubs'],
    King: ['diamond', 'spade', 'hearts', 'clubs'],
  }
  
  // console.log(deckOfCards);
  
  
  function poker(obj) {
    let wholeDeck = Object.entries(obj);
    return wholeDeck
  }
  
  
  
  // function poker(obj){
  // for (const [key, value] of Object.entries(obj)) {
  //   console.log(`${key}: ${value}`);
  //   }
  // }
  
      // traverse it to only 4 random keys and value pairs
    
    // then choose 4 random values
    //then I want to pull those 4 and display in a string to say these are your cards 
    // I want to return 4 random key value pairs from the object deckOfCards 
  
  
  poker(deckOfCards);