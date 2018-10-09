function Triangle(vertices, a, b, c) {
    this.vertices = vertices;
    this.a = a;
    this.b = b;
    this.c = c;
}

function countSquar(triangle) {
    var p = (triangle.a + triangle.b + triangle.c)/2;
    return Math.sqrt(p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c));
}

var equilTriangle = new Triangle('ABC', '5', 5, 5);
var rightTriangle = new Triangle('DEF', 3, 4, 5);
var obtuseTriangle = new Triangle('GHI', 7.5, 4, 5);
var isoscTriangle = new Triangle('JKL', 4, 4, 5);
var triangles = [equilTriangle, rightTriangle, obtuseTriangle, isoscTriangle];

function areSidesNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(parseFloat(arr[i].a)) || isNaN(parseFloat(arr[i].b)) || isNaN(parseFloat(arr[i].c))) {
            return false;
        } else {
            return true;
        }
    }
}

function sortBySquar(elem1, elem2) {
    if (countSquar(elem1) > countSquar(elem2)) return 1;
    if (countSquar(elem1) < countSquar(elem2)) return -1;
}

function returnVertices(item) {
    return item.vertices;
}

function sortFigures(arr) {
    var result = '';
    if (areSidesNumbers(arr)) {
        arr.sort(sortBySquar);
        var newArr = arr.map(returnVertices);
        result = newArr;
    } else {
        var error = new Error('All sides of triangle must be numbers more then 0');
        result = error;
    }
    return result;
}
