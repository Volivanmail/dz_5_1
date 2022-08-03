const timer = document.getElementById('timer');


let timerId = setInterval(() => {
   timer.textContent = Number(timer.textContent) - 1;
   if (Number(timer.textContent) < 0) {
      clearInterval(timerId);
      alert('Вы победили в конкурсе');
   }; 
}, 1000);

