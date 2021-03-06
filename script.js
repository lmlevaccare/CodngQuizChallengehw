var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var imgEl = document.createElement("img");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
           secondsLeft--;
    timeEl.textContent =  secondsLeft + " Seconds Left";
 


    if(secondsLeft === 0) {
      clearInterval(timerInterval)

    
      sendMessage();
    }

  }, 1000);
}



function sendMessage() {
  timeEl.textContent = " GAME-OVER";
  // var imgEl = document.createElement("img");

  // imgEl.setAttribute("src", "images/image_1.jpg");
  // mainEl.appendChild(imgEl);

}






setTime();



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const gameOver = document.getElementById('game-over')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct ) {
      button.dataset.correct = answer.correct 
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  
  }
 
 
  
}

  

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What are the different levels of headings in HTML? ',
    answers: [
      { text: '1-6', correct: true },
      { text: '2-4', correct: false },
      { text: '2-8', correct: false },
      { text: '1-4', correct: false }

    ]
  },
  {
    question: 'Where is the text of the title tag displayed?' ,
    answers: [
      { text: 'title bar', correct: true },
      { text: 'body tag', correct: false },
      { text: 'nav bar', correct: false },
      { text: 'script tag', correct: false }
    ]
  },
  {
  question: 'How can you remove an item by index position?',
    answers: [
      { text: 'Splice', correct: true},
      { text: 'IDK', correct: false },
      { text: 'for loop', correct: false },
      { text: 'hop', correct: false }
    ]
  },
  {
    question: 'Java Source Code is compiled into?',
    answers: [
      { text: 'html5', correct: false },
      { text: 'Exe', correct: false },
      { text: 'Obj', correct: false },
      { text: 'Bytecode', correct: true }
    ]
  },
  {
    question: ' What is the worlds most popular programming language?',
    answers: [
      { text: 'html5', correct: false },
      { text: 'Java Script', correct: true },
      { text: 'CSS', correct: false },
      { text: 'jQuery', correct: false }
    ]
  },
  {
    question: 'What special variable can hold more than one value at a time?',
    answers: [
      { text: 'array', correct: true },
      { text: 'purse', correct: false },
      { text: 'jar', correct: false },
      { text: 'box', correct: true }
    ]
  },
  {
    question: 'Is web development hard?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which tool is used to compile java code?',
    answers: [
      { text: 'jar', correct: false },
      { text: 'Obi', correct: false},
      { text: 'javac', correct: true },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Arrays begin at what position?',
    answers: [
      { text: '2', correct: false },
      { text: '0', correct: true },
      { text: '1', correct: false },
      { text: '10', correct: false }
    ]
 

  }
]


var count = 0;
var incrementEl = document.querySelector("#answer-buttons");
var decrementEl = document.querySelector(".btn");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
  if (incrementEl) "click", function () {
    count++;
  }
}
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

decrementEl.addEventListener("click", function() {
  if(count > 0) {
    count--;
    setCounterText();
  }
}); 

  
