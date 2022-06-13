/*
class Shop {
  constructor (name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.sum = null;
  }

  sumMethod() {
    return this.sum = this.price * this.amount;
  }
}

let apple = new Shop ("apple", 12, 2);
console.log (apple.sumMethod());

це ми під класи переробили попередні масиви
*/



/*
class Car {
  constructor(model) {
    this.model = model;
  }

  modelName() {
    console.log (this.model);
  }
}

let ford = new Car ("Ford");
let chevrolet = new Car("Chevrolet");
let fiat = new Car("Fiat");
ford.modelName();
// вставляємо будь-яке далі let, щоб виводило і показувало
console.log(new Car ("Linkoln"));
// тут ми передали значення лінкольн 

Car.prototype.year = 1969;
Car.prototype.getYear = () => console.log (this.year);
*/


// GET 
/*
class Car {
  constructor(model) {
    this.model = model;
    this.year = year;
  }

  modelName() {
    console.log (this.model);
  }

  get years() {
    return this.year;
  }
}

let ford2 = new Car("Ford", 2013);
console.log(ford2);
*/


// SET 

class Car {
  constructor(model) {
    this.model = model;
    this.year = year;
  }

  modelName() {
    console.log (this.model);
  }

  get years() {
    console.log(1);
    return this.year;
  }

  set years(val) {
    console.log(2);
    this.year = val;
  }
}

let ford = new Car("Ford", 2013);                      
console.log(ford);

