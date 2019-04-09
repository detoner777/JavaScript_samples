let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpenseBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-persent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    //countBudgetBtn = document.getElementsByClassName('count-budget-btn');


let money, time;


startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");
  
  //проверяем доход, чтобы он был числом и чтобы нельзя было просто отказаться от ввода
  while (isNaN(money) || money === "" || money === null) {
    money = prompt("Ваш бюджет на месяц?", "");
  }

//записали prompt в объект
  appData.budget = money;
  appData.timeData = time;
  //вывели промпт money в HTML
  budgetValue.textContent = money.toFixed();
  //для HTML imput работаем со значением .value а не .textContent
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue = new Date(Date.parse(time)).getDate();
});



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
    
      items.forEach(function(item, i, arr) {
        alert( i + ": " + item + " (массив:" + arr + ")" );
      });
                
    }
  }
};

/*for (let prop in appData) {
  console.log("Наша программа включает в себя данные: " + prop + " = " + appData[prop]);
}*/



    
    
    
