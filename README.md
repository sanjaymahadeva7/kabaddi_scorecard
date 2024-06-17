# Kabaddi Score Card

## Overview

This project is a simple Kabaddi scorecard web application. It allows users to keep track of the scores for two teams, upload team photos, and use timers for match and raiding times.

## Features

- **Score Management**: Increment and decrement scores for both teams.
- **Team Customization**: Upload team photos and edit team names.
- **Timers**: 
  - Match Timer: Set, start, stop, and reset the timer for the match.
  - Raiding Timer: A 30-second timer for raids, with start, stop, and reset functions.
- **Audio Alerts**: Plays a beep sound when timers finish.

## Getting Started

### Prerequisites

To run this project, you need a modern web browser (e.g., Chrome, Firefox, Edge) and an internet connection for the beep sound.

### Files

- `index.html`: The main HTML file containing the structure of the webpage.
- `styles.css`: The CSS file for styling the webpage.
- `script.js`: The JavaScript file containing the logic for score management, photo uploads, and timers.

### Running the Project

1. **Clone the repository** (if applicable) or download the files to your local machine.
2. **Open `index.html`** in your web browser to view and interact with the Kabaddi scorecard.

## Detailed Explanation

### HTML Structure

- **Score Card**: The main container holding the scores and team information.
  - **Team Section**: Each team has its own section with photo upload, editable team name, and score management buttons.
  - **Reset Scores Button**: Resets the scores for both teams to 0.
- **Match Timer**: Allows setting, starting, stopping, and resetting the match timer.
- **Raiding Timer**: A dedicated timer for raid durations, with start, stop, and reset functionalities.
- **Audio Element**: Used to play a beep sound when timers complete.

### CSS (styles.css)

- Used to style the scorecard, team sections, buttons, and timers for a clean and user-friendly interface.

### JavaScript (script.js)

- **Score Management**:
  - `incrementScore(team)`: Increments the score for the specified team.
  - `decrementScore(team)`: Decrements the score for the specified team.
  - `resetScores()`: Resets scores for both teams to 0.
- **Photo Upload**:
  - `uploadPhoto(photoId, imageId)`: Triggers the file input for photo upload.
  - `handlePhoto(photoId, imageId)`: Handles the photo upload and updates the team image.
- **Team Name Update**:
  - `updateTeamName(team, element)`: Updates the team name based on user input.
- **Timers**:
  - `startTimer()`: Starts the match timer.
  - `stopTimer()`: Stops the match timer.
  - `resetTimer()`: Resets the match timer to 0.
  - `startSecondTimer()`: Starts the raiding timer.
  - `stopSecondTimer()`: Stops the raiding timer.
  - `resetSecondTimer()`: Resets the raiding timer to 30 seconds.
  - **Audio Alert**: Plays a beep sound when timers finish.

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
