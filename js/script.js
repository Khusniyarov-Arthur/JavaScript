// Урок №7

let appData = {
  rollback: 69,
  fullPrice: 0,
  screenPrice: 0,
  title: "",
  screens: "",
  adaptive: true,
  service1: "",
  servicePrice1: 0,
  service2: "",
  servicePrice2: 0,
  allServicePrices: 0,
  servicePercentPrice2: 0,

  start: function() {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice2 = appData.getServicePercentPrices();
    appData.logger();
  },

  asking: function() {
    appData.title = prompt("Как называется ваш проект?", "jopa");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Все");
    do { 
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?", 10000);
    } while (!appData.isNumber(appData.screenPrice))
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
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
  
  getAllServicePrices: function() {
    appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Верстка");
    do { 
      appData.servicePrice1 = prompt("Сколько это будет стоить?", 1000);
    } while (!appData.isNumber(appData.servicePrice1)) 
    appData.servicePrice1= +appData.servicePrice1;
  
    appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Адаптив");
    do { 
      appData.servicePrice2 = prompt("Сколько это будет стоить?", 2000);
    } while (!appData.isNumber(appData.servicePrice2)) 
    appData.servicePrice2= +appData.servicePrice2;
    return appData.servicePrice1 + appData.servicePrice2
  },

  getFullPrice: function() {
    return appData.screenPrice + appData.allServicePrices
  },

  getTitle: function() {
    let trimTitle = appData.title.trim();
    return  trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1);
  },

  getServicePercentPrices: function() {
    return  appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
  },

  logger: function() {
    for ( let key in appData) {
      console.log(key);
    }
  }
}

  appData.start()