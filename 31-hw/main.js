// 1
let a = +prompt('Введіть радіус кола');

class Circle {
    constructor(r) {
        this.r = r
    }

    get radius() {
        return console.log('Радіус кола = ' + this.r);
    }

    set radius(newRadius) {
        this.r = newRadius
    }

    get diametr() {
        return console.log('Діаметр кола = ' + this.r*2);
    }

    get square() {
        return this.calcSquare();
    }
    
    calcSquare() {
        let circleSquare;
        circleSquare = this.r * this.r * Math.PI;
        console.log('Площа кола = ' + circleSquare);
    }

    get lenght() {
        return this.calcLenght();
    }

    calcLenght() {
        let circleLenght;
        circleLenght = 2 * this.r * Math.PI;
        console.log('Довжина кола = ' + circleLenght.toFixed(2));
    }
}

const circle = new Circle(a);
circle.radius;

// 2

class Marker {
    constructor (color, inkQuant) {
        this.color = color;
        this.inkQuant = inkQuant;
        this.inkLeft = null;
    }

    writting() {
        let writtenText = prompt('Давай спробуємо зробити наш маркер пустим');
        let inkAm = parseInt(this.inkQuant);
        let noSpaces = writtenText.match(/[a-zA-Z]/g).length;
        let inkSpent = noSpaces * 0.5;
        this.inkLeft = inkAm - inkSpent;
        this.percent();
    }

    percent() {
        for(let i = 0; i <= this.inkQuant; ++i) {
            if (this.inkLeft > 0) {
                alert ('Залишилось ' + this.inkLeft + ' % маркеру');
                this.writting();
            } else {
                alert ('У тебе не залишилось чорнила в маркері');
                break;
            }
        }
    }
}