// Add event listners
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
    let subjectSelectionJss = document.getElementById('subject-selection-jss');
    let subjectSelectionSss = document.getElementById('subject-selection-sss');
    let backJss = document.getElementById('back-jss');
    let backSss = document.getElementById('back-sss');
    /*let subjectSelection = document.getElementById('subject-selection');*/
    let yearSelection = document.getElementById('year-selection');
    let questionContainer = document.getElementById('question-container');
    let timerBar = document.getElementById('timer-bar');
    let results = document.getElementById('results'); 

    // Go back to home page

    if (backToHomePage) {
        backToHomePage.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (jssLevel) {
        jssLevel.addEventListener('click', () => {
            levelSelection.style.display ='none';
            subjectSelectionJss.style.display = 'flex';
        });
    }

    if (sssLevel) {
        sssLevel.addEventListener('click', () => {
            levelSelection.style.display ='none';
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
});


/*function showElementById(id) {
    const element = document.getElementById(id);
    if(element) element.style.display = 'block';
}

function hideElementById(id) {
    const element = document.getElementById(id);
    if(element) element.style.display = 'none';
} */

/* window.location.href = 'game.html';*/

//Start Game

document.getElementById('start-game').addEventListener('click', () =>  {
    window.location.href ='game.html';
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


/*document.getElementById('back-to-home-page').addEventListener('click', () => {
    hideElementById('level-selection');
    hideElementById('subject-selection-jss');
    hideElementById('subject-selection-sss');
    showElementById('start');
}); */


/*document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const level = event.currentTarget.dataset.level;
        hideElementById('level-selection');

        if (level === 'jss') {
            showElementById ('subject-selection-jss');
        } else if (level === 'sss') {
            showElementById('subject-selection-sss');
        }

    });
}); */


