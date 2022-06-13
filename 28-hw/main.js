// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.

/*
1 спосіб:
Оголошення функції (Function Declaration):

function sayHi() {
    alert( "Привіт" );
  }

2 спосіб:
Функціональний Вираз (Function Expression):

let sayHi = function() {
    alert( "Привіт" );
  };

3 спосіб: 
Стрілкова функція: 

1 приклад: 
let func = (arg1, arg2, ..., argN) => expression;

2 приклад: 
let sum = (a, b) => a + b;

Ця стрілкова функція — це коротша форма для:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); //3
*/



// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function howManyArguments( a, b, c) {
//   console.log (arguments.length);
// }     
//   howManyArguments(1, 2, 3);



// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// let firstNumThrdTask = +prompt('вкажи перше число:', 0);
// let secondNumThrdTask = +prompt('вкажи друге число:', 0);

// function min(a, b) {
//     if (firstNumThrdTask < secondNumThrdTask) {
//       alert (-1);
//     } else if (firstNumThrdTask > secondNumThrdTask) {
//       alert (1);
//     } else (firstNumThrdTask = secondNumThrdTask) 
//         alert (0);
//   }
//   min();



// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

/*
let userNumFourthTask = +prompt('вкажи число, а я знайду факторіал:', 0);

function factorial(userNumFourthTask) {
    return (userNumFourthTask != 1) ? userNumFourthTask * factorial(userNumFourthTask - 1) : 1;
  }
  console.log( factorial(userNumFourthTask) );
  */



// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// let userFirstNumFifthTask = prompt("вкажи 3 числа, а я об`єднаю їх в один рядок. перше число:", "");
// let userSecNumFifthTask = prompt("друге число:", "");
// let userThirdNumFifthTask = prompt("третє число:", "");

// function getToString (a, b, c) {
//     return ("" + userFirstNumFifthTask + userSecNumFifthTask + userThirdNumFifthTask);
// }

// console.log (getToString());



// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// рахує, але не працює вірно, бо немає умов
// let userFirstNumSixTask = +prompt("вкажи довжину і ширину прямокутника, а я обчислю його площу. довжина прямокутника:", 0);
// let userSecNumSixTask = +prompt("ширина прямокутника:", 0);

// function areaOfRectangle(a, b) {
//     return userFirstNumSixTask * userSecNumSixTask;
//   }
  
//   let resultRectangle = userFirstNumSixTask * userSecNumSixTask;
//   alert( resultRectangle );

// function squareArea (userFirstNumSixTask, userSecNumSixTask) {
//     return userFirstNumSixTask * userFirstNumSixTask;
//   }
  
//   let resultSquare = userFirstNumSixTask * userFirstNumSixTask;
//   alert( resultSquare );


  // function square (userFirstNumSixTask, userFirstNumSixTask) {
  //   if (arguments.length) {
  //     console.log (userSecNumSixTask * userSecNumSixTask)
  //   } 
  //   else {
  //     console.log (userFirstNumSixTask * userFirstNumSixTask)
  //   }
  // } 
  // square (userFirstNumSixTask, userSecNumSixTask)


// Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.