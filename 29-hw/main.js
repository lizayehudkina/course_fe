let fiat500 = {
    "car brand": "fiat",
    model: "fiat 500",
    year: 2011,
    speed: 100,
    "fuel tank": 40,
    "fuel consumption": 7,
    driver: "liza",
}
    
// 1. Висновок на екран з інформацією про автомобіль.

for (let param in fiat500) {
    console.log (`${param} = ${fiat500[param]}`);
}

// 2. Додавання водія, який має право керувати автомобілем.
fiat500["driver2"] = "lyonia"

for (let param in fiat500) {
    console.log (`${param} = ${fiat500[param]}`);
}

// 3. Заправка автомобіля.

let powerReserve = Math.trunc (fiat500["fuel tank"] / fiat500["fuel consumption"] * 100);
console.log ("згідно даних авто, твій запас ходу = " + powerReserve);

let kilometers = +prompt("вкажи, скільки км ти проїхав");

let whenToRefuel = Math.trunc (powerReserve - kilometers);
console.log ("і, так як ти вже проїхав " + kilometers + " км," + " заправитись потрібно буде через " + whenToRefuel + " км");



// 4. Підрахунок необхідного часу для подолання переданої відстані 
// з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву 
// на 1 годину, а також потрібно перевіряти чи має право водій керувати даним 
// автомобілем (ім'я водія функція приймає другим аргументом). 
// Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, 
// якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

let tripDistance = +prompt("скільки км ти плануєш проїхати?");
let necessaryTime =  Math.trunc (tripDistance / fiat500["speed"]);

if (tripDistance < powerReserve) {
    console.log ("запасу ходу при повному баці вистачить, щоб доїхати без дозаправок")

} else {
    console.log ("дорогою тобі треба буде заправитись")
}

let whatDriver = prompt ("вкажи своє ім'я");

if ((whatDriver = fiat500["driver"]) || (whatDriver = fiat500["driver2"])) {
    console.log ("ти можеш керувати цим авто")
} else {
    console.log ("ти не можеш керувати цим авто")
}