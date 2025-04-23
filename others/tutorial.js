// Add these variables at the top of game.js with the other variables
let currentTutorialSlide = 1;
let totalTutorialSlides = 5;
let hasSeenTutorial = localStorage.getItem('mathBalanceSeenTutorial') === 'true';

// Add these elements to the existing elements in game.js
const skipTutorialBtn = document.getElementById('skip-tutorial-btn');
const prevSlideBtn = document.getElementById('prev-slide-btn');
const nextSlideBtn = document.getElementById('next-slide-btn');
const slideIndicators = document.querySelectorAll('.slide-indicator');

// Include the tutorial screen in screens object
screens.tutorial = document.getElementById('tutorial-screen');

// Add these to the existing HTML elements (add to the home and level screens)
function addTutorialButtons() {
    // Add Tutorial button to home screen
    const homeButtonContainer = document.querySelector('#home-screen .button-container');
    const tutorialBtn = document.createElement('button');
    tutorialBtn.id = 'tutorial-btn';
    tutorialBtn.className = 'tutorial-button';
    tutorialBtn.textContent = "How to Play";
    tutorialBtn.addEventListener('click', () => showScreen('tutorial-screen'));
    homeButtonContainer.parentNode.insertBefore(tutorialBtn, homeButtonContainer.nextSibling);
    
    // Add Tutorial link to level screen
    const levelScreen = document.getElementById('level-screen');
    const levelInfo = document.createElement('div');
    levelInfo.className = 'level-info';
    const tutorialLink = document.createElement('button');
    tutorialLink.className = 'tutorial-button';
    tutorialLink.textContent = "View Tutorial";
    tutorialLink.addEventListener('click', () => showScreen('tutorial-screen'));
    levelInfo.appendChild(tutorialLink);
    levelScreen.appendChild(levelInfo);
}

// Add these functions for tutorial navigation
function showTutorialSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.tutorial-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show the requested slide
    document.querySelector(`.tutorial-slide[data-slide="${slideNumber}"]`).classList.add('active');
    
    // Update indicators
    slideIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    document.querySelector(`.slide-indicator[data-slide="${slideNumber}"]`).classList.add('active');
    
    // Update buttons
    prevSlideBtn.classList.toggle('disabled', slideNumber === 1);
    
    if (slideNumber === totalTutorialSlides) {
        nextSlideBtn.textContent = 'Start Game';
        nextSlideBtn.innerHTML = 'Start Game <i class="fas fa-play"></i>';
    } else {
        nextSlideBtn.textContent = 'Next';
        nextSlideBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }
    
    // Update current slide
    currentTutorialSlide = slideNumber;
}

function nextTutorialSlide() {
    if (currentTutorialSlide < totalTutorialSlides) {
        showTutorialSlide(currentTutorialSlide + 1);
    } else {
        completeTutorial();
    }
}

function prevTutorialSlide() {
    if (currentTutorialSlide > 1) {
        showTutorialSlide(currentTutorialSlide - 1);
    }
}

function completeTutorial() {
    // Mark tutorial as seen
    localStorage.setItem('mathBalanceSeenTutorial', 'true');
    hasSeenTutorial = true;
    
    // Go to level selection
    showScreen('level-screen');
}

// Add these to the existing attachEventListeners function
function attachTutorialEventListeners() {
    skipTutorialBtn.addEventListener('click', completeTutorial);
    prevSlideBtn.addEventListener('click', prevTutorialSlide);
    nextSlideBtn.addEventListener('click', nextTutorialSlide);
    
    // Add click events to indicators
    slideIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            showTutorialSlide(parseInt(indicator.dataset.slide));
        });
    });
}

// Update the init function to include tutorial initialization
function initTutorial() {
    addTutorialButtons();
    attachTutorialEventListeners();
    showTutorialSlide(1);
    
    // Show tutorial on first visit
    if (!hasSeenTutorial) {
        showScreen('tutorial-screen');
    }
}

// Modify the existing init function to include tutorial initialization
// Update the original init function
function init() {
    attachEventListeners();
    attachTutorialEventListeners(); // Add this line
    loadScores();
    addTutorialButtons(); // Add this line
    
    // Show tutorial on first visit
    if (!hasSeenTutorial) {
        showScreen('tutorial-screen');
        showTutorialSlide(1);
    }
}

// Modify the existing showScreen function to reset tutorial if needed
// Original showScreen function remains the same, but add this at the beginning:
function showScreen(screenId) {
    // If showing tutorial, reset to first slide
    if (screenId === 'tutorial-screen') {
        showTutorialSlide(1);
    }
    
    // Rest of the original showScreen function...
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}