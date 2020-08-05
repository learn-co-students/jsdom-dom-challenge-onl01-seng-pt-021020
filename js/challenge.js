let counter_id = document.getElementById("counter");
let pause_id = document.getElementById("pause");
let minus_id = document.getElementById("minus");
let plus_id = document.getElementById("plus");
let heart_id = document.getElementById("heart");
let list_id = document.getElementById("list");
let comment_id = document.getElementsByTagName("form")[0];

let loaded = true;

let counter = 0;

//As a user, i should see the timer increment every second once the page has loaded
let timer = setInterval(function () {
  if (loaded) {
    counter_id.innerHTML = counter;
    counter += 1;
  }
}, 1000);

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.
plus_id.addEventListener("click", function () {
  counter += 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;
});

minus_id.addEventListener("click", function () {
  counter -= 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;
});

//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
heart_id.addEventListener("click", function () {
  let likes = document.querySelector(".likes");
  if (document.getElementById(`Li${counter}`) == null) {
    let li = document.createElement("li");
    li.setAttribute("id", `Li${counter}`);
    li.innerHTML = `${counter} has this many likes: 1`;
    likes.appendChild(li);
  } else {
    let li = document.getElementById(`Li${counter}`);
    let split = parseInt(li.innerHTML.split(":")[1]) + 1;
    li.innerHTML = `${counter} has this many likes: ${split}`;
    likes.appendChild(li);
  }
});

//As a user, I can pause the counter, which should
//pause the counter
//disable all buttons except the pause button
//the pause button should then show the text "resume."
pause_id.addEventListener("click", function () {
  if (loaded) {
    pause_id.innerHTML = "resume";
    loaded = false;
  } else {
    pause_id.innerHTML = "pause";
    loaded = true;
  }
});

comment_id.addEventListener("submit", function (a) {
  a.preventDefault();
  let b = this.children[0];
  let c = b.value;
  b.value = "";
  let d = document.querySelector(".comments");
  let e = document.createElement("p");
  e.innerText = c;
  d.appendChild(e);
});
