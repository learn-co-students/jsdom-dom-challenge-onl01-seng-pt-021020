let i = -1;
//so the increment function on the page starts at 0 and not -1
let j = 0;
//j is going to be for likes
const interval = setInterval(increment, 1000);
let Enabled = true;


function increment(){
	if (Enabled === true) {
    i++;
	  document.querySelector('h1#counter').textContent = i;
	  j = 0;
	}
} //find h1 with id of counter and set its text content equal to i
//this increment function i s for the counter that counts automatically

increment();
//call the function so it's running on the page


document.getElementById("minus").addEventListener("click", function() {
  i--;
  document.querySelector('h1#counter').textContent = i;
});
//subtract the counter if the minus button is clicked

document.getElementById("plus").addEventListener("click", function() {
  i++;
  document.querySelector('h1#counter').textContent = i;
});
//increment the counter if the plus button is clicked;



document.getElementById("heart").addEventListener("click", function() {
  j++;
  const li = document.createElement("li");
    //create a list element
  const node = document.createTextNode(i + " has been liked " + j + " time(s).");
  //literally just creates some text
  const likes = document.querySelector('.likes');
  // .likes is a class right now
  const lastLike = document.querySelector('.likes').lastChild;
  li.appendChild(node);
    //add the "i has been liked j times" to the li element

  if(j>1){
   lastLike.replaceWith(li)
   //lastLike will be equal to the li element
  } else {
    likes.appendChild(li);
  }
  //Is this bit really necessary?
});


document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  const comment = document.querySelector('input#comment-input').value
  //the text value of a comment
  const commentsList = document.querySelector('.comments')
  //all comments
  const p = document.createElement("p");
  const node = document.createTextNode(comment)
  //create a node with comment
  p.appendChild(node);
  //add the nodes to a p tag
  commentsList.appendChild(p);
  //now add those p tags to a comment list
  document.querySelector('input#comment-input').value = ''
});


document.getElementById("pause").addEventListener("click", function(){
  if(Enabled === true){
    Enabled = false;

    document.querySelector('#pause').innerText = "resume";
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById('comment-input').disabled = true;
  } else {

    Enabled = true;

    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById('comment-input').disabled = false;

  }
});
