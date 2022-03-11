var readlineSync = require('readline-sync');
var score = 0;
function ask(question , answer) {
  var yourAnswer = readlineSync.question(question);
  if (yourAnswer == answer)
    console.log("you are right " + "\n" + "youe score =" + ++score + "\n -------------");
  else
    console.log("you are wrong " + "\n" + "youe score =" + score + "\n -------------");
}
var game = [{ question: "what is captial of india? \n your options \n delhi , mumbai, kolkata, chennai \n enter your answer here = ", answer: "delhi" },
{ question: "what is currency of india ? \n your options \n  dollor , yen , rupees , ruble \n ", answer: "rupees" },
{ question: " how many colour are in our national flag ?\n your options \n 8 , 2, 6 ,3 \n enter your answer here = ", answer: "3" },
{ question: "how many colour are in rainbow? \n your options \n 7 , 4 , 13 , 9 \n enter your answer here = ", answer: "7" },]
for (var i = 0; i < game.length; i++) {
  var currentquestion = game[i];
  ask(currentquestion.question, currentquestion.answer);
}
console.log("yeah!!! you scored= " + score+"/4");