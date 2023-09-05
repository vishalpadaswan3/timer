let player1 = document.getElementById("pl1");
let player2 = document.getElementById("pl2");

let start = document.getElementById("start");
let restart = document.getElementById("restart");

function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  player1.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  if (seconds > 10) {
    // Check if timer has reached 5 minutes
    clearInterval(timerInterval); // Stop the timer
    swal({
      title: "Congrats !",
      text: "Player 2 Won the game 🥳🥂",
      imageUrl:
        "https://i.pinimg.com/originals/42/92/b1/4292b10ce16a67a7cab81008f6c08485.gif",
    });
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
  seconds++;
}

function updateTimer2() {
  const minutes = Math.floor(seconds2 / 60);
  const remainingSeconds2 = seconds2 % 60;
  player2.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds2
  ).padStart(2, "0")}`;

  if (seconds2 > 10) {
    // Check if timer has reached 5 minutes
    clearInterval(timerInterval); // Stop the timer
    swal({
      title: "Congrats !",
      text: "Player 1 Won the game 🥳🥂",
      imageUrl:
        "https://i.pinimg.com/originals/42/92/b1/4292b10ce16a67a7cab81008f6c08485.gif",
    });
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
  seconds2++;
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resumeTimer() {
  seconds = 0;
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer2() {
  clearInterval(timerInterval2);
}

function resumeTimer2() {
  seconds2 = 0;
  timerInterval2 = setInterval(updateTimer2, 1000);
}

start.addEventListener("click", () => {
  seconds = 0; // Reset the timer
  seconds2 = 0;
  timerInterval = setInterval(updateTimer, 1000); //timer has incresed here
  start.style.display = "none";
});

player1.addEventListener("click", () => {
  player1.style.backgroundColor = "white";
  player2.style.backgroundColor = "rgb(157, 236, 157)";
  // Reset the timer
  pauseTimer();
  updateTimer2();
  resumeTimer2();
});
player2.addEventListener("click", () => {
  player2.style.backgroundColor = "white";
  player1.style.backgroundColor = "rgb(157, 236, 157)";
  resumeTimer();
  updateTimer();
  pauseTimer2();
});

restart.addEventListener("click", () => {
  window.location.reload();
});
