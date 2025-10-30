// Game variables
let currentTutorialSlide = 1;
let totalTutorialSlides = 5;
let hasSeenTutorial = localStorage.getItem('mathBalanceSeenTutorial') === 'true';

let currentScreen = 'home-screen';
let currentLevel = '';
let currentProblems = [];
let currentProblemIndex = 0;
let totalProblems = 10;
let timeLeft = 0;
let timer = null;
let score = {
    base: 0,
    timeBonus: 0,
    hintBonus: 0,
    total: 0
};
let usedHintInCurrentProblem = false;
let usedHints = 0;
let correctAnswers = 0;
let earnedBadges = [];
let gameEnded = false; // prevent double endGame runs

// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const levelCompleteSound = document.getElementById('level-complete-sound');
const startSound = document.getElementById('start-sound');
const startGameSound = document.getElementById('start-game-sound') || null;


// Screen elements
const screens = {
    home: document.getElementById('home-screen'),
    level: document.getElementById('level-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen'),
    scores: document.getElementById('scores-screen'),
    tutorial: document.getElementById('tutorial-screen')
};

// Button elements
const skipTutorialBtn = document.getElementById('skip-tutorial-btn');
const prevSlideBtn = document.getElementById('prev-slide-btn');
const nextSlideBtn = document.getElementById('next-slide-btn');
const slideIndicators = document.querySelectorAll('.slide-indicator');

const playBtn = document.getElementById('play-btn');
const scoresBtn = document.getElementById('scores-btn');
const backFromLevelBtn = document.getElementById('back-from-level');
const backFromGameBtn = document.getElementById('back-from-game');
const backFromScoresBtn = document.getElementById('back-from-scores');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const homeBtn = document.getElementById('home-btn');
const clearScoresBtn = document.getElementById('clear-scores-btn');
const levelCards = document.querySelectorAll('.level-card');

// Game UI elements
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const timerElement = document.getElementById('timer');
const problemText = document.getElementById('problem-text');
const problemImage = document.getElementById('problem-image');
const hintText = document.getElementById('hint-text');
const hintContent = document.getElementById('hint-content');
const answerInput = document.getElementById('answer-input');
const unitDisplay = document.getElementById('unit-display');
const feedback = document.getElementById('feedback');

// Results UI elements
const completedLevel = document.getElementById('completed-level');
const problemsSolved = document.getElementById('problems-solved');
const baseScore = document.getElementById('base-score');
const timeBonus = document.getElementById('time-bonus');
const hintBonus = document.getElementById('hint-bonus');
const totalScore = document.getElementById('total-score');
const badgeContainer = document.getElementById('badge-container');

// Initialize the game
function init() {
    attachEventListeners();
    attachTutorialEventListeners();
    loadScores();
    addTutorialButtons();

    // Show tutorial on first visit
    if (!hasSeenTutorial) {
        showScreen('tutorial-screen');
        showTutorialSlide(1);
    }
} // Wait for the window to fully load
window.onload = function () {
    // Play the audio when the page loads
    startSound?.play?.();
};

function addTutorialButtons() {
    // Add Tutorial button to home screen if it doesn't exist already
    if (!document.getElementById('tutorial-btn')) {
        const homeButtonContainer = document.querySelector('#home-screen .button-container');
        const tutorialBtn = document.createElement('button');
        tutorialBtn.id = 'tutorial-btn';
        tutorialBtn.className = 'tutorial-button btn btn-outline-primary btn-lg btn-rounded mb-3';
        tutorialBtn.textContent = "How to Play";
        tutorialBtn.addEventListener('click', () => showScreen('tutorial-screen'));
        homeButtonContainer.appendChild(tutorialBtn);
    }

    // Add Tutorial link to level screen if it doesn't exist already
    if (!document.querySelector('.level-screen .tutorial-button')) {
        const levelScreen = document.getElementById('level-screen');
        if (!levelScreen.querySelector('.level-info')) {
            const levelInfo = document.createElement('div');
            levelInfo.className = 'level-info mt-3';
            levelScreen.querySelector('.card-footer').prepend(levelInfo);
        }
    }
}

// Tutorial functions
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

