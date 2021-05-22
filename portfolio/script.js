function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// var intervalID = scope.setInterval(document.title = Math.random(), [2]);

// testing scripts

// let el = document.querySelectorAll('#item');
// let px = document.getElementById('mx');
// let py = document.getElementById('my');
// console.log(el);
// window.addEventListener('mousemove', showPosition, false);

// el.forEach(addEventListener('click', function(e) {
//     itemDone(e);
// }, false));

// function itemDone(e) {
//     console.log('itemDone function triggered')
//         // remove the item from the list
//     let target = e.target;
//     let elParent = e.target.parentNode;
//     let newMessage = document.createElement('span');
//     newMessage.innerHTML = e.target.textContent + ' removed! ';
//     elParent.removeChild(target);
//     elParent.appendChild(newMessage);
//     e.preventDefault();
// };


// function showPosition(e) {
//     px.innerHTML = e.pageX;
//     py.innerHTML = e.pageY;
// }

// let body = document.querySelector('body');