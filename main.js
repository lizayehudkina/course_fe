// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.

let age = +prompt('Вкажи свій вік');
switch (true) {
    case (age >= 0 && age < 11) : alert( 'ти - дитина!' );
        break;

    case (age >= 12 && age < 17) : alert('ти - підліток!');
        break;

    case (age >= 18 && age < 59) : alert('ти - дорослий!');
        break;

    case (age >= 60 && age < 125) : alert('ти - пенсіонер!');
        break;

    case (age > 126) : alert('вказане невірне значення');
        break;

    default: ;
}



// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let numberSecondTask = +prompt('Вкажи число від 0 до 9, а я покажу який символ на клавіатурі йому відповідає');
switch (true) {
    case (numberSecondTask === 0) : alert( ')' );
        break;

    case (numberSecondTask === 1) : alert( '!' );
        break;

    case (numberSecondTask === 2) : alert( '@' );
        break;

    case (numberSecondTask === 3) : alert( '#' );
        break;

    case (numberSecondTask === 4) : alert( '$' );
        break;

    case (numberSecondTask === 5) : alert( '%' );
        break;

    case (numberSecondTask === 6) : alert( '^' );
        break;

    case (numberSecondTask === 7) : alert( '&' );
        break;

    case (numberSecondTask === 8) : alert( '*' );
        break;

    case (numberSecondTask === 9) : alert( '(' );
        break;

    default: alert( 'ти ввів/ввела суму не з вказаного діапазону');
}



// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstNumberFromRangeThirdTask = +prompt('Вкажи перше число діапазону, а я порахую суму чисел зі вказаного діапазону');
let secondNumberFromRangeThirdTask = +prompt('Вкажи друге число діапазону');
let sum = 0;

while(firstNumberFromRangeThirdTask <= secondNumberFromRangeThirdTask){       
    sum+=firstNumberFromRangeThirdTask;  
    firstNumberFromRangeThirdTask++;
 }
alert ('Сума всіх чисел у введеному діапазоні = ' + sum);



// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let firstNumberFourthTask = +prompt('Вкажи перше число, потім друге, а я знайду найбільший спільний дільник цих чисел');
let secondNumberFourthTask = +prompt('Вкажи друге число');

while (firstNumberFourthTask != secondNumberFourthTask) {
    if (firstNumberFourthTask > secondNumberFourthTask) {
        firstNumberFourthTask = firstNumberFourthTask - secondNumberFourthTask;
    }
    else {
        secondNumberFourthTask = secondNumberFourthTask - firstNumberFourthTask;
    }
}
let commonDivisor = firstNumberFourthTask;
alert ('Найбільший спільний дільник двох введених чисел = ' + commonDivisor);



// 5. Запитай у користувача число і виведи всі дільники цього числа.

let numberFifthTask = +prompt('Введи число, а я виведу всі його дільники');
 
for (let dividerFifthTask = 1; dividerFifthTask <= numberFifthTask; dividerFifthTask++) {
    if (numberFifthTask % dividerFifthTask == 0) {
        alert(`Дільники твого числа: ` + dividerFifthTask);
    }
}




// Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
/*
var b = 0;
var c = 0;
var e = 0;
var a = +prompt("Введи п'ятизначне число")
    if ((a > 9999) && (a < 100000)) {
        b = a / 10000;
        a = a % 10000;
        c = a / 1000;
        a = a % 1000;
        a = a % 100;
        e = a / 10;
        a = a % 10;
            if ((b == a) && (c == e)) {
                alert("Це число паліндром");
                }
                else {
                    alert("Це число не паліндром");
                }
            }
            else{
                alert("Це не п'ятизначне число");
            }
*/


// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let price = +prompt('Введи суму покупки');

switch (true) {
    case (price >= 200 && price <= 300) : 
            alert( 'сума до оплати зі знижкою = ' + (price - (price*0.03)));
                break;

    case (price >= 300 && price <= 500) : 
            alert( 'сума до оплати зі знижкою = ' + (price - (price*0.05)));
                break;

    case (price > 501) : 
            alert( 'сума до оплати зі знижкою = ' + (price - (price*0.07)));
                break;

    default: alert( 'сума до оплати = ' + price);
}



// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, 
// скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let evenNumber = 0;
let oddNumber = 0;
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt('Введи число');
    if (num > 0) {
        positiveNumber++;
    }

    else if (num < 0) {
        negativeNumber++;
    }

    else {
        zero++;
    }

    if (num % 2 === 0 ) {
        evenNumber++;
    }

    else {
        oddNumber++;
    }
}

alert ('додатніх чисел: ' + positiveNumber);
alert ("від'ємних чисел: " + negativeNumber);
alert ("нулів: " + zero);
alert ("парних чисел: " + evenNumber);
alert ("непарних чисел: " + oddNumber);



// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const daysOfTheWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятницяяя", 'Субота', 'Неділя']

for (let i = 0; i < 7; i++) {
    confirm('Хочеш побачити наступний день?');
    alert(daysOfTheWeek[i]);
}



// МАКСИМУМ
// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у 
// користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. 
// Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, 
// то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
/*
let bottomNumber = 0;
let topNumber = 100;
let res;

alert ("Загадай число від 0 до 100")

while (true) {
    res = Math.floor ((bottomNumber + topNumber) / 2);
    res = Math.trunc (res);

    let check = prompt ("Твоє число більше " + res + ", " + "менше " + res + " або = " + res + "?");
    if (check == "=") {
        alert (res);
        break;
    }

    else if (check == "більше") {
        bottomNumber = Math.floor ((topNumber + bottomNumber) / 2);
    }
    else {
        topNumber = Math.floor ((topNumber + bottomNumber) / 2);
    }
}
*/



// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
/*
let resultSecondTask = '\n';
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        resultSecondTask += (i*j) + ' ';
    }
    resultSecondTask += '\n'
}
console.log(resultSecondTask);
*/



// // 3. 
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, 
// рік, а також високосний рік.
/*
let dayThirdTask = +prompt ("Який сьогодні день?", 0);
let monthThirdTask = +prompt ("Який сьогодні місяць?", 0);
let yearThirdTask = +prompt ("Який сьогодні рік?", 0);

switch (true) {
    case (monthThirdTask == 12 && dayThirdTask == 31):
        alert (" " + 1 + " " + 1 + " " + (yearThirdTask+1));
        break; 
        // це ми перевірили на новий рік

    case (yearThirdTask % 4 == 0 && monthThirdTask == 2 && dayThirdTask == 29):
        alert (" " + 1 + " " + (monthThirdTask + 1) + " " + yearThirdTask);
        break;
        // це ми перевірили на високосний рік, щоб переключалось на березень, якшо рік високосний

    case (yearThirdTask % 4 != 0 && monthThirdTask == 2 && dayThirdTask == 28):
        alert (" " + 1 + " " + (monthThirdTask + 1) + " " + yearThirdTask);
        break;
        // це ми перевірили на високосний рік, щоб НЕ переключалось на 29 число

    case (monthThirdTask == 4 && monthThirdTask == 6 && monthThirdTask == 9 && monthThirdTask == 11):
        if (dayThirdTask == 30) {
            alert (" " + 1 + " " + (monthThirdTask + 1) + " " + yearThirdTask);
        }
        else {
            alert (" " + 1 + " " + monthThirdTask + " " + yearThirdTask);
        }
        break;
        // це ми перевірили, що якщо в місяці 30 днів, то або переключається на наст місяць, або ні 

        default: if (dayThirdTask == 31) {
            alert (" " + 1 + " " + (monthThirdTask + 1) + " " + yearThirdTask)
        } 
        else {
            alert ((dayThirdTask + 1) + " " + monthThirdTask + " " + yearThirdTask);
        }
        break;
        // це ми перевірили, що якщо в місяці 31 день, то або переключається на наст місяць, або ні 
}
*/





