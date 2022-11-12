// // урок 2
// // Следующим переменным присвоить значения 

// let title = "Вкушаю JS";
// let screens = "Простые, Сложныйе, Инетерактивные";
// let screenPrice = 100;
// let fullPrice = 1000;
// let adaptive = true;

// // Вывести в консоль тип 
// // данных значений переменных title, fullPrice, adaptive; 
// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// // Вывести в консоль длину строки из переменной screens 
// console.log(screens.length);

// // Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
// // и “Стоимость разработки сайта (fullPrice) рублей
// console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани")
// console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей/ долларов/гривен/юани")

// // Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль 
// console.log(screens.toLowerCase());

// // Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100)) 
// console.log(fullPrice * (rollback/100));

let rollback = 69;
let fullPrice;
let screenPrice;
let title = prompt("Как называется ваш проект?", "jopa");
let screens = prompt("Какие типы экранов нужно разработать?", "Все");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1;
let servicePrice1;
let service2;
let servicePrice2;


// Блок описания фкнуций
let getRollbackMessage = function(progressiveDiscount) {
  if (progressiveDiscount > 30000) {
    return "Даем скидку в 10%"
  } else if (progressiveDiscount >= 15000 && progressiveDiscount <= 30000) {
    return "Даем скидку в 5%"
  } else if (progressiveDiscount >=0 && progressiveDiscount < 15000) {
    return "Скидка не предусмотрена"
  } else {
    return "Что то пошло не так"
  }
}  

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

let getAllServicePrices = function() {
  service1 = prompt("Какой дополнительный тип услуги нужен?", "Верстка");
  do { 
    servicePrice1 = prompt("Сколько это будет стоить?", 1000);
  } while (!isNumber(servicePrice1)) 
      servicePrice1= +servicePrice1

  service2 = prompt("Какой дополнительный тип услуги нужен?", "Адаптив");
  do { 
    servicePrice2 = prompt("Сколько это будет стоить?", 2000);
  } while (!isNumber(servicePrice2)) 
  servicePrice2= +servicePrice2
  return servicePrice1 + servicePrice2
}

let getFullPrice = function() {
  return screenPrice + allServicePrices
}

function getTitle() {
  let trimTitle = title.trim()
  return  trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1);
}

function getServicePercentPrices() {
  return  fullPrice - (fullPrice * rollback / 100);
}

let showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

let question = function(screenPrice) {
  do { 
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice)) 
  return +screenPrice
}

// Функциональный блок
screenPrice = question();
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice (screenPrice, allServicePrices);
let servicePercentPrice2 = getServicePercentPrices();



showTypeOf(getTitle());
showTypeOf(servicePrice1)
showTypeOf(screenPrice)
showTypeOf(getRollbackMessage(fullPrice));

console.log(screens);
console.log(getTitle()); 
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice2); 
 
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
