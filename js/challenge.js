const counter = document.getElementById("counter"), buttons = document.querySelectorAll("button")
let timeoutID;
function setSpeed() {
  Timer()
}

function Timer(){
  let plusOne = parseInt(counter.textContent) + 1
  counter.innerHTML = plusOne;
  timeoutID = window.setTimeout(setSpeed, 1000);
}

function addFive(){
  add = parseInt(counter.textContent) + 5;
  counter.innerHTML = add;
}

function subFive(){
  let subtract = parseInt(counter.textContent) - 5;
  counter.innerHTML = subtract;
}

function pause(){
  let boolean = document.getElementById("pause")
  if (boolean.textContent === " pause ") {
    boolean.innerHTML = " resume ";
    window.clearTimeout(timeoutID), disBtn();
  } else {
    boolean.innerHTML = " pause ";
    Timer(), ableBtn();
  }
}
function disBtn(){
  buttons.forEach((button)=>{
      button.disabled = true;
    if (button.id === "pause"){
      button.disabled = false;
    }
  });
}

function ableBtn(){
  buttons.forEach((button)=>{
    console.log(button.disabled = false)
  });
}

function likes(){
  let liked = []
  let like = parseInt(counter.textContent)
  let div = document.getElementById("list")
  liked.push(like)
  div.innerHTML = `you liked ${like}, so have ${liked.length} other`
}

function comments(){
  let comments = []
  let newComment = document.querySelector("input").value
  comments.push(newComment)
  let div = document.getElementById("list")
    comments.forEach(comment =>{
      div.innerHTML = comment
    })
}

buttons.forEach(button => {
  button.addEventListener('click', e =>{
    let t = e.target
    if (t.id === "minus") {
      subFive()
      }
      if (t.id === "plus"){
        addFive()
      }
      if (t.id === "pause"){
        pause()
      }
      if (t.id === "heart"){
        likes()
      }
      if (t.id === "submit"){
        comments()
        e.preventDefault()
      }
  });
});

Timer();