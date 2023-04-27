// Define the quiz questions and answers as an object
const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      answer: "Paris"
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific"
    },
    {
      question: "Who is the founder of Microsoft?",
      options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
      answer: "Bill Gates"
    }
  ];
  
  // Get references to the quiz container and submit button elements
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  
  // Render the quiz questions and options in the HTML
  function renderQuiz() {
    // Loop through the quiz questions and create a new question element for each question
    for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];
  
      // Create a new question element with the question text
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `<h2>${question.question}</h2>`;
  
      // Loop through the question options and create a new option element for each option
      for (let j = 0; j < question.options.length; j++) {
        const option = question.options[j];
  
        // Create a new option element with the option text
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
  
        // Add a click event listener to the option element to check the answer
        optionElement.addEventListener('click', () => {
          checkAnswer(question, option);
        });
  
        // Add the new option element to the question element
        questionElement.appendChild(optionElement);
      }
  
      // Add the new question element to the quiz container
      quizContainer.appendChild(questionElement);
    }
  }
  
  // Check the user's answer and update the score
  function checkAnswer(question, answer) {
    // Disable all the option buttons in the current question
    const options = quizContainer.querySelectorAll('button');
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  
    // Check the user's answer and update the score
    if (answer === question.answer) {
      quizContainer.querySelector('h2').classList.add('correct');
    } else {
      quizContainer.querySelector('h2').classList.add('incorrect');
    }
  }
  
  // Render the quiz questions and options when the page loads
  renderQuiz();
  
  // Add a click event listener to the submit button to show the score
  submitButton.addEventListener('click', () => {
    // Get all the correct answer elements and count them
    const correctAnswers = quizContainer.querySelectorAll('.correct');
    const score = correctAnswers.length;
  
    // // Disable all the option buttons
    // const options = quizContainer.querySelectorAll('button');
    // for (let i = 0; i < options.length; i++) {
    //   options[i].disabled = true;
    // }
  
    // Display the score to the user
    quizContainer.innerHTML = `<h2>Your score is ${score}/${quiz.length}</h2>`;
  });
  