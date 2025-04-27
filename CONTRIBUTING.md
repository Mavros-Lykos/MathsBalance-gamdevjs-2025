# Contributing to Maths Balance

Thank you for your interest in contributing to Maths Balance! We're excited to have you join our community of developers working to make math education more engaging and accessible.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Adding New Math Problems](#adding-new-math-problems)
  - [Code Contributions](#code-contributions)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [GameDevJS Challenge Requirements](#gamedevjs-challenge-requirements)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. Fork the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/Mavros-Lykos/MathsBalance-gamdevjs-2025.git
   cd MathsBalance-gamdevjs-2025
   ```
3. Set up the development environment as described in the [Development Setup](#development-setup) section
4. Create a branch for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

#### helps as much as you can we highly encourage developers to help us even by giving a simple idea !

### Reporting Bugs

Before submitting a bug report:

1. Check the [issue tracker](https://github.com/original-username/maths-balance/issues) to see if the issue has already been reported
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected and actual behavior
   - Screenshots (if applicable)
   - Browser and OS information

### Suggesting Enhancements

Enhancement suggestions are welcome! To suggest an enhancement:

1. Check if the enhancement has already been suggested in the [issue tracker](https://github.com/original-username/maths-balance/issues)
2. If not, create a new issue with:
   - A clear title prefixed with "[Enhancement]"
   - A detailed description of the proposed feature
   - Explanation of why it would be valuable
   - Any relevant mockups or examples

### Adding New Math Problems

One of the most valuable ways to contribute is by adding new math problems to the game:

1. Ensure the problem demonstrates real-world mathematical balance
2. Create or find an appropriate image for the problem
3. Add the problem to the appropriate difficulty category
4. Follow the format in `game.js` (see README for examples)
5. Include a clear explanation of how the problem relates to balance
6. Test your problem in the game before submitting

### Code Contributions

We welcome code improvements, new features, and bug fixes:

1. Review the [Style Guidelines](#style-guidelines)
2. Make your changes on your feature branch
3. Test thoroughly
4. Submit a pull request (see [Pull Request Process](#pull-request-process))

## Development Setup

To set up your development environment:

1. Install a text editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
2. Install the Live Server extension for VS Code
3. Open the project folder in VS Code
4. Right-click on the appropriate `index.html` file and select "Open with Live Server"

### Working with MDB Bootstrap

If you're modifying the MDB versions:

1. Familiarize yourself with [MDB Bootstrap documentation](https://mdbootstrap.com/docs/)
2. Focus on the MDB-Local version for development
3. Note that modifications to the MDB-CDN version should be synchronized with the local version

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure your code follows our style guidelines
3. Make sure all your commits are signed off (`git commit -s`)
4. Submit the pull request with a clear title and description
5. Link any relevant issues using keywords (fixes, closes, resolves)
6. Wait for review and address any feedback

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Include appropriate ARIA attributes for accessibility
- Keep indentation consistent (2 spaces recommended)

### CSS

- Use descriptive class names
- Comment complex or non-obvious styles
- Follow responsive design practices
- When using MDB, leverage existing classes where possible

### JavaScript

- Follow ES6+ syntax where appropriate
- Use meaningful variable and function names
- Comment your code, especially complex logic
- Write modular, reusable functions
- Add JSDoc comments for functions

Example:
```javascript
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
```

## GameDevJS Challenge Requirements

As this project is participating in the GameDevJS Game Jam, contributions should align with the jam's requirements:

1. **Educational value**: Contributions should maintain or enhance the educational aspects of the game
2. **Balance theme**: All content should relate to the concept of mathematical balance
3. **Accessibility**: The game should be playable across different devices and browsers
4. **Documentation**: Code and features should be well-documented
5. **Visual appeal**: Visual elements should be engaging and supportive of learning

## Community

Join our Discussion to  discuss the project, ask questions, and connect with other contributors:
---

Thank you for contributing to Maths Balance and helping make math education more engaging for everyone!