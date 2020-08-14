document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const likes = document.getElementsByClassName('likes')[0]
    const submit = document.getElementById('submit')
    const commentForm = document.getElementById('comment-input')
    const comments = document.getElementById('list')
    let counterSpeed = setInterval(countUp, 1000)
    let running = true

    function countUp() {
        if (running === true){
            counter.innerHTML++
        }
    };

    plus.addEventListener("click", function() {
        counter.innerHTML++
    });

    minus.addEventListener("click", function() {
        counter.innerHTML--
    });

    heart.addEventListener("click", function() {
        const likesList = document.createElement('li');
        let likeTracker = document.createTextNode(`${counter.innerHTML} has been liked.`)
        likesList.appendChild(likeTracker);
        likes.appendChild(likesList);
    });

    submit.addEventListener('click', function() {
        event.preventDefault();
        const newComment = document.createElement('p');
        let commentText = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentText);
        comments.appendChild(newComment)
        commentForm.value = '';
    });

    pause.addEventListener('click', function() {
        if (running === true){
            running = false
            pause.innerHTML = "resume";
            heart.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
        }
        else {
            running = true;
            pause.innerHTML = "pause";
            heart.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
        };
    });
});