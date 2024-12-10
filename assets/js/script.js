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
        answers: ["Steffi Graf", "Helen Moody", "Serena Williams", "Venus Williams"],
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
/**
 * Displays a question and its possible answers on the page.
 *
 * First clears any previous options from the 'options' element.
 * Then for each answer in the provided 'answers' array, it creates a new button,
 * sets the button's text to the answer, and adds an event listener to the button.
 * The event listener calls the 'checkAnswer' function with the index of the answer when the button is clicked.
 *
 * @param {string} question - The question to be displayed.
 * @param {Array<string>} answers - An array of possible answers to the question.
 *
 * @example
 * showQuestion('What is the capital of France?', ['Paris', 'London', 'Berlin']);
 */
// Function to display a question
// Variables to track the quiz state
let score = 0;
let currentQuestionIndex = 0;

// Function to display a question
function showQuestion(question, answers) {
    const optionsElement = document.getElementById('options');
    const questionElement = document.getElementById('question');

    if (questionElement) {
        questionElement.textContent = question;
    }

    if (optionsElement) {
        optionsElement.innerHTML = ''; // Clear previous options
    }

    answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('option-button'); // Add a class for styling
        button.dataset.index = index; // Store the index for reference

        button.addEventListener('click', function () {
            if (button.disabled) {
                displayMessage("Please wait for the next question.");
            } else {
                checkAnswer(index, button);
            }
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });
}

// Function to check the answer
function checkAnswer(answerIndex, selectedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsElement = document.getElementById('options');
    const buttons = optionsElement.getElementsByTagName('button');

    // Disable all buttons to prevent multiple selections
    for (let button of buttons) {
        button.disabled = true; // Disable each button
    }

    // Check if the selected answer is correct
    if (currentQuestion.answers[answerIndex] === currentQuestion.correctAnswer) {
        selectedButton.style.backgroundColor = '#A0D858'; // Correct answer color
        score++;
    } else {
        selectedButton.style.backgroundColor = '#E14141'; // Wrong answer color
    }

    // Move to the next question after a delay
    setTimeout(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);
        } else {
            // Display the final score
            displayResults();
        }
    }, 1500); // Wait for 1.5 seconds
}

// Function to display the final score
function displayResults() {
    const mainContainer = document.getElementById('quiz-container'); // Assuming all quiz content is inside this container

    // Clear the existing content
    mainContainer.innerHTML = ''; // Remove all children elements

    // Create a message container
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('result-message'); // Add a class for styling
    messageContainer.textContent = `Well done on completing the quiz! You scored ${score} out of ${questions.length}.`;

    // Append the message container to the main container
    mainContainer.appendChild(messageContainer);
}

// Start the quiz
showQuestion(questions[currentQuestionIndex].question, questions[currentQuestionIndex].answers);