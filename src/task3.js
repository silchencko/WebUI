function Triangle(vertices, a, b, c) {
    this.vertices = vertices;
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;
}

var equilTriangle = new Triangle('ABC', '5', 5, 5);
var rightTriangle = new Triangle('DEF', 3, 4, 5);
var obtuseTriangle = new Triangle('GHI', 7.5, 3, 5);
var isoscTriangle = new Triangle('JKL', 4, 4, 5);

var triangles = [equilTriangle, rightTriangle, obtuseTriangle, isoscTriangle];

function areSidesNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(parseFloat(arr[i].side1)) || isNaN(parseFloat(arr[i].side2)) || isNaN(parseFloat(arr[i].side3))) {
            throw new Error('All sides of triangles must be nombers');
        }
    }
    return true;
}
function areTrianglesReal(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!((arr[i].side1 + arr[i].side2) > arr[i].side3 
        && (arr[i].side1 + arr[i].side3) > arr[i].side2 
        && (arr[i].side2 + arr[i].side3) > arr[i].side1)) {
            throw new Error('The triangle with sides ' + arr[i].side1 + ', '  + arr[i].side2 + ' and ' + arr[i].side3 + ' ' + ' is not possible');
        }
    }
    return true;
}

function countSquare(triangle) {
    var p = (triangle.side1 + triangle.side2 + triangle.side3)/2;
    triangle.Square = Math.sqrt(p * (p - triangle.side1) * (p - triangle.side2) * (p - triangle.side3));
}

function sortBySquare(elem1, elem2) {
    if (elem1.Square > elem2.Square) return 1;
    if (elem1.square < elem2.square) return -1;
}

function returnVertices(item) {
    return item.vertices;
}

function sortFigures(arr) {
    var result = '';
    try {
        if (areSidesNumbers(arr) && areTrianglesReal(arr)) {

            for (var i = 0; i < arr.length; i++) {
                countSquare(arr[i]);
            }

            arr.sort(sortBySquare);
            var newArr = arr.map(returnVertices);
            result = newArr;
            return result;
        }
    } catch(error) {
        result = error.reason;
    }
    return result;
}
