let time = +prompt("Введите дату в формате YYYY-MM-DD", "");
let money = prompt("Ваш бюджет на месяц?", "");


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  savings: false,
  timeData: time,
  income: []
};


for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько это обойдется?", "");

  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {
    console.log("Done"); 

    appData.expenses[a] = b;

  } 
   //else {

 // }

};

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
};

console.log(appData); 