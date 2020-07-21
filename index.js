// ⭐️ Example Challenge START ⭐️
 
/**
* ### Challenge `processFirstItem`
*
* @instructions
* Implement a higher-order function called `processFirstItem`.
* It takes two arguments:
* @param stringList an array of strings.
* @param callback function that takes a string as its argument.
* @returns the result of invoking `callback` with the FIRST element in `stringList`.
*
* Example of usage of this higher-order function:
* Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
* should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
 }
  
 // ⭐️ Example Challenge END ⭐️
  
  
 ///// M V P ///////
  
 /* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  count 2 is more space then count 1 as well count 1 has to returns
 * 2. Which of the two uses a closure? How can you tell?
 *  counterMaler
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 */
  
 // counter1 code
 function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
 }
  
 const counter1 = counterMaker();
  
 // counter2 code
 let count = 0;
  
 function counter2() {
  return count++;
 }
  
  
 /* Task 2: inning()
  
 Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
  
 function inning(/*Code Here*/){
  
    /*Code Here*/
  
 }
  
 /* Task 3: finalScore()
  
 Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
  
 For example,
  
 finalScore(inning, 9) might return:
 {
  "Home": 11,
  "Away": 5,
 }
  
 */
  
 function finalScore(inningFunc, numInnins){
  let home= 0
  let away = 0
  for(let i = 0; i = <numInnins; i++){
    home  = home + inningFunc();
    away = away + inningFunc();
  
  }
  return {"Home": home, "Away":away}
 }
 console.log (finalScore(inning, 9))
 /* Task 4:
  
 Create a function called `scoreboard` that accepts the following parameters:
  
 (1) Callback function `inning` that you wrote above
 (2) A number of innings
  
 and returns the score at each pont in the game, like so:
  
 1st inning: 0 - 2
 2nd inning: 1 - 3
 3rd inning: 1 - 3
 4th inning: 2 - 4
 5th inning: 4 - 6
 6th inning: 4 - 6
 7th inning: 4 - 6
 8th inning: 5 - 8
 9th inning: 6 - 10
  
 Final Score: 6 - 10 */
  
 function scoreboard(getInningScroe,inning numInnins) {
  let scroes = {home: 0, away:0}
  let scoresText =
  for (let i=0; i<numInnins; i++)
    let score = getInningScroe(inning)
    scores.home = scores.home + scores.Home
    scores.away = scores.away +scores.Away
    if(i===0){
      scoreText = `1st inning: ${scores.away}- ${scores.home}\n`
    } else if (if===1){
      scoresText = scoresText + `2nd inning ${scores.away}${scores.home}\n`
    } else if (i===2){
      scoresText = scoresText + `3rd inning ${scores.away}- ${scores.home}\n`
    }else {
      scoresText = scoresText + `${i+1}th inning ${scores.away}- ${scores.home}\n`
    }if (i+1===numInnins){
      score = getInningScroe(inning)
      scores.home = scores.home + score.Home
      scores.away = scores.away + score.Away
        scoreeText = scoreText + `Final Score ${scores.away}-${scores.home}\n`
    }
  
    }
    return scoreText
 }
 console.log(scoreboard(getInningScroe, inning, 9))
  
 function finalScore(inningFunc, numInnins){
  let home= inning()
  let away = innings()
  for(let i = 0; i = <numInnins; i++){
    home  = home + inningFunc();
    away = away + inningFunc();
    return final ={Home: home, Away: away}
  }
  console.log (finalScore(inning, 9))
 
 