// Attach event listeners
function attachEventListeners() {
    // Navigation buttons
    playBtn.addEventListener('click', () => showScreen('level-screen'));
    scoresBtn.addEventListener('click', () => {
        loadScores();
        showScreen('scores-screen');
    });
    backFromLevelBtn.addEventListener('click', () => showScreen('home-screen'));
    backFromGameBtn.addEventListener('click', () => {
        stopTimer();
        showScreen('home-screen');
    });
    backFromScoresBtn.addEventListener('click', () => showScreen('home-screen'));
    playAgainBtn.addEventListener('click', () => showScreen('level-screen'));
    homeBtn.addEventListener('click', () => showScreen('home-screen'));
    clearScoresBtn.addEventListener('click', clearScores);

    // Level selection
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            startGame(currentLevel);
        });
    });

    // Game controls
    submitBtn.addEventListener('click', checkAnswer);
    hintBtn.addEventListener('click', showHint);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
}

// Show a specific screen
function showScreen(screenId) {
    // If showing tutorial, reset to first slide
    if (screenId === 'tutorial-screen') {
        showTutorialSlide(1);
    }

    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });

    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;

    // Play start sound for game screen
    if (screenId === 'game-screen') {
        startGameSound?.play?.();
    }
    if (screenId === 'home-screen') {
        startSound?.play?.();
    }
}
// Shuffle problems
function shuffleProblems() {
    for (let i = currentProblems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentProblems[i], currentProblems[j]] = [currentProblems[j], currentProblems[i]]; // Swap
    }
}

// Start a new game
function startGame(level) {
    startSound?.pause?.();

    gameEnded = false;
    // Set up game variables based on level
    currentLevel = level;
    currentProblemIndex = 0;
    correctAnswers = 0;
    usedHints = 0;
    score = { base: 0, timeBonus: 0, hintBonus: 0, total: 0 };
    earnedBadges = [];

    // Get problems for the selected level
    currentProblems = [...problems[level]];

    //shuffle problems
    shuffleProblems();

    // Ensure that the total number of problems is exactly what you want
    currentProblems = currentProblems.slice(0, totalProblems);  // Take only 'totalProblems' number of problems

    // Set time limit based on difficulty
    switch (level) {
        case 'beginner':
            timeLeft = 90;
            break;
        case 'easy':
            timeLeft = 180;
            break;
        case 'medium':
            timeLeft = 220;
            break;
        case 'worldHero':
            timeLeft = 240;
            break;
    }

    // Show the game screen
    showScreen('game-screen');

    // Load the first problem
    loadProblem();

    // Start the timer
    startTimer();
}

// Load a problem
function loadProblem() {
    if (currentProblemIndex < totalProblems) {

        const problem = currentProblems[currentProblemIndex];

        // Reset problem state
        usedHintInCurrentProblem = false;
        feedback.classList.add('hidden');
        hintText.classList.add('hidden');
        hintBtn.textContent = 'Show';
        hintBtn.innerHTML = '<i class="far fa-lightbulb me-2"></i> Show';

        // Update UI
        problemText.textContent = problem.question;
        problemImage.src = problem.image;
        hintContent.textContent = problem.hint;
        unitDisplay.textContent = problem.unit;
        answerInput.value = '';
        answerInput.focus();

        // Update progress
        progressText.textContent = `Problem ${currentProblemIndex + 1}/${totalProblems}`;
        progressFill.style.width = `${((currentProblemIndex + 1) / totalProblems) * 100}%`;
    } else {
        // End the game if we've gone through all problems
        endGame();
    }
}

// Start the timer
function startTimer() {
    // Clear any existing timer
    stopTimer();

    // Update timer display
    timerElement.textContent = timeLeft;

    // Start a new timer
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // End game if time runs out
        if (timeLeft <= 0) {
            stopTimer();
            showTimesUpFeedback();
            setTimeout(endGame, 2000);
        }
    }, 1000);
}

