// Урок №6
// Написать игровой бот.
// "Загадывание случайного числа от 1 до 100"

// проверку на число тут закоментировал т.к. она есть выше, 
// но оставил тут для удобства проверки

// let isNumber = function(num) {
//   return !isNaN(parseFloat(num)) && isFinite(num)
// }
let hiddenNumber = 55;
function game(hiddenNumber) {
  function condition() {
    answer = prompt("Угадай число от 1 до 100");
    if (answer === null) {
      alert("Игра окончена")
    } else {
      if (isNumber(answer)) {
        if (hiddenNumber < answer) {
          alert("Загаданное число меньше");
          condition();
        } else if (hiddenNumber > answer) {
          alert("Загаданное число больше");
          condition();
        } else if (hiddenNumber = answer) {
          alert("Поздравляю, Вы угадали!!!");
        }
      } else {
        alert('Введите число'); 
        condition();
      }
    }
  }
  condition();
}
game(hiddenNumber);
