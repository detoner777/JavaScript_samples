let money, time;

function start() {
  money = prompt("Ваш бюджет на месяц?", "");
  time = +prompt("Введите дату в формате YYYY-MM-DD", "");
  while (isNaN(money) || money === "" || money === null) {
    money = prompt("Ваш бюджет на месяц?", "");
  }
}

start();



let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  savings: true,
  timeData: time,
  income: [],
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = prompt("Во сколько это обойдется?", "");

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("Done");

        appData.expenses[a] = b;

      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Каккова сумма накоплений", "");
      let percent = +prompt("Под какой процент", "");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход вашего депозита в месяц: " + appData.monthIncome);
    }
  },

  chooseOptExpense: function () {
    for (let i = 0; i < 3; i++) {
      let opt = prompt("Статья необязательных расходов?", "");
      appData.optionalExpense[1] = opt;
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход?(Перечислите через запъятую)", "");

    if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '' && items.length < 50) {
      console.log("Done");

      appData.income = items.split(', ');
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }
  }
};


items.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

for (let prop in appData) {
  console.log("Наша программа включает в себя данные: " + prop + " = " + obj[prop]);
}




 