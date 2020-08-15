document.addEventListener("DOMContentLoaded", () => {
    startCounter;
});

//VARIABLES
let startCounter = setInterval(Counter, 1000);
let isRunning = true

const timer = document.getElementById("counter");
const pause = document.getElementById("pause");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const likeList = document.getElementsByClassName("likes")[0];
const submit = document.querySelector('#submit');
//EVENT LISTENERS
minus.addEventListener("click", decreaseCounter);
plus.addEventListener("click", increaseCounter);
heart.addEventListener("click", likedNumber);
pause.addEventListener("click", pauseStart);
submit.addEventListener('click', comment);

//FUNCTIONS

function Counter() {
    let seconds = parseInt(timer.innerText)
    timer.innerText = seconds + 1;
}

function pauseStart() {
    isRunning ? pauseCounter() : resumeCounter();
}

function pauseCounter() {
    clearInterval(startCounter)
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true
    })
    isRunning = false;
    pause.disabled = false
    pause.innerText = 'resume'
}

function resumeCounter() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false
    })
    isRunning = true;
    pause.innerText = 'pause'
    startCounter = setInterval(Counter, 1000);
}

function decreaseCounter() {
    timer.innerText = parseInt(timer.innerText) - 1;
}

function increaseCounter() {
    timer.innerText = parseInt(timer.innerText) + 1;
}

function likedNumber() {
    const heartNumber = timer.innerText

    const existingLike = document.getElementById(heartNumber)

    if (existingLike === null) {
        const str = `${heartNumber} has been liked 1 time`
        let newLi = document.createElement("li")
        newLi.id = heartNumber
        newLi.innerText = str
        likeList.appendChild(newLi)
    } else {
        const likedArr = existingLike.innerText.split(" ")
        likedArr.pop()
        let likednum = likedArr.pop()
        likedArr.push(parseInt(likednum) + 1)
        likedArr.push("times")
        existingLike.innerText = likedArr.join(" ")
    }
}

function comment(event) {
    event.preventDefault()
    const userInput = document.getElementById('comment-input').value
    let p = document.createElement("p");
    p.innerText = userInput
    document.getElementById('list').appendChild(p)
}