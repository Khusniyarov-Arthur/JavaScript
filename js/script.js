// Урок №7

let appData = {
  rollback: 69,
  fullPrice: 0,
  screenPrice: 0,
  title: "",
  screens: [],
  adaptive: true,
  allServicePrices: 0,
  servicePercentPrice2: 0,
  services: {},

  start: function() {
    appData.asking();
    appData.addPrice()
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle()
    appData.logger();
  },

  asking: function() {

    do { 
      appData.title = prompt("Как называется ваш проект?", "jopa");
    } while (appData.isNumber(appData.title))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    
    for (i = 0; i < 2; i++) {
      let screensPrice;
      let screensQuestoin

      do { 
        screensQuestoin = prompt("Какие типы экранов нужно разработать?", "Все");
      } while (appData.isNumber(screensQuestoin))
      
      do { 
        screensPrice = +prompt("Сколько будет стоить данная работа?", 10000);
      } while (!appData.isNumber(screensPrice))

      appData.screens.push({id: i, screens: screensQuestoin, price: screensPrice })
    };

    for (i = 0; i < 2; i++) {
      let answerPrice;
      let questoin;
      
      do { 
        questoin = prompt("Какой дополнительный тип услуги нужен?", "Верстка");
      } while (appData.isNumber(questoin))

      do { 
        answerPrice = prompt("Сколько это будет стоить?", 2000);
      } while (!appData.isNumber(answerPrice))

      appData.services[questoin + " " + i] = +answerPrice
    }
  },

  addPrice: function () {
    appData.screenPrice = appData.screens.reduce(function(sum, item) {
      return sum + item.price
    }, 0)

    appData.allServicePrices = appData.allServicePrices;
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },

  getRollbackMessage: function(progressiveDiscount) {
    if (progressiveDiscount > 30000) {
      return "Даем скидку в 10%"
    } else if (progressiveDiscount >= 15000 && progressiveDiscount <= 30000) {
      return "Даем скидку в 5%"
    } else if (progressiveDiscount >=0 && progressiveDiscount < 15000) {
      return "Скидка не предусмотрена"
    } else {
      return "Что то пошло не так"
    }
  },

  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  }, 
  
  getFullPrice: function() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices
  },

  getTitle: function() {
    let trimTitle = appData.title.trim();
    appData.title = trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1);
  },

  getServicePercentPrices: function() {
    appData.servicePercentPrice2 = appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
  },

  logger: function() {
    for ( let key in appData) {
      console.log(key);
    }
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(appData.servicePercentPrice2);
    console.log(appData.services);
    console.log(appData.screens);
  },
}

  appData.start()

  // Урок №9
const cNumber = []
const cPercent = [];

const titleTagName = document.getElementsByTagName('h1')[0].textContent;
const buttonСalculate = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const typeRange = document.querySelector('.rollback > div > [type = range]')
const typeValue = document.querySelector('.rollback > div > .range-value')
const addButton = document.querySelectorAll('.other-items');
const allScreen = document.querySelectorAll('.screen')

addButton.forEach(function(item) {
  if (item.classList.contains('percent')) {
    cPercent.push(item)
  } else {
    cNumber.push(item)
  }
})

const totalInput = document.getElementsByClassName('total-input')
  for (i = 0; i < totalInput.length; i++) {
    console.log(document.getElementsByClassName('total-input')[i])
  }

console.log(titleTagName);
console.log(buttonСalculate);
console.log(buttonReset);
console.log(addButton);
console.log(cPercent);
console.log(cNumber);
console.log(typeRange);
console.log(typeValue);
console.log(allScreen);
