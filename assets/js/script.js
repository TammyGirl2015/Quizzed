// Define your questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        answers: ["Paris", "Berlin", "Madrid", "London"],
        correctAnswer: "Berlin"
    },
    {
        question: "Which element has the symbol 'H?'",
        answers: ["Holmium", "Helium", "Hafnium", "Hydrogen"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "In which year did World War II end?",
        answers: ["1941", "1945", "1942", "1944"],
        correctAnswer: "1945"
    },
    {
        question: "What is the largest planet in our solar system",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "JD Salinger", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["Japan", "China", "South Korea", "Taiwan"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["G", "Au", "Go", "Gold"],
        correctAnswer: "Au"
    },
    {
        question: "Which composer wrote the 'Four Seasons'?",
        answers: ["Beethoven", "Mozart", "Vivaldi", "Bach"],
        correctAnswer: "Vivaldi"
    },
    {
        question: "What is the square root of 144?",
        answers: ["6", "13", "14", "12"],
        correctAnswer: "12"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: ["Carbonate", "Carbon", "Co", "C"],
        correctAnswer: "C"
    },
    {
        question: "Which is the loongest river in the world?",
        answers: ["Amazon", "Mississippi", "Yangtze", "Nile"],
        correctAnswer: "Nile"
    },
    {
        question: "Who is the author of '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the name of the rocess that turns sugar into alcohol?",
        answers: ["Carbonation", "Fermentation", "Condensation", "Oxidisation"],
        correctAnswer: "Fermentation"
    },
    {
        question: "What is the name of the first manned moon landing mission?",
        answers: ["Apollo 5", "Apollo 4", "Apollo 11", "Apollo 1"],
        correctAnswer: "Apollo 11"
    },
      {
        question: "What is the capital of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        question: "Who has won the most Grand Slam titles?",
        answers: ["Steffi Graf", "Helen Moody", "Serena WIlliams", "Venus Williams"],
        correctAnswer: "Serena Williams"
    },
    {
        question: "Which country has not missed the Olympic Games since their inception in 1896?",
        answers: ["South Africa", "China", "Greece", "USA"],
        correctAnswer: "Greece"
    },
    {
        question: "Which country was the first to introduce a plastic bag ban?",
        answers: ["France", "South Korea", "Singapore", "Bangladesh"],
        correctAnswer: "Bangladesh"
    },
    // Add more questions as needed
];

// Function to display a question
function showQuestion(question, answers) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question;

    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = ''; // Clear previous options

    answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = function () {
            checkAnswer(index);
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsElement = document.getElementById('options');
    const buttons = optionsElement.getElementsByTagName('button');

    // Reset all button colors
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#D5D6EA';
    }

    // Change the color of the selected button
    buttons[answerIndex].style.backgroundColor = currentQuestion.answers[answerIndex] === currentQuestion.correctAnswer ? 'green' : 'red';

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);
    } else {
        // Quiz is over
        document.getElementById('next-button').style.display = 'none';
    }
}

// Start the quiz
let currentQuestionIndex = 0;
const resultsContainer = document.getElementById('results');
showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);