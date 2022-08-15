const quizData = [
  {
    question: "What is the name of your dog?",
    a: "Champ",
    b: "Buster",
    c: "Sarge",
    d: "Mowglie",
    correct: "d",
  },
  {
    question: "What is the best programming language?",
    a: "JavaScript",
    b: "Python",
    c: "Go",
    d: "Rust",
    correct: "a",
  },
  {
    question: "What is for dinner?",
    a: "Thai",
    b: "Pho",
    c: "Sushi",
    d: "Tacos",
    correct: "a",
  },
  {
    question: "What is the best island in the Marianas?",
    a: "Saipan",
    b: "Tinian",
    c: "Guam",
    d: "Rota",
    correct: "c",
  },
  {
    question: "Where are you traveling to next?",
    a: "Bali",
    b: "South Korea",
    c: "Vietnam",
    d: "Taiwan",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

//call every time submit to load q&a
loadQuiz();

function loadQuiz() {
  //call to deselect previous answer location
  deselectAnswers();

  //put quiz question into variable to keep track iot move to next one after submitting
  const currentQuizData = quizData[currentQuiz];
  //maps html id to JS array items
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

//keep track of answers
function getSelected() {
  //initialize variable as undef
  let answer = undefined;

  //loop through answers of array items, if object element answer checked is truthy, 
  //answer variable = array object[element] answer
  answerEls.forEach((answerEl) => {
    //console.log(answer.checked)
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check the answer
  const answer = getSelected();

  //console.log(answer)

  //if answer is correct and if answer matches array 'correct', increment score
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    //move to next question
    currentQuiz++;
    //if haven't reached the end of the quiz, keep calling/loading new question 
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //Show results & offer reload of quiz
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
