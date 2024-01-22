const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
 "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers =["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() { 
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {
  let score = 0;

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(`Question ${i + 1}: Correct`);
      score++;
    } else {
      console.log(`Question ${i + 1}: Incorrect, the correct answer is ${correctAnswers[i]}`);
    }
  }
  
  let grade = (score / questions.length) * 100;
  console.log(`Your final grade is ${grade}% (${score} out of ${questions.length} correct)`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestions();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};