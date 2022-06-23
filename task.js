const p = document.getElementById('timer')
let num = Number(p.textContent)

function winner() {
    setInterval(() => {p.textContent = Number(p.textContent) - 1}, 1000)
    if (timerId == 0) {
        clearInterval();
        alert('Вы победили в конкурсе');
    }
}

winner();


// let i = 0;

// let timerId = setInterval(function() {
// 	console.log(++i);
	
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);
