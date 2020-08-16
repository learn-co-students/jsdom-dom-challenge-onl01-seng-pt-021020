const tInterval = window.setInterval(timeCount, 1000);
const t = document.getElementById('counter');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(elm) {
	elm.addEventListener('click', function(e) {
		if (elm.id == 'plus') {
			timerUp();
		}
		if (elm.id == 'minus') {
			timerDown();
		}
		if (elm.id == 'heart') {
			likeTime();
		}
		if (elm.id == 'pause') {
			timerPause(elm);
		}
		if (elm.id == 'submit') {
			e.preventDefault();
			comments();
		}
	});
});

function timeCount(time = 0) {
	tNum = parseInt(t.innerText);
	tNum += 1;
	t.innerText = tNum + time;
}

function timerUp() {
	timeCount(0);
}
function timerDown() {
	timeCount(-2);
}
function likeTime() {
	const likes = document.querySelector('ul.likes');
	const count = parseInt(counter.textContent);
	let countLikes = document.querySelector(`li#like-${count}`);
	if (countLikes) {
		const countLikesValueSpan = countLikes.querySelector('span#likes-count');
		let countLikesValueInt = parseInt(countLikesValueSpan.textContent);
		countLikesValueInt++;
		countLikesValueSpan.innerText = countLikesValueInt;
	} else {
		countLikes = document.createElement('li');
		countLikes.id = `like-${count}`;
		countLikes.innerHTML = `${count} : <span id="likes-count">1</span>`;
		likes.appendChild(countLikes);
	}
}
function timerPause(elm) {
	if (elm.innerText == 'pause') {
		clearInterval(tInterval);
		elm.innerText = 'resume';
	} else {
		const tInterval = window.setInterval(timeCount, 1000);
		elm.innerText = 'pause';
	}
}
function comments() {
	const comment = document.querySelector('input#comment-input');

	if (comment.value != '') {
		const comments = document.querySelector('div.comments');
		p = document.createElement('p');
		p.innerText = comment.value;

		comments.appendChild(p);

		comment.value = '';
	}
}
