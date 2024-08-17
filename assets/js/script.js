// Add event listners
document.addEventListener('DOMContentLoaded', () => {
    let levelSelection = document.getElementById('level-selection');
    let subjectSelection = document.getElementById('subject-selection');
    let yearSelection = document.getElementById('year-selection');
    let questionContainer = document.getElementById('question-container');
    let timerBar = document.getElementById('timer-bar');
    let results = document.getElementById('results');
})


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


//Start Game

document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('level-selection').classList.remove('hidden');
    document.getElementById('start-game').classList.add('hidden');
    document.getElementById('about-game').classList.add('hidden');

});



// Make popup window display at the centre of the screen

function openPopup(url, popupWidth, popHeight) {
    /*const screenWidth = window.screen.widdth;
    const screenHeight = window.screen.height;

    const left = (screen.width / 2) - (popupWidth / 2);
    const top = (screen.height / 2) - (popHeight / 2); */

    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;


    window.open(
        url,
        'popupWindow',
        `width=${width}, height=${height}, top=${top}, left=${left}, scrollbars=yes, resizable=yes`
    );
}