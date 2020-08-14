    // nodes
    const counter = document.getElementById('counter');
    const pause = document.getElementById('pause');
    const decrement = document.getElementById('minus');
    const increment = document.getElementById('plus');
    const like = document.getElementById('heart');
    const comment = document.getElementById('comment-form');

    // timer state
    let timer = true

    // set up interval
    setInterval(function() {
            if (timer) {
                counter.innerText++;
            }
    }, 1000);

    // Increment
    increment.addEventListener('click', function(e) {
        if(timer) {
            counter.innerText++;
        }
    });

    // decrement
    decrement.addEventListener('click', function(e) {
        if(timer) {
            counter.innerText--;
        }
    });

    // like
    like.addEventListener('click', function(e) {
        let likes = document.querySelector('.likes');

        let liked = document.createElement('li');

        let likedNum = parseInt(counter.innerHTML);

        liked.innerHTML = likedNum;

        likes.append(liked);
    });

    // pause
    pause.addEventListener('click', function(e) {
        if (timer) {
            timer = false;
            pause.innerText = "Resume";
        } else {
            timer = true;
            pause.innerText = "Pause"
        }
    });

    // comments
    comment.addEventListener('submit', function(e) {
        // Prevent Refresh
        e.preventDefault()

        // Node
        let comments = document.getElementById('list');

        // Input
        let input = document.querySelector('input#comment-input').value;

        // create Element
        let p = document.createElement('p');
        p.innerText = input;

        // Insert Value
        comments.append(p);

        // Clear String
        document.querySelector('input#comment-input').value = '';
    })



// can manually increment and decrement the counter w/ plus & minus button

// user can like a individual number of the counter - I should see the count of the number of likes associated with that number

// as a user, I can pause the counter && disable all buttong except pause && show the button resume.


// leave comments on my gameplace