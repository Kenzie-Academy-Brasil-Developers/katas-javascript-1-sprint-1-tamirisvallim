function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
    let number = []
    for (let n = 1; n <= 20; n++){
      number.push (n)
     }
    return number
}
    console.log (oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
  let evenNumber = []
    for (let e =1; e <= 20; e++){
    if (e % 2 === 0)
      evenNumber.push (e)
    }
    return evenNumber
  }
console.log (evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let oddNumber = []
  for (let e =1; e <= 20; e++){
  if (e % 2 !== 0)
    oddNumber.push (e)
  }
  return oddNumber
}
console.log (oddsToTwenty())


//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
let multiples = []
    for (let m =5; m <= 100; m = m + 5){
      multiples.push (m)
    }
    return multiples
  }
console.log (multiplesOfFive())


//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
    let square = []
    for (let s = 1; s <= 10; s++ ){
      square.push (s * s) === square
    }
    return square
}
  console.log (squareNumbers())

//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let countingback = []
  for (let c = 20; c > 0; c--){
    countingback.push (c)
  }
  return countingback
}
  console.log (countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let evenBack = []
  for (let eB = 20; eB >0; eB--){
    if (eB % 2 === 0)
    evenBack.push (eB)
  }
  return evenBack
}
  console.log (evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let oddBack = []
  for (let oB = 20; oB > 0; oB--){
    if (oB % 2 !== 0)
    oddBack.push (oB)
  }
  return oddBack
}
  console.log (oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let multiplesBack = []
  for (let mB = 100; mB >= 5; mB = mB-5){
   multiplesBack.push (mB) 
  }
  return multiplesBack
}

  console.log (multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let squareBack = []
  for (let sB = 10; sB > 1; sB--){
    squareBack.push (sB * sB)
  }
    return squareBack
}
console.log (squareNumbersBackwards())

//call function squareNumbersBackwards

//Não consegui utilizar nenhuma  while, eu tentei varias formas. 
//Só consegui utilizar fora da funçao.
