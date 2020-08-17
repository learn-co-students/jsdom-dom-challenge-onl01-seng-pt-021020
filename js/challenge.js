    // nodes
    const counter = document.getElementById('counter');
    const pause = document.getElementById('pause');
    const decrement = document.getElementById('minus');
    const increment = document.getElementById('plus');
    const like = document.getElementById('heart');
    const comment = document.getElementById('comment-form');
    const submit = document.getElementById('submit');

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

        let likedNum = parseInt(counter.innerHTML);

        const existingLike = document.getElementById(likedNum)

        if (existingLike === null) {
            let liked = document.createElement('li');
            liked.id = likedNum
            const str = `${likedNum} has been liked 1 time`
            liked.innerHTML = str;
            likes.append(liked);
        } else {
            const likeArr = existingLike.innerText.split(' ')
            likeArr.pop()
            let likeNum = likeArr.pop()

            likeArr.push((parseInt(likeNum)) + 1)
            likeArr.push('times')
            existingLike.innerText = likeArr.join(' ')
        }
    });

    // pause
    pause.addEventListener('click', function(e) {
        if (timer) {
            timer = false
            pause.innerText = "Resume";
            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
            submit.disabled = true
            counter.innerText = 0;
        } else {
            timer = true;
            pause.innerText = "Pause"
            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            submit.disabled = false
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
