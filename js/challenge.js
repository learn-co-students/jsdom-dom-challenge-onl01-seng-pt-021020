const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
const subtract = document.getElementById('-');
const add = document.getElementById('+');
const like = document.getElementById('<3');
const comment = document.getElementById('submit');


let timer = true;

setInterval(function () {
  if (timer) {
    counter.innerText++;
  }
}, 1000);

pause.addEventListener('click', function(e) {
  if (timer) {
    timer = false;
    pause.innerText = "Continue"
  } else {
    timer = true;
    pause.innerText = "Pause"
  }
});

subtract.addEventListener('click', function(e) {
  if (timer) {
    counter.innerText--;
  }
});

add.addEventListener('click', function(e) {
  if (timer) {
    counter.innerText++;
  }
});

like.addEventListener('click', function(e) {
  let likes = document.querySelector('.likes');
  let liked = document.createElement('li');

  let likedNum = parseInt(counter.innerHTML);

  liked.innerHTML = likedNum;

  likes.append(liked);

});

comment.addEventListener('click', function(e) {
  e.preventDefault();
  let getComments = document.querySelector('.comments');
  let getCommentValue = document.querySelector('#comment-value').value;

  let createCommentParagraph = document.createElement('p');

  createCommentParagraph.innerHTML = `${getCommentValue}`;

  getComments.append(createCommentParagraph);


});