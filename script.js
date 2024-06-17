let team1Score = 0;
let team2Score = 0;

function incrementScore(team) {
    if (team === 'team1') {
        team1Score++;
        document.getElementById('team1Score').innerText = team1Score;
    } else if (team === 'team2') {
        team2Score++;
        document.getElementById('team2Score').innerText = team2Score;
    }
}


function decrementScore(team) {
    if (team === 'team1' && team1Score > 0) {
        team1Score--;
        document.getElementById('team1Score').innerText = team1Score;
    } else if (team === 'team2' && team2Score > 0) {
        team2Score--;
        document.getElementById('team2Score').innerText = team2Score;
    }
}

function updateTeamName(teamId, element) {
    const teamName = element.innerText.slice(0, 25); // Limit to 25 characters
    element.innerText = teamName;
    adjustFontSize(element);
}

function adjustFontSize(element) {
    const teamNameLength = element.innerText.length;
    const baseFontSize = 20; // Set your base font size

    if (teamNameLength <= 10) {
        element.style.fontSize = `${baseFontSize}px`;
    } else {
        const fontSize = baseFontSize - (teamNameLength - 10);
        element.style.fontSize = `${fontSize}px`;
    }
}
// ... (remaining JavaScript code) ...



function resetScores() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('team1Score').innerText = team1Score;
    document.getElementById('team2Score').innerText = team2Score;
}


let timer;
let timerRunning = false;

// ... (previous JavaScript code) ...

function startTimer() {
    const timeInput = document.getElementById('timerInput').value;
    const timeInMinutes = parseInt(timeInput, 10);

    if (!isNaN(timeInMinutes) && timeInMinutes > 0 && !timerRunning) {
        let timeRemaining = timeInMinutes * 60; // Convert minutes to seconds
        updateTimerDisplay(timeRemaining);

        timer = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay(timeRemaining);

                if (timeRemaining === 180) {
                    playBeepSound();
                }

                if (timeRemaining === 120) {
                    playBeepSound();
                }

                if (timeRemaining === 60) {
                    playBeepSound();
                }
            

            } else {
                stopTimer();
            }
        }, 1000);

        timerRunning = true;
    }
}

// ... (remaining JavaScript code) ...


function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    document.getElementById('timerInput').value = '';
    updateTimerDisplay(0);
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timerDisplay').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}



// ... (previous JavaScript code) ...

let secondTimer;
let secondTimerRunning = false;

function startSecondTimer() {
    const timeInSeconds = 30;

    if (!secondTimerRunning) {
        let timeRemaining = timeInSeconds;
        updateSecondTimerDisplay(timeRemaining);

        secondTimer = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateSecondTimerDisplay(timeRemaining);


              
                if (timeRemaining === 6) {
                    playBeepSound();
                }
              
                if (timeRemaining === 5) {
                    playBeepSound();
                }

                if (timeRemaining === 4) {
                    playBeepSound();
                }

                if (timeRemaining === 3) {
                    playBeepSound();
                }

                if (timeRemaining === 2) {
                    playBeepSound();
                }

                if (timeRemaining === 1) {
                    playBeepSound();
                
                }


            } else {
                stopSecondTimer();
            }
        }, 1000);

        secondTimerRunning = true;
    }
}

function stopSecondTimer() {
    clearInterval(secondTimer);
    secondTimerRunning = false;
}

function resetSecondTimer() {
    stopSecondTimer();
    updateSecondTimerDisplay(30);
}

function updateSecondTimerDisplay(time) {
    const seconds = time % 60;
    document.getElementById('secondTimerDisplay').innerText = `0:${seconds < 10 ? '0' : ''}${seconds}`;
}

function playBeepSound() {
    const beepSound = document.getElementById('beepSound');
    beepSound.play();
}


// ... (previous JavaScript code) ...

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timerDisplay = document.getElementById('timerDisplay');

    // Display the last 3 minutes in red
    if (time <= 180) {
        timerDisplay.style.color = 'red';
    } else {
        timerDisplay.style.color = 'black';
    }

    timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateSecondTimerDisplay(time) {
    const seconds = time % 60;
    const secondTimerDisplay = document.getElementById('secondTimerDisplay');

    // Display the last 3 seconds in red
    if (time <= 10) {
        secondTimerDisplay.style.color = 'red';
    } else {
        secondTimerDisplay.style.color = 'black';
    }

    secondTimerDisplay.innerText = `0:${seconds < 10 ? '0' : ''}${seconds}`;
}

// ... (remaining JavaScript code) ...


function uploadPhoto(inputId, imageId) {
    const input = document.getElementById(inputId);
    input.click();
}

function handlePhoto(inputId, imageId) {
    const input = document.getElementById(inputId);
    const image = document.getElementById(imageId);
    const label = document.querySelector(`label[for="${inputId}"]`);

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            label.classList.add('uploaded');
            label.querySelector('span').innerText = 'Change Team Photo';
        };
        reader.readAsDataURL(file);

        // Clear the file input to allow re-uploading of the same image
        input.value = '';
    }
}

function login(event) {
    event.preventDefault(); // Prevents the form from submitting (for demonstration purposes)

    // Add your authentication logic here
    alert("Login successful!"); // For demonstration purposes
}




