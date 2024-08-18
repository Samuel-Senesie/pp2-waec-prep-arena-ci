// Add event listners
/*document.addEventListener('DOMContentLoaded', () => { */
    /*let aboutTheGame = document.getElementById('about-the-game'); */
    /*let levelSelection = document.getElementById('level-selection');
    let subjectSelection = document.getElementById('subject-selection');
    let yearSelection = document.getElementById('year-selection');
    let questionContainer = document.getElementById('question-container');
    let timerBar = document.getElementById('timer-bar');
    let results = document.getElementById('results');
}) */

/*function showElementById(id) {
    const element = document.getElementById(id);
    if(element) element.style.display = 'block';
}

function hideElementById(id) {
    const element = document.getElementById(id);
    if(element) element.style.display = 'none';
} */

//Start Game

document.getElementById('start-game').addEventListener('click', () =>  {
    window.location.href = 'game.html';

});


// Call popup window for "About Game"
document.getElementById('about-the-game').addEventListener('click', () => {
    document.getElementById('about-popup').style.display = 'flex';
})

// Close popup window for "About Game"
document.getElementById('close-about-game').addEventListener('click', () => {
    document.getElementById('about-popup').style.display = 'none';
})


// Call popup window for "Instructions"
document.getElementById('instructions').addEventListener('click', () => {
    document.getElementById('instructions-popup').style.display = 'flex';
})

// Close popup window for "Instructions"
document.getElementById('back-to-about-game').addEventListener('click', () => {
    document.getElementById('instructions-popup').style.display = 'none';
    document.getElementById('about-popup').style.display = 'flex';
})

// Call popup window for "Game Rules"
document.getElementById('rules').addEventListener('click', () => {
    document.getElementById('game-rules-popup').style.display = 'flex';
})

// Close popup window for "Game Rules"
document.getElementById('back-to-about-rules').addEventListener('click', () => {
    document.getElementById('game-rules-popup').style.display = 'none';
    document.getElementById('about-popup').style.display = 'flex';
})


// Go back to home page

document.getElementById('back-to-home-page').addEventListener('click', () => {
    hideElementById('level-selection');
    hideElementById('subject-selection-jss');
    hideElementById('subject-selection-sss');
    hideElementById('test-selection');
    showElementById('home-page');
});


document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const level = event.currentTarget.dataset.level;
        hideElementById('level-selection');

        if (level === 'jss') {
            showElementById ('subject-selection-jss');
        } else if (level === 'sss') {
            showElementById('subject-selection-sss');
        }

    });
});

/*document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('game.html')) {
        const backButton = document.getElementById('back-to-home-page');
        if (backButton) {
            backButton.addEventListener('click', () => {
                history.back();
            });
        }
    
    }
});*/

//Game Page

/* Main variables for the Game */

//controls the level selection
