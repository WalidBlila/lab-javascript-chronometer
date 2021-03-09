const chronometer = new Chronometer();
console.log(chronometer);

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    // si le chronométre est a l'arret et que l'on appui sur le bouton start alors en change la class et le text de btnLeft btnRigth
    //  et on lance la methode startclick de la class chronometer
    btnLeft.className = "btn stop";
    btnLeft.textContent = "STOP";

    btnRight.className = "btn split";
    btnRight.textContent = "SPLIT";

    chronometer.startClick(printTime);
  } else {
    // si le chronométre tourne et que l'on appui sur le bouton stop alors en change la class et le text de btnLeft btnRigth
    // et on stop le chronométre
    btnLeft.className = "btn start";
    btnLeft.textContent = "START";

    btnRight.className = "btn reset";
    btnRight.textContent = "RESET";

    chronometer.stopClick();
  }
  console.log(chronometer);
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // if (btnLeft.className === "btn start") {
  // } else {
  // }
});
