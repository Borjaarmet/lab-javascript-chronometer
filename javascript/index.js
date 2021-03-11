const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {

    printMinutes()
    printSeconds()
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
    console.log(minutes)
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
    console.log(seconds)
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
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
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.toggle('start');
    btnLeft.classList.toggle('stop');

}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.classList.toggle('reset');
    btnRight.classList.toggle('split');
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.toggle('start');
    btnLeft.classList.toggle('stop');
}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.classList.toggle('reset');
    btnRight.classList.toggle('split');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.innerText === 'START') {
        setStopBtn();
        chronometer.startClick(printTime);

    } else {
        setStartBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.innerText === 'RESET') {
        setSplitBtn();

    } else {
        setResetBtn();
    }
});