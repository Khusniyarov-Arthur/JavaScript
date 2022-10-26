let title = "lesson 01"
let screens = "full screen"
let screenPrice = "Over price"
let rollback = "Не знаю что писать"
let fullPrice = "free"
let adaptive = "yes"

alert(rollback);

console.log(screens);

// урок 2
// Следующим переменным присвоить значения 

title = "Вкушаю JS";
screens = "Простые, Сложныйе, Инетерактивные";
rollback = 69;
screenPrice = 100;
fullPrice = 1000;
adaptive = true;

// Вывести в консоль тип 
// данных значений переменных title, fullPrice, adaptive; 
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки из переменной screens 
console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
// и “Стоимость разработки сайта (fullPrice) рублей
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей/ долларов/гривен/юани")

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль 
console.log(screens.toLowerCase());

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100)) 
console.log(fullPrice * (rollback/100));

