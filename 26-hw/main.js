// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log((parseInt(sum * 100)) / 100);


// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), 
// добийся математично правильної відповіді.

let c = '1';
let d = 2;
let sumSecondTask = c + d;
console.log(+c + d);
// або ще можна записати так: 
console.log(Number(c) + d);


// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів 
// розміром в 820 Мб поміщається на флешку.

let flashDriveVolume = prompt('Вкажи обсяг флешки в ГБ');
let mbVolume = flashDriveVolume * 1024;
let resultMemory = mbVolume / 820;
alert('На флешку такого обсягу поміститься ' + (Math.trunc(resultMemory)) + ' файл (ли/лів) розміром 820 МБ');


// 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let userMoney = prompt('Вкажи суму коштів в гаманці');
let chocolateCost = prompt('Вкажи вартість однієї шоколадки');
let userCanBuyChocolates = Math.trunc(userMoney / chocolateCost);
console.log (userCanBuyChocolates);
let costAllChoclates = Math.trunc(chocolateCost * userCanBuyChocolates);
let userMoneyLeft = Math.trunc(userMoney - costAllChoclates);
console.log (userMoneyLeft);
alert('На ' + userMoney + ' гривень/ні ти можеш купити ' + userCanBuyChocolates + ' шоколадку/дки/док' + ' і в тебе залишиться ' + userMoneyLeft + ' гривень/ні!');


// 5. Запитай у користувача тризначне число і виведи його задом наперед. 
// Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

let userNumber = prompt('Вкажи будь-яке тризначне число');
function getReversedNum(userNumber) {
    let result = 0;
    while (userNumber) {
      result = result * 10 + userNumber % 10;
      userNumber = Math.floor(userNumber / 10);
    }
    return result;
  }
  alert(getReversedNum(userNumber));

//   6. Користувач вводить суму вкладу в банк на 2 місяці, 
//   з процентною ставкою депозиту 5% річних. 
//   Вивести суму нарахованих відсотків.

let userSumOfDeposit = prompt('Вкажи свою суму вкладу');
let percentage = userSumOfDeposit * 1.05;
let userReseive = (percentage - userSumOfDeposit) / 12 * 2;
alert('По депозиту на 5% річних за 2 місяці ти отримаєш ' + ((parseInt(userReseive * 100)) / 100));


// // 7. Що повернуть вираження:
// //  2 && 0 && 3
// //  2 || 0 || 3
// // 2 && 0 || 3

console.log (2 && 0 && 3); 
// виведе 0, тому що шукає значення false і, знайшовши, зупиняється.

console.log (2 || 0 || 3);
// виведе 2, тому що шукає значення true і, знайшовши, зупиняється.

console.log (2 && 0 || 3);
// виведе 3, тому що && має більший пріорітет. відповідно, виконуєтьсЯ першою 
// і в результаті маємо 0 потім виконується 0 || 3. тут буде true 3, тому 3 і виведеться.