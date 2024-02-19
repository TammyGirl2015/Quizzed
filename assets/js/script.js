// Define your questions and answers
const questions = [
    {
        question: "1. What is the capital city of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "2. What is the capital city of Germany?",
        answers: ["Frankfurt", "Berlin", "Denmark", "Amsterdam"],
        correctAnswer: "Berlin"
    },
    {
        question: "3. Which element has the symbol 'H?'",
        answers: ["Holmium", "Helium", "Hafnium", "Hydrogen"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "4. In which year did World War II end?",
        answers: ["1941", "1945", "1942", "1944"],
        correctAnswer: "1945"
    },
    {
        question: "5. What is the largest planet in our solar system",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Jupiter"
    },
    {
        question: "6. Who wrote the novel 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "JD Salinger", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "7. Which country is known as the Land of the Rising Sun?",
        answers: ["Japan", "China", "South Korea", "Taiwan"],
        correctAnswer: "Japan"
    },
    {
        question: "8. What is the chemical symbol for gold?",
        answers: ["G", "Au", "Go", "Gold"],
        correctAnswer: "Au"
    },
    {
        question: "9. Which composer wrote the 'Four Seasons'?",
        answers: ["Beethoven", "Mozart", "Vivaldi", "Bach"],
        correctAnswer: "Vivaldi"
    },
    {
        question: "10. What is the square root of 144?",
        answers: ["6", "13", "14", "12"],
        correctAnswer: "12"
    },
    {
        question: "11. Who painted the Mona Lisa?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "12. What is the chemical symbol for carbon?",
        answers: ["Carbonate", "Carbon", "Co", "C"],
        correctAnswer: "C"
    },
    {
        question: "13. Which is the longest river in the world?",
        answers: ["Amazon", "Mississippi", "Yangtze", "Nile"],
        correctAnswer: "Nile"
    },
    {
        question: "14. Who is the author of '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
        correctAnswer: "George Orwell"
    },
    {
        question: "15. What is the name of the process that turns sugar into alcohol?",
        answers: ["Carbonation", "Fermentation", "Condensation", "Oxidisation"],
        correctAnswer: "Fermentation"
    },
    {
        question: "16. What is the name of the first manned moon landing mission?",
        answers: ["Apollo 5", "Apollo 4", "Apollo 11", "Apollo 1"],
        correctAnswer: "Apollo 11"
    },
    {
        question: "17. What is the capital city of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        question: "18. Who has won the most Grand Slam titles?",
        answers: ["Steffi Graf", "Helen Moody", "Serena WIlliams", "Venus Williams"],
        correctAnswer: "Serena Williams"
    },
    {
        question: "19. Which country has not missed the Olympic Games since their inception in 1896?",
        answers: ["South Africa", "China", "Greece", "USA"],
        correctAnswer: "Greece"
    },
    {
        question: "20. Which country was the first to introduce a plastic bag ban?",
        answers: ["France", "South Korea", "Singapore", "Bangladesh"],
        correctAnswer: "Bangladesh"
    },
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
        button.addEventListener('click', function () {
            checkAnswer(index);
        });
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
    buttons[answerIndex].style.backgroundColor = answerIndex === currentQuestion.answers.indexOf(currentQuestion.correctAnswer) ? 'green' : 'red';

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);
    } else {
        document.getElementById('next-button').style.display = 'none';
    }
}

// Start the quiz
let currentQuestionIndex = 0;
const resultsContainer = document.getElementById('results');
showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);
