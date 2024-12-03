const questions = [
  {
    question: "What is your name?",
  },
  {
    question: "How old are you?",
  },
  {
    question: "What type of music do you like",
  },
];
const survey = document.querySelector(".survey");
const questionContainer = document.getElementById("question-container");
const answer = document.getElementById("answer");
const nextButton = document.getElementById("next-button");
const title = document.getElementsByClassName("title");
const done = document.getElementById("done");
const reply = document.querySelector(".reply");
const greething = document.querySelector(".greething");
let currentQuestionIndex = 0;
reply.classList.add("hide");

function begining() {
  reply.classList.add("hide");
  questionContainer.textContent = "";
  answer.textcontent = "";
  currentQuestionIndex = 0;
  questionContainer.textContent = questions[currentQuestionIndex].question;
}

//function to display the questions
function displayQuestion() {
  //choose the question
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
}

displayQuestion();

//action for next button
nextButton.addEventListener("click", () => {
  const currentQuestion = questions[currentQuestionIndex];
  //assign the current input
  let currentAnswer = answer.value;
  //add the answer to the object
  currentQuestion.answer = currentAnswer;
  console.log(currentQuestion);
  //move to next question
  currentQuestionIndex++;
  //display question until the end
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    begining();
    survey.classList.add("hide");
    displayGreething();
  }
  answer.value = "";
  console.log(currentQuestionIndex);
});
function displayGreething() {
  reply.classList.remove("hide");
  survey.classList.add("hide");
  greething.innerHTML = `Hello 
  ${
    questions[0].answer.charAt(0).toUpperCase() + questions[0].answer.slice(1)
  }, 
  ${questions[2].answer} is a nice music test for ${
    questions[1].answer
  } years old.`;
}
done.addEventListener("click", function () {
  reply.classList.add("hide");
  survey.classList.remove("hide");
  console.log(currentQuestionIndex);
});
