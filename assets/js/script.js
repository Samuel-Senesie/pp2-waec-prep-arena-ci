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
    let questionContainer = document.getElementById('question-container');
    let subjectButton = document.getElementsByClassName('.subject-button')
    let selectedSubjectText = document.getElementById('selected-subject');
    let startTestButton = document.getElementById('start-test');
    let optionsContainer = document.getElementById('options-container');
    let timerBar = document.getElementById('timer-bar');
    let results = document.getElementById('results');

    //To store questions and track current ones
    let questions = [];
    let currentQuestionIndex = 0;

    // Go back to home page

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



    /*function loadQuestions(level, subject, year) {
        questions = questionBank[level][subject][year];
        startTest();
    } */

    /*function startTest() {
        displayQuestion();
    }*/

    /*function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            const {
                question,
                options
            } = currentQuestion;
            questionContainer.querySelector('#question').innerText = question;
            optionsContainer.innerHTML = '';
            options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.classList.add('option-btn');
                optionButton.innerText = `${String.fromCharCode(65 + index)}. ${option}`;
                optionsContainer.appendChild(optionButton);

                optionButton.addEventListener('click', () => checkAnswer(option, currentQuestion.correctAnswer));
            });
        } else {
            alert('Test completed');
        }

    }

    function checkAnswer(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    
        currentQuestionIndex++;
        displayQuestion();
    } */

    /*document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let subject = e.currentTarget.getAttribute('data-subject');
            selectedSubjectText.inerText = subject;
            subjectSelectionJss.style.display = 'none';
            subjectSelectionSss.style.display = 'none';
            year.style.display = 'flex';
        });

        startTestButton.addEventListener('click', () => {
            year.style.display = 'none';
            let testSection = document.getElementById('test-section');
            testSection.style.display = 'flex';
        });

    }); */

   
    
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
            yearSelection.style.display ='block';
        });
    });

    backToSubjects.addEventListener('click', () => {
        yearSelection.style.display = 'none';
        if (document.getElementById('subject-selection-jss').style.display === 'none') {
            subjectSelectionSss.style.display ='flex';
        } else {
            subjectSelectionJss.style.display = 'flex';
        }
    });

    /*startTestButton.addEventListener('click', () => {
        yearSelection.style.display ='none';
        testSection.style.display = 'block'
        startTest();
    });

    function loadQuestions(level, subject, year) {
        questions = questionBank[level][subject][year];
        currentQuestionIndex = 0;
    }

     function startTest() {
        displayQuestion();
    } */



    //Start Game

    document.getElementById('start-game').addEventListener('click', () => {
        window.location.href = 'game.html';
    });


    // Call popup window for "About Game"
    document.getElementById('about-the-game').addEventListener('click', () => {
        document.getElementById('about-popup').style.display = 'flex';
    });

    // Close popup window for "About Game"
    document.getElementById('close-about-game').addEventListener('click', () => {
        document.getElementById('about-popup').style.display = 'none';
    });


    // Call popup window for "Instructions"
    document.getElementById('instructions').addEventListener('click', () => {
        document.getElementById('instructions-popup').style.display = 'flex';
    });

    // Close popup window for "Instructions"
    document.getElementById('back-to-about-game').addEventListener('click', () => {
        document.getElementById('instructions-popup').style.display = 'none';
        document.getElementById('about-popup').style.display = 'flex';
    });

    // Call popup window for "Game Rules"
    document.getElementById('rules').addEventListener('click', () => {
        document.getElementById('game-rules-popup').style.display = 'flex';
    });

    // Close popup window for "Game Rules"
    document.getElementById('back-to-about-rules').addEventListener('click', () => {
        document.getElementById('game-rules-popup').style.display = 'none';
        document.getElementById('about-popup').style.display = 'flex';
    });


});