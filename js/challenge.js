let intervalID;
let counter = document.getElementById("counter")
// starts the counter 
document.addEventListener('DOMContentLoaded', function(e) {
    intervalID = window.setInterval(myCallback, 1000, counter);
});

function myCallback(browserNum) {
    const newNum = parseInt(browserNum.innerText) + 1
    counter.innerText = newNum
}

// this is adding an subtracting the numbers from the counter

document.querySelector('#minus').addEventListener('click', minusCounter);
document.querySelector('#plus').addEventListener('click', plusCounter);


function plusCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function minusCounter() {
    counter.innerText = parseInt(counter.innerText) - 1
}

document.querySelector('#heart').addEventListener('click', likeCounter);

function likeCounter() {
    let li = document.createElement("li"); 
    li.innerText = `${counter.innerText} has been liked` 
    document.querySelector('.likes').appendChild(li);
}

// this is for adding the comments 
document.querySelector('#submit').addEventListener('click', comment);

function comment(e) {
    e.preventDefault()
    const userInput = document.getElementById('comment-input').value

    let p = document.createElement("p");
    p.innerText = userInput
    document.getElementById('list').appendChild(p)

    console.log(userInput)
}

// this pauses the buttons and counters 

const buttons = [
    document.querySelector('#minus'),
    document.querySelector('#plus'),
    document.querySelector('#heart'),
    document.querySelector('#submit'),
    document.querySelector('#comment-input')
]

document.querySelector('#pause').addEventListener('click', pauseStart); 

let isRunning = true;
let pauseButton = document.querySelector('#pause')

function pauseStart() {
    isRunning ? counterPause() : counterPlay(); 
}

function counterPause() {
    buttons.forEach(function(node) {
        node.disabled = true;
    });
    isRunning = false;
    pauseButton.innerText = 'Play'
    clearInterval(intervalID)
}

function counterPlay() {
    buttons.forEach(function(node) {
        node.disabled = false;
    });
    isRunning = true;
    pauseButton.innerText = 'Pause'
    intervalID = setInterval(myCallback, 1000, counter);
}