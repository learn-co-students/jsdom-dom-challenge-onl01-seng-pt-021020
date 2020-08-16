let i =-1;
let j = 0;
const interval = setInterval( increment, 1000);
let running = true


function increment(){
    i++;
    document.querySelector('h1#counter').textContent = i;
    j = 0;
}

increment();

document.getElementById("minus").addEventListener("click", function(){
  i--;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("plus").addEventListener("click", function(){
  i++;
  document.querySelector('h1#counter').textContent = i;
});

document.getElementById("heart").addEventListener("click", function(){
  j++;
  const li = document.createElement("li");
  const node = document.createTextNode(i + " has been liked " + j + " time(s).")
  const likes = document.querySelector('.likes')
  const lastLike = document.querySelector('.likes').lastChild
  li.appendChild(node);
  if(j>1){
   lastLike.replaceWith(li)
  } else {
    likes.appendChild(li);
  }
});



document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  const comment = document.querySelector('input#comment-input').value
  const commentsList = document.querySelector('.comments')
  const p = document.createElement("p");
  const node = document.createTextNode(comment)
  p.appendChild(node);
  commentsList.appendChild(p);
  document.querySelector('input#comment-input').value = ''
});


document.getElementById("pause").addEventListener("click", function(){
  if(running === true){

  	 clearInterval(interval); 
  
   running = false;
    
    document.querySelector('#pause').innerText = "resume";
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
     document.getElementById('comment-input').disabled = true;
  } else 

  {
   running = true;

    document.querySelector('#pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
     document.getElementById('comment-input').disabled = false;

  }
});