// Stop the timer
function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Show hint
function showHint() {
    hintText.classList.toggle('hidden');

    if (!hintText.classList.contains('hidden')) {
        hintBtn.textContent = 'Hide';
        hintBtn.innerHTML = '<i class="far fa-lightbulb me-2"></i> Hide';
        if (!usedHintInCurrentProblem) {
            usedHintInCurrentProblem = true;
            usedHints++;
        }
    } else {
        hintBtn.textContent = 'Show';
        hintBtn.innerHTML = '<i class="far fa-lightbulb me-2"></i> Show';
    }
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    const currentProblem = currentProblems[currentProblemIndex];

    /*     // Check if the answer is empty or not a number
          if (answerInput.value.trim() === '' || isNaN(userAnswer)) {
             showFeedback('Please enter a valid number.', false);
             return;
         } 
        answerInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // prevents form or default action
                checkAnswer(); // this will only progress if correct
            }
        }); */
    // Validate input (Enter handling already attached once in attachEventListeners)
    if (answerInput.value.trim() === '' || isNaN(userAnswer)) {
        showFeedback('Please enter a valid number.', false);
        return;
    }

    // Check if the answer is correct (with some tolerance for floating point)
    const isCorrect = Math.abs(userAnswer - currentProblem.answer) < 0.01;

    if (isCorrect) {
        // Play correct sound
        correctSound?.play?.();

        // Show feedback
        showFeedback(`Correct! ${currentProblem.explanation}`, true);

        // Update score
        correctAnswers++;

        // Calculate base points based on difficulty
        let basePoints;
        switch (currentLevel) {
            case 'beginner': basePoints = 10; break;
            case 'easy': basePoints = 20; break;
            case 'medium': basePoints = 30; break;
            case 'worldHero': basePoints = 50; break;
            default: basePoints = 10;
        }

        // Add points to base score
        score.base += basePoints;

        // Add no-hint bonus if applicable
        if (!usedHintInCurrentProblem) {
            score.hintBonus += 5;
        }

        // Check for speed badge
        if (getLevelMaxTime(currentLevel) - timeLeft < 15) {
            addBadge('speedster');
        }

        // Move to the next problem after a delay
        setTimeout(() => {
            currentProblemIndex++;
            loadProblem();
        }, 1000);
    } else {
        // Play wrong sound
        wrongSound?.play?.();

        // Show feedback
        showFeedback('Not quite right. Try again!', false);
    }
}

// Show feedback to the user
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.classList.remove('hidden', 'correct', 'incorrect');

    if (isCorrect === true) {
        feedback.classList.remove('alert-danger');
        feedback.classList.add('correct', 'alert-success');
    } else if (isCorrect === false) {
        feedback.classList.remove('alert-success');
        feedback.classList.add('incorrect', 'alert-danger');
    }
}

// Show time's up message
function showTimesUpFeedback() {
    showFeedback("Time's up!", false);
}

// End the game
function endGame() {
    if (gameEnded) return; // avoid double-run (timer + completion)
    gameEnded = true;
    stopTimer();
    levelCompleteSound?.play?.();

    // Calculate final score
    calculateFinalScore();

    // Assign badges based on performance
    assignBadges();

    updateResultsScreen();
    saveScore();
    showScreen('results-screen');
}

// Calculate the final score with new time bonus rules
function calculateFinalScore() {
    // Base score already accumulated during gameplay

    // Calculate time bonus with new rules
    const maxTime = getLevelMaxTime(currentLevel);
    const timeRemaining = timeLeft; // Time left when game ended

    // Calculate what fraction of max time is remaining
    const timeRemainingFraction = timeRemaining / maxTime;

    // Apply the new time bonus rules
    if (timeRemainingFraction >= 0.5) { // More than half time remaining
        score.timeBonus = 50;
    } else if (timeRemainingFraction >= 1 / 3) { // More than 1/3 time remaining
        score.timeBonus = 30;
    } else if (timeRemainingFraction >= 1 / 4) { // More than 1/4 time remaining
        score.timeBonus = 20;
    } else if (timeRemainingFraction >= 1 / 5) { // More than 1/5 time remaining
        score.timeBonus = 10;
    } else {
        score.timeBonus = 0;
    }

    // Calculate total score
    score.total = score.base + score.timeBonus + score.hintBonus;
}

