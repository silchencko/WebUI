class Triangle {
    constructor(vertices, a, b, c) {
        this.vertices = vertices;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    countSquar() {
        let p = (this.a + this.b + this.c)/2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

let equilTriangle = new Triangle('ABC', '5', 5, 5);
let rightTriangle = new Triangle('DEF', 3, 4, 5);
let obtuseTriangle = new Triangle('GHI', 7.5, 4, 5);
let isoscTriangle = new Triangle('JKL', 4, 4, 5);
let triangles = [equilTriangle, rightTriangle, obtuseTriangle, isoscTriangle];

function areSidesNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(parseFloat(arr[i].a)) || isNaN(parseFloat(arr[i].b)) || isNaN(parseFloat(arr[i].c))) {
            return false;
        } else {
            return true;
        }
    }
}

function sortBySquar(elem1, elem2) {
    if (elem1.countSquar() > elem2.countSquar()) return 1;
    if (elem1.countSquar() < elem2.countSquar()) return -1;
}

function sortFigures(arr) {
    let result = '';
    if (areSidesNumbers(arr)) {
        arr.sort(sortBySquar);
        let newArr = arr.map(item => item.vertices);
        result = newArr;
    } else {
        error.status = 'failed';
        error.reason = 'All sides of triangle must be numbers more then 0';
        result = error;
    }
    return result;
}
