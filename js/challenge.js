window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

// getting el from DOM
 counter = parseInt(document.getElementById('counter').innerText)

//incrementing counter
counter++ 
});

const intervalID = setInterval(function() { 
    myCallback('one', 'two'); }, 1000);

    function myCallback(a, b)
{

    console.log(a)
    console.log(b)

} 

window.clearInterval(intervalID)