// Assign badges based on performance
function assignBadges() {
    // Perfect score badge
    if (correctAnswers === currentProblems.length) {
        addBadge('perfectScore');
    }

    // No hints badge
    if (usedHints === 0) {
        addBadge('noHints');
    }

    // Math Whiz badge (completed World Hero level)
    if (currentLevel === 'worldHero' && correctAnswers > 0) {
        addBadge('mathWhiz');
    }

    // Balance Master badge (perfect score on World Hero level)
    if (correctAnswers === currentProblems.length && currentLevel === 'worldHero') {
        addBadge('balanceMaster');
    }

    // Speed Master badge is already added during gameplay for individual problems
}

// Update the results screen
function updateResultsScreen() {
    // Update level completed
    let levelName;
    switch (currentLevel) {
        case 'beginner': levelName = 'Beginner'; break;
        case 'easy': levelName = 'Easy'; break;
        case 'medium': levelName = 'Medium'; break;
        case 'worldHero': levelName = 'World Hero'; break;
        default: levelName = 'Unknown';
    }
    completedLevel.textContent = levelName;

    // Update problems solved
    problemsSolved.textContent = `${correctAnswers}/${currentProblems.length}`;

    // Update score breakdown
    baseScore.textContent = score.base;
    timeBonus.textContent = score.timeBonus;
    hintBonus.textContent = score.hintBonus;
    totalScore.textContent = score.total;

    // Update badges
    badgeContainer.innerHTML = '';
    earnedBadges.forEach(badgeId => {
        const badge = badges[badgeId];
        const badgeEl = document.createElement('div');
        badgeEl.className = 'badge-item col-6 col-md-4 mb-3';
        badgeEl.innerHTML = `
            <div class="p-3 rounded text-center badge-display">
                <i class="fas ${badge.icon} fa-2x mb-2"></i>
                <p class="mb-0">${badge.name}</p>
                <small class="text-muted">${badge.description}</small>
            </div>
        `;
        badgeContainer.appendChild(badgeEl);
    });
}

// Add a badge (if not already earned)
function addBadge(badgeId) {
    if (!earnedBadges.includes(badgeId)) {
        earnedBadges.push(badgeId);
    }
}

// Get the maximum time for a level
function getLevelMaxTime(level) {
    switch (level) {
        case 'beginner': return 90;
        case 'easy': return 180;
        case 'medium': return 220;
        case 'worldHero': return 240;
        default: return 60;
    }
}

// Save score to localStorage
function saveScore() {
    const scores = JSON.parse(localStorage.getItem('mathBalanceScores')) || [];

    scores.push({
        date: new Date().toISOString(),
        level: currentLevel,
        completed: `${correctAnswers}/${currentProblems.length}`,
        score: score.total,
        badges: [...earnedBadges]
    });

    localStorage.setItem('mathBalanceScores', JSON.stringify(scores));
}

// Load scores from localStorage
function loadScores() {
    const scores = JSON.parse(localStorage.getItem('mathBalanceScores')) || [];
    const scoresBody = document.getElementById('scores-body');

    // Clear existing scores
    scoresBody.innerHTML = '';

    // Add scores to table
    scores.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(score => {
        const row = document.createElement('tr');

        // Format date
        const date = new Date(score.date);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

        // Get level name
        let levelName;
        switch (score.level) {
            case 'beginner': levelName = 'Beginner'; break;
            case 'easy': levelName = 'Easy'; break;
            case 'medium': levelName = 'Medium'; break;
            case 'worldHero': levelName = 'World Hero'; break;
            default: levelName = 'Unknown';
        }

        // Create badge HTML
        const badgeHTML = (score.badges || []).map(b => {
            const badge = badges[b];
            if (badge) {
                return `<span class="badge rounded-pill bg-info text-dark me-1" title="${badge.description}">
                    <i class="fas ${badge.icon} me-1"></i>${badge.name}
                </span>`;
            }
            return '';
        }).join('');

        row.innerHTML = `
            <td>${formattedDate}</td>
            <td>${levelName}</td>
            <td>${score.completed}</td>
            <td>${score.score}</td>
            <td>${badgeHTML}</td>
        `;

        scoresBody.appendChild(row);
    });

    // Show message if no scores
    if (scores.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" style="text-align:center;">No scores yet!</td>';
        scoresBody.appendChild(row);
    }
}

// Clear all scores
function clearScores() {
    if (confirm('Are you sure you want to clear all scores?')) {
        localStorage.removeItem('mathBalanceScores');
        loadScores();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', init);