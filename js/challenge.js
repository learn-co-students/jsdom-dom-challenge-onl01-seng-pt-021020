// Elements
let counterElement = document.getElementById('counter');
let minusElement = document.getElementById('minus');
let plusElement = document.getElementById('plus');
let heartElement = document.getElementById('heart');
let pauseElement = document.getElementById('pause');
let likes = document.querySelector('.likes');
let formId = document.getElementById('comment-form');
let commentsDiv = document.getElementById('list');

//Variables
let start = true
let counter = 0;

// 1 Second Timer Function
let timer = setInterval(function() {
    if (start) {
        counterElement.innerHTML = counter;
        counter ++;
    }
}, 1000);

// Plus Function
plusElement.addEventListener('click', function() {
    counter ++;
    counterElement.innerHTML = parseInt(counterElement.innerHTML) + 1;
})

// Minus Function
minusElement.addEventListener('click', function() {
    counter -= 1;
    counterElement.innerHTML = parseInt(counterElement.innerHTML) - 1;
})

// Pause Function
pauseElement.addEventListener('click', function() {
    if (start == true) {
        start = false;
        pauseElement.innerHTML = "resume";
    }
    else {
         start = true
         counter = 0;
         pauseElement.innerHTML = "pause";
    }
})

// Likes Function
heartElement.addEventListener('click', function() {
    if (document.getElementById(`li-${counter -1}`) == null) {
        let numberOfLikes = 1;
        let li = document.createElement('li');
        li.setAttribute('id', `li-${counter -1}`);
        li.innerHTML = `${counter-1} has this many likes:${numberOfLikes}`
        likes.appendChild(li);
    }
    else {
        let li = document.getElementById(`li-${counter - 1}`);
        let numberOfLikes = parseInt(li.innerHTML.split(":")[1]) + 1;
        li.innerHTML = `${counter -1} has this many likes:${numberOfLikes}`
    }
})

// Comments Function
formId.addEventListener('submit', function(event) {
    event.preventDefault();
    li = document.createElement('li');
    li.innerText = formId[0]['value'];
    commentsDiv.appendChild(li);
    formId[0]['value'] = "";
})


