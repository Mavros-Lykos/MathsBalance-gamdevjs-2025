
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const screens = {
        home: document.getElementById("home-screen"),
        level: document.getElementById("level-screen"),
        tutorial: document.getElementById("tutorial-screen"),
        game: document.getElementById("game-screen"),
        result: document.getElementById("result-screen"),
        scores: document.getElementById("scores-screen"),
    };

    const playBtn = document.getElementById("play-btn");
    const scoresBtn = document.getElementById("scores-btn");
    const submitBtn = document.getElementById("submit-btn");
    const hintBtn = document.getElementById("hint-btn");
    const restartBtn = document.getElementById("restart-btn");
    const backHomeBtn = document.getElementById("go-home-btn");
    const playAgainBtn = document.getElementById("play-again-btn");

    const answerInput = document.getElementById("answer-input");
    const hintBox = document.getElementById("hint-box");
    const gameProblem = document.getElementById("game-problem");
    const timerDisplay = document.getElementById("timer");
    const resultCorrect = document.getElementById("correct-count");
    const resultIncorrect = document.getElementById("incorrect-count");
    const resultHints = document.getElementById("hints-used");
    const resultScore = document.getElementById("final-score");
    const badgeDisplay = document.getElementById("badge-display");
    const scoreList = document.getElementById("score-list");

    // Game Variables
    let currentProblemIndex = 0;
    let problems = [];
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let hintsUsed = 0;
    let score = 0;
    let timer;
    let timeLeft = 30;

    // Screen Control
    function switchScreen(show) {
        Object.values(screens).forEach((s) => s.classList.add("d-none"));
        screens[show].classList.remove("d-none");
    }

    // Timer
    function startTimer() {
        timeLeft = 30;
        timerDisplay.textContent = timeLeft;
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleSubmit(); // auto-submit
            }
        }, 1000);
    }

    // Load Problem
    function loadProblem() {
        const current = problems[currentProblemIndex];
        gameProblem.textContent = current.question;
        answerInput.value = "";
        hintBox.classList.add("d-none");
    }

    // Submit Answer
    function handleSubmit() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = problems[currentProblemIndex].answer;

        if (userAnswer === correctAnswer) {
            correctAnswers++;
            score += 10;
        } else {
            incorrectAnswers++;
        }

        currentProblemIndex++;
        clearInterval(timer);

        if (currentProblemIndex < problems.length) {
            loadProblem();
            startTimer();
        } else {
            showResults();
        }
    }

    // Show Results
    function showResults() {
        switchScreen("result");
        resultCorrect.textContent = correctAnswers;
        resultIncorrect.textContent = incorrectAnswers;
        resultHints.textContent = hintsUsed;
        resultScore.textContent = score;

        displayBadges();
        saveScore();
    }

    // Badges
    function displayBadges() {
        badgeDisplay.innerHTML = "";

        if (score >= 30) badgeDisplay.innerHTML += createBadge("Perfect Score", "fa-star", "primary");
        if (hintsUsed === 0) badgeDisplay.innerHTML += createBadge("Self-Reliant", "fa-lightbulb", "warning");
        if (correctAnswers === problems.length) badgeDisplay.innerHTML += createBadge("Math Whiz", "fa-brain", "success");
        if (timeLeft > 10) badgeDisplay.innerHTML += createBadge("Speedster", "fa-bolt", "danger");
    }

    function createBadge(label, icon, color) {
        return `<span class="badge bg-${color} me-2">
              <i class="fas ${icon} me-1"></i>${label}
            </span>`;
    }

    // Save Scores
    function saveScore() {
        const scores = JSON.parse(localStorage.getItem("mathScores") || "[]");
        scores.push({
            player: "You",
            score: score,
            badges: badgeDisplay.innerHTML,
            time: new Date().toLocaleString(),
        });
        localStorage.setItem("mathScores", JSON.stringify(scores));
    }

    // Load Score Table
    function loadScores() {
        const scores = JSON.parse(localStorage.getItem("mathScores") || "[]");
        scoreList.innerHTML = scores
            .map(
                (s, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${s.player}</td>
        <td>${s.score}</td>
        <td>${s.badges}</td>
        <td>${s.time}</td>
      </tr>`
            )
            .join("");
    }

    // Game Start
    function startGame() {
        currentProblemIndex = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        hintsUsed = 0;
        score = 0;
        loadProblem();
        switchScreen("game");
        startTimer();
    }

    // Event Listeners
    playBtn.addEventListener("click", () => switchScreen("level"));
    scoresBtn.addEventListener("click", () => {
        loadScores();
        switchScreen("scores");
    });
    submitBtn.addEventListener("click", handleSubmit);
    hintBtn.addEventListener("click", () => {
        hintBox.classList.remove("d-none");
        hintBox.querySelector("div").textContent = problems[currentProblemIndex].hint;
        hintsUsed++;
    });
    restartBtn.addEventListener("click", startGame);
    playAgainBtn.addEventListener("click", startGame);
    backHomeBtn.addEventListener("click", () => switchScreen("home"));

    document.querySelectorAll(".level-card").forEach((card) =>
        card.addEventListener("click", () => {
            startGame(); // You can also pass different sets of problems here by difficulty
        })
    );

});

