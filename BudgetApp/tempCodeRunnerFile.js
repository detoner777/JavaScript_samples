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