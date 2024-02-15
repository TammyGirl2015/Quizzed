// // Wait for the DOM to finish loading before running the game
// // Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

    let currentQuestionIndex = 0;
    let score = 0;
    const questions = [
        {
            question: 'What year did Brazil win the Football World Cup?',
            answers: ['2005', '2001'],
            correctAnswerIndex: 1
        },
        {
            question: 'What year was i born?',
            answers: ['2001', '1994'],
            correctAnswerIndex: 1
        },
        {
            question: 'What is OJ Simpson famous for?',
            answers: ['murder', 'theft'],
            correctAnswerIndex: 1
        },
        {
            question: 'Which country is at the bottom of the earth?',
            answers: ['Spain', 'Mexico'],
            correctAnswerIndex: 1
        },
        {
            question: 'When did Barack Obama become president?',
            answers: ['2008', '2016'],
            correctAnswerIndex: 1
        },
    ]; // Assume this is populated with your questions and answers

    function displayQuestion() {
        const questionArea = document.querySelector('.question-area');
        const selectArea = document.querySelector('.select-area');

        // Display the current question
        questionArea.innerHTML = `<p class="question">${questions[currentQuestionIndex].question}</p>`;
        // Clear the select area and add buttons for the current question's answers
        selectArea.innerHTML = '';
        questions[currentQuestionIndex].answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.setAttribute('data-type', `text ans-${index}`);
            button.setAttribute('class', 'btn');
            button.setAttribute('id', `ans-${index}`);
            button.innerText = answer;
            button.addEventListener('click', () => checkAnswer(index));
            selectArea.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const correct = selectedIndex === questions[currentQuestionIndex].correctAnswerIndex;
        if (correct) {
            score++;
        }
        console.log(`Score: ${score}`);
        nextQuestion();
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // End of quiz
            console.log('Quiz finished');
        } else {
            // Continue with the next question
            displayQuestion();
        }
    }

    // Start the quiz
    displayQuestion();

    
// function checkAnswer() {

// }

// function incrementScore() {

// }

// function incrementWrongAnswer() {

// }

