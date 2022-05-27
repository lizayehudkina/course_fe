// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let userName = prompt('Як тебе звати?');
alert('Привіт,' + ' ' + userName + '!');

// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
// Поточний рік вкажи в коді як константу;

const currentYear = new Date().getFullYear();
let userYearOfBirth = prompt('Вкажи свій рік народження?');
let currentAge = currentYear - userYearOfBirth;
alert('Тобі ' + currentAge + ' років!');

// 3. Запитай у користувача довжину сторони квадрату 
// і виведи периметр цього квадрата

let sideOfASquare = prompt('Вкажи сторону квадрата в сантиметрах');
let PerimeterOfASquare = sideOfASquare * 4;
alert('Периметр такого квадрату дорівнює ' + PerimeterOfASquare + ' сантиметрів!');


