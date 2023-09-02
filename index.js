import chalk from 'chalk';
import readlineSync from 'readline-sync'


var userName= ''
var score = 0

let users = [
  {
    username : "Dummy1",
    score: 3
  }
]

let questions = [
  {
    question : "What is the capital of India?",
    answer: "Delhi"
  },
  {
    question : "What is the Financial capital of India?",
    answer: "Mumbai"
  },
  {
    question : "Who is the prime minister of India?",
    answer: "Narendra Modi"
  },
  {
    question : "In which year India got independent?",
    answer: "1947"
  },
  {
    question : "What is the currency of India?",
    answer: "Rupee"
  }
]

const welcome = () =>{
  userName = readlineSync.question(chalk.bgWhiteBright.bold.magentaBright("Please enter your name "))
  console.log(chalk.blue("Welcome to the quiz game!", chalk.green(userName)))
  // checkUserDetails(userName)  
}

const checkUserDetails = (userName) =>{
  let existingScore = users.map(item => {
    if (item.username.toLowerCase()== userName.toLowerCase()){
      return item.score
    }
  })
  existingScore ? score = [...existingScore] : score = 0
}

const playGame = () =>{
  questions.map(item =>{
    gameLogic(item.question, item.answer)
  })

  displayScore()
}

const gameLogic = (question, answer) =>{
  let answerReceived = readlineSync.question(chalk.yellow(question))

  if (answerReceived.toLowerCase()==answer.toLowerCase()){
    score++;
    console.log(chalk.green("You are correct!! "))
  }else{
    console.log(chalk.red("You are wrong :( "))
  }
  console.log(chalk.magenta("---------------------------------"))
}

const displayScore = () =>{
  console.log(chalk.bold.whiteBright("Final Score is: ", score))
  if(score>users[0].score){
    console.log(chalk.bgYellow.bold.black("YAYYYY!! You have the highest score!! 🤑"))
  }else{
    console.log(chalk.bgYellow.bold.black("Better Luck Next Time 👍"))
  }
}

welcome()
playGame()

// -------------------------------------------------

//markTwo - Fandom quiz

// var marvelScore = 0;

// let marvelQuestions = 
//   [
//     {
//       question : "Which of the characters is NOT an original Avenger?",
//       answer: "Scarlet Witch"
//     },
//     {
//       question : "What's Captain America’s shield made of?",
//       answer: "Vibranium"
//     },
//     {
//       question : "What's Black Widow's actual name?",
//       answer: "Natasha Romanoff"
//     },
//     {
//       question : "How many Infinity Stones are there?",
//       answer: "Six"
//     },
//     {
//       question : "Who does Captain America give his shield to in Avengers: Endgame?",
//       answer: "Sam"
//     },
//     {
//       question : "What is Thor’s ax’s name that was created for him in Avengers: Infinity War?",
//       answer: "Stormbreaker"
//     },
//     {
//       question : "What is the name of the cube that Loki utilizes to power up his weapons?",
//       answer: "Tesseract"
//     },
//     {
//       question : "What’s the name of Tony Stark’s company?",
//       answer: "Stark Industries"
//     },
//     {
//       question : "What’s the name of Thor’s homeworld?",
//       answer: "Asgard"
//     },
//     {
//       question : "What is Agent Coulson’s first name?",
//       answer: "Phil"
//     }
//   ]
  
// const welcomeFan = () =>{
//   userName = readlineSync.question(chalk.bgRed.bold.black("Please enter your name "))
//   console.log(chalk.green("Welcome to the Marvel 🚀 quiz game!", chalk.green(userName)))
// }

// let shouldBreak = false;

// const playMarvelGame = () =>{
//   marvelQuestions.map((item ,index)=>{
//       if (shouldBreak) return;
//       if (index==5 && marvelScore<4){
//         console.log(chalk.bgBlue.bold.white("You've finished Level 1"))
//         shouldBreak = true
//       }
//       else{
//           if (index==5 && marvelScore>=4){
// console.log(chalk.bgWhiteBright.bold.magentaBright("Congratulations!! You've completed level 1!! Be ready for level 2! 👾"))
//           }
//         marvelLogic(item.question, item.answer) 
//       }
//   })

//   displaymarvelScore()
// }

// const marvelLogic = (question, answer) =>{
//   let answerReceived = readlineSync.question(chalk.yellow(question))

//   if (answerReceived.toLowerCase()==answer.toLowerCase()){
//     marvelScore++;
//     console.log(chalk.green("You are correct!! "))
//   }else{
//     console.log(chalk.red("You are wrong :( "))
//   }
//   console.log(chalk.magenta("---------------------------------"))
// }

// const displaymarvelScore = () =>{
//   console.log(chalk.bold.whiteBright("Final Score is: ", marvelScore))
//   if(marvelScore>6){
//     console.log(chalk.bgYellow.bold.black("YAYYYY!! You have the highest score!! 🤑"))
//   }else{
//     console.log(chalk.bgYellow.bold.black("Better Luck Next Time 👍"))
//   }
// }

// welcomeFan()
// playMarvelGame() 