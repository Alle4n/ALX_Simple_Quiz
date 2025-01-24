//Function for checking correct answer
function checkAnswer() {
    const correctAnswer = "4"

    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        // If correct, update the feedback
        document.getElementById('feedback').textContent = "Correct! Well done.";
      } else {
        // If incorrect, update the feedback
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
      }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
