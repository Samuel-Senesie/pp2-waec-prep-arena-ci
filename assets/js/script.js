const questionBank = {
    "jss": {
        "Language Arts": {
            "2019": [{
                    "question": "One of the bulls………from the herd.",
                    "options": ["have been strayed", "has been strayed", "have strayed", "has strayed"],
                    "correctAnswer": "has strayed"
                },

                {
                    "question": "I saw the dog………….out of the house.",
                    "options": ["run", "is running", "ran", "was running"],
                    "correctAnswer": "run"
                },

                {
                    "question": "Habib goes to school……train.",
                    "options": ["by", "on", "with", "in"],
                    "correctAnswer": "by"
                },
                {
                    "question": "This phone is not mine; it is ...",
                    "options": ["mine uncle’s", "my uncle’s", "my uncles", "mine uncle"],
                    "correctAnswer": "my uncle’s"
                },
                {
                    "question": "I wish I ….. my friend next week.",
                    "options": ["can visit", "am visiting", "shall visit", "could visit"],
                    "correctAnswer": "could visit"
                },
                {
                    "question": "Aba took ….. her mother in many ways.",
                    "options": ["after", "up", "on", "by"],
                    "correctAnswer": "after"
                },
                {
                    "question": "That girl is allergic ….. dust.",
                    "options": ["with", "to", "against", "about"],
                    "correctAnswer": "to"
                },
                {
                    "question": "My brother, with his children, ….. travelling to Salaga next week.",
                    "options": ["is", "are", "was", "were"],
                    "correctAnswer": "is"
                },
                {
                    "question": "It is high time we …… for the meeting.",
                    "options": ["left", "leave", "have to leave", "will leave"],
                    "correctAnswer": "left"
                },
                {
                    "question": "The accused person refused to appear before the ….. panel.",
                    "options": ["five-man’s", "five-man", "five-men", "five-mens"],
                    "correctAnswer": "five-man"
                },
                {
                    "question": "The stories her children told her made her ……",
                    "options": ["to laugh", "laughing", "laughed", "laugh"],
                    "correctAnswer": "laugh"
                },
                {
                    "question": "They have not bought …… of the two prescribed books.",
                    "options": ["neither", "either", "none", "all"],
                    "correctAnswer": "either"
                },
                {
                    "question": "The boy found the assignment …… to do",
                    "options": ["much too difficult", "difficult too much", "too much difficult", "much difficult too"],
                    "correctAnswer": "much too difficult"
                },
                {
                    "question": "The oxen lay on the bare floor, …..?",
                    "options": ["didn’t they", "don’t they", "didn’t it", "isn’t it"],
                    "correctAnswer": "didn’t they"
                }

            ]
        }
    }

};

// Global variables
let userName;
let leaderboardData = []; // store leaderboard entries
let questions = [];
let currentQuestionIndex = 0;
let timeInterval;
let userAnswers = []; //string to store user's answers for review
let timeLeft = 60;
let isPaused = false;
let scoreBoard = { correct: 0, wrong: 0, unanswered: 0, remaining: 60 };


// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const startGame = document.getElementById('start-game');
    const usernameInput = document.getElementById('username-input');
    const usernameContainer = document.getElementById('username-container');
    const leaderboardButton = document.getElementById('leaderboard');
    const leaderboardSection = document.getElementById('leaderboard-section');
    /*const leaderboardTable = document.getElementById('leaderboard-table').getElementsByTagName('tbody')[0];*/
    const clearLeaderboard = document.getElementById('clear-leaderboard');
    const backToLevelSelection = document.getElementById('back-to-level-selection');
    const aboutTheGame = document.getElementById('about-the-game');
    const closeAboutGame = document.getElementById('close-about-game');
    const instructions = document.getElementById('instructions');
    const backToAboutGame = document.getElementById('back-to-about-game');
    const rules = document.getElementById('rules');
    const backToAboutRules = document.getElementById('back-to-about-rules');
    const backToHomePage = document.getElementById('back-to-home-page');
    const levelSelection = document.getElementById('level-selection');
    const jssLevel = document.getElementById('jss-level');
    const sssLevel = document.getElementById('sss-level');
    const subjectSelectionJss = document.getElementById('subject-selection-jss');
    const subjectSelectionSss = document.getElementById('subject-selection-sss');
    const backJss = document.getElementById('back-jss');
    const backSss = document.getElementById('back-sss');
    const yearSelection = document.getElementById('year-selection');
    const yearDropdown = document.getElementById('year-dropdown');
    const testSection = document.getElementById('test-section');
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const timerBar = document.getElementById('timer-bar');
    const results = document.getElementById('results');
    const nextQuestion = document.getElementById('next-question');
    const pause = document.getElementById('pause');
    const resume = document.getElementById('resume');
    const reviewSection = document.getElementById('review-section');
    const subjectButtons = document.querySelectorAll('.subject-btn');
    const backToSubjects = document.getElementById('back-to-subjects');
    const selectedSubjectText = document.getElementById('selected-subject');
    const startTest = document.getElementById('start-test');
    


    // To navigate to test page

    if (startGame) {
        startGame.addEventListener('click', () => {
            window.location.href = 'game.html';
        });
    }

    if (usernameInput) {
        usernameInput.addEventListener('input', (e) => {
            const username = e.target.value.trim();
            if (username !== '') {
                localStorage.setItem('username', username);
            }
        });
    }

    if (leaderboardButton) {
        leaderboardButton.addEventListener('click', () => {
            levelSelection.style.display = 'none';
            leaderboardSection.style.display = 'flex';
            updateLeaderboardSection();
        });
    }

    if (backToLevelSelection) {
        backToLevelSelection.addEventListener('click', () => {
            leaderboardSection.style.display = 'none';
            levelSelection.style.display = 'flex';
        });
    }

    // Clear leaderboard

    if (clearLeaderboard) {
        clearLeaderboard.addEventListener('click', () => {
            leaderboardData = [];
            localStorage.removeItem('leaderboardData');
            updateLeaderboardSection();
        });
    }

    // Display popup window for "About Game"
    if (aboutTheGame) {
        aboutTheGame.addEventListener('click', () => {
            document.getElementById('about-popup').style.display = 'flex';
        });
    }

    // Close popup window for "About Game"
    if (closeAboutGame) {
        closeAboutGame.addEventListener('click', () => {
            document.getElementById('about-popup').style.display = 'none';
        });
    }

    // Call popup window for "Instructions"
    if (instructions) {
        instructions.addEventListener('click', () => {
            document.getElementById('instructions-popup').style.display = 'flex';
        });
    }

    // Close popup window for "Instructions"
    if (backToAboutGame) {
        backToAboutGame.addEventListener('click', () => {
            document.getElementById('instructions-popup').style.display = 'none';
            document.getElementById('about-popup').style.display = 'flex';
        });
    }

    // Call popup window for "Game Rules"
    if (rules) {
        rules.addEventListener('click', () => {
            document.getElementById('game-rules-popup').style.display = 'flex';
        });
    }

    // Close popup window for "Game Rules"
    if (backToAboutRules) {
        backToAboutRules.addEventListener('click', () => {
            document.getElementById('game-rules-popup').style.display = 'none';
            document.getElementById('about-popup').style.display = 'flex';
        });
    }

    // Return to home page from test area
    if (backToHomePage) {
        backToHomePage.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (jssLevel) {
        jssLevel.addEventListener('click', () => {
            if (validateUsername ()) {
                levelSelection.style.display = 'none';
                subjectSelectionJss.style.display = 'flex';
            }
            
        });
    }

    if (sssLevel) {
        sssLevel.addEventListener('click', () => {
            if (validateUsername ()) {
                levelSelection.style.display = 'none';
                subjectSelectionSss.style.display = 'flex';
            }
        });
    }

    // Validate username 
    function validateUsername() {
        const usernameInput = document.getElementById('username-input').value.trim();
        if (usernameInput === '') {
            alert('Please enter username to proceed');
            return false;        
        }
        localStorage.setItem('username', usernameInput)
        return true;
    }

    if (backJss) {
        backJss.addEventListener('click', () => {
            subjectSelectionJss.style.display = 'none';
            levelSelection.style.display = 'flex';
        });
    }

    if (backSss) {
        backSss.addEventListener('click', () => {
            subjectSelectionSss.style.display = 'none';
            levelSelection.style.display = 'flex';
        });
    }

    // Display year selection dropdown
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            subjectSelectionJss.style.display = 'none';
            subjectSelectionSss.style.display = 'none';
            yearSelection.style.display = 'block';
        });
    });

    // Back to subject selection from year selection
    if (backToSubjects) {
        backToSubjects.addEventListener('click', () => {
            yearSelection.style.display = 'none';
            if (subjectSelectionJss.style.display === 'none') {
                subjectSelectionSss.style.display = 'flex';
            } else {
                subjectSelectionJss.style.display = 'flex';
            }
        });
    }


    // Start test
    startTest.addEventListener('click', () => {
        if (yearDropdown.value.trim() !== " ") {
            if (validateUsername()) {
                const level = 'jss';
                const subject = 'Language Arts';
                const year = yearDropdown.value;
    
                questions = questionBank[level][subject][year];
                scoreBoard.remaining = questions.length;
                userAnswers = [];
                currentQuestionIndex = 0;
    
                yearSelection.style.display = 'none';
                testSection.style.display = 'block';
    
                updateScoreDisplay();
                displayQuestion();
                startTimer();
            }
           
        } else {
            alert('Please select a year to proceed.');
        }
    });

    // Update leaderboard section
    function updateLeaderboardSection() {
        leaderboardTable.innerHTML = '';
        leaderboardData.forEach((entry, index) => {
            const row = leaderboardTable.insertRow(index);
            row.insertCell(0).textContent = entry.name;
            row.insertCell(1).textContent = entry.level;
            row.insertCell(2).textContent = entry.subject;
            row.insertCell(3).textContent = entry.score;
        });
    }

    // Add score to leaderboard
    function addScoreToLeaderBoard(name, level, subject, score) {
        if (name && level && subject && score !== undefined) {
            leaderboardData.push({name, level, subject, score});
        }
        localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
        updateLeaderboardSection();
    }

    // Update score display
    function updateScoreDisplay() {
        document.getElementById('correct-score').textContent = scoreBoard.correct;
        document.getElementById('wrong-score').textContent = scoreBoard.wrong;
        document.getElementById('unanswered-score').textContent = scoreBoard.unanswered;
        document.getElementById('remaining-questions').textContent = scoreBoard.remaining;
    }


    // Display questions
    function displayQuestion() {
        //Load current question from question bank
        const currentQuestion = questions[currentQuestionIndex];
        //call question text
        questionContainer.querySelector('#question').textContent = currentQuestion.question;

        const optionPrefixes = ['A', 'B', 'C', 'D'];
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            btn.innerHTML = `<strong>${optionPrefixes[index]}.</strong> ${currentQuestion.options[index]}`;
            /*btn.textContent = `${optionPrefixes[index]}. ${currentQuestion.options[index]}`;*/ //currentQuestion.options[index];
            btn.onclick = () => {
                userAnswers[currentQuestionIndex] = currentQuestion.options[index];
                checkAnswer(currentQuestion.options[index]);
            };
        });

        resetTimer();
    }

    // Display inpage notifications
    function showNotification(type, message) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;

        const notificationContainer = document.getElementById('notification-container');
        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.style.display = 'block';
            notification.style.opacity = '1';
        }, 10);

        setTimeout(() => {
            hideNotification(notification);
        }, 2000);
    }

    // Hide inpage notifications
    function hideNotification(notification) {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
            notification.remove();
        }, 500);
    }

    // Check answer
    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            scoreBoard.correct++;
            showNotification('success', 'Correct!');
        } else if (selectedAnswer === null || selectedAnswer === 'Skipped') {
            scoreBoard.unanswered++;
            showNotification('warning', 'Do you want to come again Later?');
        } else {
            scoreBoard.wrong++;
            showNotification('error', 'Try Again Later!');
        }

        scoreBoard.remaining--;
        updateScoreDisplay();

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showNotification('info', 'Test completed!');
            clearInterval(timeInterval);
            displayReview();
        }
    }

    // Load next question
    nextQuestion.addEventListener('click', () => {
        userAnswers[currentQuestionIndex] = 'Skipped';
        checkAnswer('skipped');
        scoreBoard.unanswered++;
        scoreBoard.remaining--;
        updateScoreDisplay();
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showNotification('info', 'Test completed!');
            clearInterval(timeInterval);
            displayReview();
        }
    });

    // Pause test
    pause.addEventListener('click', () => {
        isPaused = true;
        questionContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        showNotification('info', 'You paused test');
    });

    // Resume test
    resume.addEventListener('click', () => {
        isPaused = false;
        questionContainer.style.display = 'block';
        optionsContainer.style.display = 'flex';
        showNotification('info', 'You resumed test.');
    });

    // Start timer
    function startTimer() {
        timeLeft = 60;
        timerBar.style.width = '100%';
        timeInterval = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                timerBar.style.width = `${(timeLeft / 60) * 100}%`;
                if (timeLeft <= 10) {
                    timerBar.style.backgroundColor = 'red';
                } else if (timeLeft <= 30) {
                    timerBar.style.backgroundColor = 'orange';
                } else {
                    timerBar.style.backgroundColor = 'green';
                }
                
                if (timeLeft <= 0) {
                    clearInterval(timeInterval);
                    alert('Time is up!');
                    checkAnswer(null);
                }
            }
        }, 1000);
    }
    
    // Reset timer
    function resetTimer() {
        clearInterval(timeInterval);
        startTimer();
    }


    //Display review section
    function displayReview() {
        testSection.style.display = 'none';
        reviewSection.style.display = 'block';
        reviewSection.innerHTML = '';

        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index] || 'Not Answered';
            const correctAnswer = question.correctAnswer;

            const answerColor = userAnswer === 'Not Answered' || userAnswer === 'Skipped' ? 'orange' : userAnswer === correctAnswer ? 'green' : 'red';
            
            const questionHTML = `<div class="review-question">
            <p><strong>Q${index + 1}:</strong> ${question.question}</p>
            <p><strong>Your Answer:</strong> <span style="color: ${answerColor}">${userAnswer}</span></p>
            <p><strong>Correct Answer:</strong> <span style="color: green">${correctAnswer}</span></p>
            </div>`;

            reviewSection.innerHTML += questionHTML;
        });

        reviewSection.innerHTML += '<button id="restart-test">Restart Test</button>';
        document.getElementById('restart-test').addEventListener('click', () => {
            location.reload();
        });
    }
});

