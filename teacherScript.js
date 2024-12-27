// Define a global array to store the questions
let quizQuestions = [];

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function createQuiz() {
    const quizContainer = document.getElementById('manage-quizzes');

    // Create a new div element for the question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    // Add input fields for the question and its answers
    questionDiv.innerHTML = `
        <input type="text" class="question-input" placeholder="Enter your question">
        <input type="text" class="answer-input" placeholder="Enter answer 1">
        <input type="text" class="answer-input" placeholder="Enter answer 2">
        <input type="text" class="answer-input" placeholder="Enter answer 3">
        <input type="text" class="answer-input" placeholder="Enter answer 4">
        <select class="correct-answer">
            <option value="1">Answer 1</option>
            <option value="2">Answer 2</option>
            <option value="3">Answer 3</option>
            <option value="4">Answer 4</option>
        </select>
        <button class="save-btn" onclick="saveQuestion(this.parentElement)">Save Question</button>
    `;

    // Append the new question div to the quiz container
    quizContainer.appendChild(questionDiv);
}

function saveQuestion(questionElement) {
    const question = questionElement.querySelector('.question-input').value;
    const answers = [];
    questionElement.querySelectorAll('.answer-input').forEach(input => {
        if (input.value.trim() !== '') {
            answers.push(input.value.trim());
        }
    });
    const correctAnswerIndex = parseInt(questionElement.querySelector('.correct-answer').value) - 1;

    // Create an object for the question and its answers
    const newQuestion = {
        question: question,
        answers: answers,
        correctAnswerIndex: correctAnswerIndex
    };

    // Add the new question to the array
    quizQuestions.push(newQuestion);

    // Clear the input fields for adding another question
    questionElement.querySelector('.question-input').value = '';
    questionElement.querySelectorAll('.answer-input').forEach(input => {
        input.value = '';
    });

    // Alert the user that the question has been saved
    alert('Question saved!');

    console.log('Current quiz questions:', quizQuestions);
}
