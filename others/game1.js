// Game variables
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

// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const levelCompleteSound = document.getElementById('level-complete-sound');

// Screen elements
const screens = {
    home: document.getElementById('home-screen'),
    level: document.getElementById('level-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen'),
    scores: document.getElementById('scores-screen')
};

// Button elements
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
    loadScores();
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
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

// Start a new game
function startGame(level) {
    // Set up game variables based on level
    currentLevel = level;
    currentProblemIndex = 0;
    correctAnswers = 0;
    usedHints = 0;
    score = { base: 0, timeBonus: 0, hintBonus: 0, total: 0 };
    earnedBadges = [];
    
    // Get problems for the selected level
    // For testing, we're using only 3 problems per level
    // In a full game, we would randomly select 10 problems from a larger pool
    currentProblems = [...problems[level]];
    
    // Set time limit based on difficulty
    switch (level) {
        case 'beginner': 
            timeLeft = 60; 
            break;
        case 'easy': 
            timeLeft = 90; 
            break;
        case 'medium': 
            timeLeft = 120; 
            break;
        case 'worldHero': 
            timeLeft = 180; 
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
    if (currentProblemIndex < currentProblems.length) {
        const problem = currentProblems[currentProblemIndex];
        
        // Reset problem state
        usedHintInCurrentProblem = false;
        feedback.classList.add('hidden');
        hintText.classList.add('hidden');
        hintBtn.textContent = 'Show Hint';
        
        // Update UI
        problemText.textContent = problem.question;
        problemImage.src = problem.image;
        hintContent.textContent = problem.hint;
        unitDisplay.textContent = problem.unit;
        answerInput.value = '';
        answerInput.focus();
        
        // Update progress
        const problemsToShow = Math.min(totalProblems, currentProblems.length);
        progressText.textContent = `Problem ${currentProblemIndex + 1}/${problemsToShow}`;
        progressFill.style.width = `${((currentProblemIndex + 1) / problemsToShow) * 100}%`;
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
        hintBtn.textContent = 'Hide Hint';
        if (!usedHintInCurrentProblem) {
            usedHintInCurrentProblem = true;
            usedHints++;
        }
    } else {
        hintBtn.textContent = 'Show Hint';
    }
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    const currentProblem = currentProblems[currentProblemIndex];
    
    // Check if the answer is empty or not a number
    if (answerInput.value.trim() === '' || isNaN(userAnswer)) {
        showFeedback('Please enter a valid number.', false);
        return;
    }
    
    // Check if the answer is correct (with some tolerance for floating point)
    const isCorrect = Math.abs(userAnswer - currentProblem.answer) < 0.01;
    
    if (isCorrect) {
        // Play correct sound
        correctSound.play();
        
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
        
        // Add time bonus
        const maxTime = getLevelMaxTime(currentLevel);
        const timeBonus = Math.round((timeLeft / maxTime) * (basePoints / 2));
        score.timeBonus += timeBonus;
        
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
        }, 2000);
    } else {
        // Play wrong sound
        wrongSound.play();
        
        // Show feedback
        showFeedback('Not quite right. Try again!', false);
    }
}

// Show feedback to the user
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect === true) {
        feedback.classList.add('correct');
    } else if (isCorrect === false) {
        feedback.classList.add('incorrect');
    }
}

// Show time's up message
function showTimesUpFeedback() {
    showFeedback("Time's up!", false);
}

// End the game
function endGame() {
    // Stop the timer
    stopTimer();
    
    // Play level complete sound
    levelCompleteSound.play();
    
    // Calculate total score
    score.total = score.base + score.timeBonus + score.hintBonus;
    
    // Check for additional badges
    if (correctAnswers === currentProblems.length) {
        addBadge('perfectScore');
    }
    
    if (usedHints === 0) {
        addBadge('noHints');
    }
    
    if (currentLevel === 'worldHero' && correctAnswers > 0) {
        addBadge('mathWhiz');
    }
    
    if (correctAnswers === currentProblems.length && currentLevel === 'worldHero') {
        addBadge('balanceMaster');
    }
    
    // Update the results screen
    updateResultsScreen();
    
    // Save the score
    saveScore();
    
    // Show the results screen
    showScreen('results-screen');
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
        badgeEl.className = 'badge';
        badgeEl.innerHTML = `<i class="fas ${badge.icon}"></i> ${badge.name}`;
        badgeEl.title = badge.description;
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
        case 'beginner': return 60;
        case 'easy': return 90;
        case 'medium': return 120;
        case 'worldHero': return 180;
        default: return 60;
    }
}

// Save score to localStorage
function saveScore() {
    // Get existing scores
    const scores = JSON.parse(localStorage.getItem('mathBalanceScores')) || [];
    
    // Add new score
    scores.push({
        date: new Date().toISOString(),
        level: currentLevel,
        completed: `${correctAnswers}/${currentProblems.length}`,
        score: score.total
    });
    
    // Save back to localStorage
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
        
        // Format level
        let levelName;
        switch (score.level) {
            case 'beginner': levelName = 'Beginner'; break;
            case 'easy': levelName = 'Easy'; break;
            case 'medium': levelName = 'Medium'; break;
            case 'worldHero': levelName = 'World Hero'; break;
            default: levelName = score.level;
        }
        
        row.innerHTML = `
            <td>${formattedDate}</td>
            <td>${levelName}</td>
            <td>${score.completed}</td>
            <td>${score.score}</td>
        `;
        
        scoresBody.appendChild(row);
    });
    
    // Show message if no scores
    if (scores.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="4" style="text-align:center;">No scores yet!</td>';
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