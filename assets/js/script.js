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
                    "correctAnswer": "my uncle’s",
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
                    "question": "That girls is allergic ….. dust.",
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
                },

            ]
        }
    }

};


// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    let aboutTheGame = document.getElementById('about-the-game');
    let startGame = document.getElementById('start-game');
    let closeAboutGame = document.getElementById('close-about-game');
    let instructions = document.getElementById('instructions');
    let backToAboutGame = document.getElementById('back-to-about-game');
    let rules = document.getElementById('rules');
    let backToAboutRules = document.getElementById('back-to-about-rules');
    let backToHomePage = document.getElementById('back-to-home-page');
    let levelSelection = document.getElementById('level-selection');
    let jssLevel = document.getElementById('jss-level');
    let sssLevel = document.getElementById('sss-level');
    let subjectSelection = document.getElementById('subject-selection')
    let subjectSelectionJss = document.getElementById('subject-selection-jss');
    let subjectSelectionSss = document.getElementById('subject-selection-sss');
    let backJss = document.getElementById('back-jss');
    let backSss = document.getElementById('back-sss');
    let yearSelection = document.getElementById('year-selection');
    let yearDropdown = document.getElementById('year-dropdown');
    let testSection = document.getElementById('test-section');
    let questionContainer = document.getElementById('question-container');
    let subjectButton = document.querySelectorAll('subject-button')
    let backToSubjects =document.getElementById('back-to-subjects');
    let selectedSubjectText = document.getElementById('selected-subject');
    let startTest = document.getElementById('start-test');
    let optionsContainer = document.getElementById('options-container');
    let timerBar = document.getElementById('timer-bar');
    let results = document.getElementById('results');
    let scoreBoard = {correct: 0, wrong: 0, remaining: 60}

    //To store questions and track current ones
    let questions = [];
    let currentQuestionIndex = 0;
    let timeInterval;

    // To navigate to test page

    if (startGame) {
        startGame.addEventListener('click', () => {
            window.location.href = 'game.html';
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
            levelSelection.style.display = 'none';
            subjectSelectionJss.style.display = 'flex';
        });
    }

    if (sssLevel) {
        sssLevel.addEventListener('click', () => {
            levelSelection.style.display = 'none';
            subjectSelectionSss.style.display = 'flex';
        });
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



    /*document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let subject = e.currentTarget.getAttribute('data-subject');
            let level = 'jss';
            let year = '2019';
    
            selectedSubjectText.innerText = subject;
            loadQuestions(level, subject, year);
        });
    
        startTestButton.addEventListener('click', () => {
            year.style.display = 'none';
            let testSection = document.getElementById('test-section');
            testSection.style.display = 'flex';
        
        });
    
    });*/

    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            subjectSelectionJss.style.display = 'none';
            subjectSelectionSss.style.display = 'none';
            yearSelection.style.display = 'block';
        });
    });

    if (backToSubjects) {
        backToSubjects.addEventListener('click', () => {
            if(subjectSelectionJss.style.display = 'none') {
                yearSelection.style.display = 'none';
                subjectSelectionJss.style.display = 'flex';
            } else {
                subjectSelectionSss.style.display = 'flex'
            }
        });
    }

    startTest.addEventListener('click', () => {
        if (yearDropdown.value !== " ") {
            let level = 'jss';
            let subject = 'Language Arts';
            let year = yearDropdown.value;

            questions = questionBank[level][subject][year];
            scoreBoard.remaining = questions.length;

            yearSelection.style.display = 'none';
            testSection.style.display = 'block';

            updateScoreDisplay()
            displayQuestion();
            startTimer();
        } else {
            alert('Please select a year to proceed.');
        }
    });

    function updateScoreDisplay() {
        document.getElementById('correct-score').textContent = scoreBoard.correct;
        document.getElementById('wrong-score').textContent = scoreBoard.wrong;
        document.getElementById('remaining-questions').textContent = scoreBoard.remaining;
    }

    function displayQuestion() {
        //Load current question from question bank
        let currentQuestion = questions[currentQuestionIndex];
        //call question text
        questionContainer.querySelector('#question').textContent = currentQuestion.question;

        const optionPrefixes = ['A', 'B', 'C', 'D'];
        let optionButtons = optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            btn.textContent = `${optionPrefixes[index]}. ${currentQuestion.options[index]}`; //currentQuestion.options[index];
            btn.onclick = () => checkAnswer(currentQuestion.options[index]);
        });
    } 

    function checkAnswer(selectedAnswer) {
        let currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            scoreBoard.correct++;
            alert('Correct!');
        } else {
            scoreBoard.wrong++;
            alert('Try Again Later!');
        }

        scoreBoard.remaining--;

        updateScoreDisplay();

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('Test completed!');
            clearInterval(timeInterval)
        }
    }

    function startTimer() {
        let timeLeft = 60;
        timerBar.style.width = '100%';
        let countdown = setInterval(() => {
            timeLeft--;
            timerBar.style.width = `${(timeLeft / 60)  * 100}%`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                testSection.style.display ='none';
            }
        }, 1000);
    }

});