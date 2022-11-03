// // урок 2
// // Следующим переменным присвоить значения 

// let title = "Вкушаю JS";
// let screens = "Простые, Сложныйе, Инетерактивные";
let rollback = 69;
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







// Урок №3
// 1) Весь функционал что был ранее оставляем, если что то необходимо удалить, об этом будет написано в задании

// 3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
let title = prompt("Как называется ваш проект?");

// 4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens 
// (пример: "Простые, Сложные, Интерактивные"
let screens = prompt("Какие типы экранов нужно разработать?");

// // 5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
let screenPrice = + prompt("Сколько будет стоить данная работа?");

// 6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
let adaptive = confirm("Нужен ли адаптив на сайте?");

// 7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
//      1. “Какой дополнительный тип услуги нужен?” // (например service1, service2) 
//      2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, 
//          вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

// 8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг 
// (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
let fullPrice = (screenPrice + servicePrice1 + servicePrice2)

// 9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката 
// посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону
//  (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
let servicePercentPrice = Math.ceil(fullPrice - 1000); 

// 10) Написать конструкцию условий (расчеты приведены в рублях) 
//   - Если fullPrice больше 30000, то “Даем скидку в 10%” 
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
//   - Если отрицательное значение то вывести “Что то пошло не так” 
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно) 
let getRollbackMessage = function(a) {
  if (a > 30000) {
    return "Даем скидку в 10%"
  } else if (a >= 15000 && a <= 30000) {
    return "Даем скидку в 5%"
  } else if (a >=0 && a < 15000) {
    return "Скидка не предусмотрена"
  } else {
    return "Что то пошло не так"
  }
}  



// Урок №4

// 1) Объявить функцию getAllServicePrices. Функция возвращает 
// сумму всех дополнительных услуг. Результат сохраняем в переменную 
// allServicePrices. Тип - function expression

let getAllServicePrices = function() {
  return servicePrice1 + servicePrice2
}
 
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и 
// стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем 
// в переменную fullPrice. Тип - function declaration

let getFullPrice = function() {
  return screenPrice + allServicePrices
}

let fullPrice2 = getFullPrice (screenPrice, allServicePrices);

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким 
// образом: первый символ с большой буквы, остальные с маленькой
// ". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
function getTitle() {
  let trimTitle = title.trim()
  return  trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1);
}

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом 
// процента отката. Результат сохраняем в переменную servicePercentPrice 
// (итоговая стоимость минус сумма отката)

function getServicePercentPrices() {
  return  fullPrice2 - (fullPrice2 * rollback / 100);
}
let servicePercentPrice2 = getServicePercentPrices();

// 5) Почистить консоль логи и добавить недостающие, должны остаться:
// - вызовы функции showTypeOf
// - вывод строки с типами экранов для разработки screens
// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)

let showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

showTypeOf(getTitle());
showTypeOf(getRollbackMessage(fullPrice2));

console.log(screens);
console.log(getTitle()); 
console.log(getRollbackMessage(fullPrice2));
console.log(servicePercentPrice2); 