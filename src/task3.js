var trianglesBtn = document.querySelector('.triangles-btn');
var trianglesResult = document.querySelector('.triangles-result');
var addTriangleBtn = document.querySelector('.add-btn');
var triangleList = document.querySelector('.triangle-list');

function Triangle(vertices, side1, side2, side3) {
    this.vertices = vertices;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
};

/* Add new trangle */

function findTriangleNomber() {
    var allTriangles = document.querySelectorAll('.triangle');
    return allTriangles.length;
};

function addNewTriangle() {
    var newTriangle = document.createElement('div');
    newTriangle.className = 'triangle';
    var newTriangleNomber = findTriangleNomber() + 1;
    newTriangle.innerHTML = '<p class="triangle' + newTriangleNomber + '">Triangle ' + newTriangleNomber + ':</p>'
                            + '<div>'
                                + '<label for="triangle' + newTriangleNomber + '__name">Name</label>'
                                + '<input id="triangle' + newTriangleNomber + '__name" type="text" name="name" required="required" />'
                            + '</div>'
                            + '<div>'
                                + '<label for="triangle' + newTriangleNomber + '__side1">Side 1</label>'
                                + '<input id="triangle' + newTriangleNomber + '__side1" type="text" name="side1" required="required" />'
                            + '</div>'
                            + '<div>'
                                + '<label for="triangle' + newTriangleNomber + '__side2">Side 2</label>'
                                + '<input id="triangle' + newTriangleNomber + '__side2" type="text" name="side2" required="required" />'
                            + '</div>'
                            + '<div>'
                                + '<label for="triangle' + newTriangleNomber + '__side3">Side 3</label>'
                                + '<input id="triangle' + newTriangleNomber + '__side3" type="text" name="side3" required="required" />'
                            + '</div>'

    triangleList.appendChild(newTriangle);
};

/* Add new triangle - END */

function createTriangleObj(name, side1, side2, side3) {
    if (existParams(name, side1, side2, side3)) {
        if (isNumeric(side1, side2, side3)) {
            return new Triangle(name, side1, side2, side3);
        }
    }
};

function buildTriangle(elem, name){
    var triangleName  = elem.querySelector('#'+name+'__name' ).value;
    var triangleSide1 = elem.querySelector('#'+name+'__side1').value;
    var triangleSide2 = elem.querySelector('#'+name+'__side2').value;
    var triangleSide3 = elem.querySelector('#'+name+'__side3').value;
    return createTriangleObj(triangleName, parseFloat(triangleSide1), parseFloat(triangleSide2), parseFloat(triangleSide3));
};

function getUnsortedTriangles(triangles) {
    var triangleArr =[];
    for (var i = 0; i < triangles.length; i++) {
        var name = 'triangle' + (i+1);
        triangleArr.push(buildTriangle(triangles[i], name));
    }
    return triangleArr;
};

function countSquare(triangle) {
    var p = (triangle.side1 + triangle.side2 + triangle.side3)/2;
    var square = Math.sqrt(p * (p - triangle.side1) * (p - triangle.side2) * (p - triangle.side3));
    if (isNaN(square)) {
        throw new Error('The triangle with sides ' + triangle.side1 + ', ' + triangle.side2 + ' and ' + triangle.side3 + ' does not exist')
    } else {
        return triangle.square = square;
    }
};

function sortBySquare(elem1, elem2) {
    if (elem1.square > elem2.square) return 1;
    if (elem1.square < elem2.square) return -1;
};

function returnVertices(item) {
    return item.vertices;
};

function sortFigures(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        countSquare(arr[i]);
    }
    arr.sort(sortBySquare);
    var newArr = arr.map(returnVertices);
    result = newArr;
    return result;
};

function getSortedtriangles() {
    try {
        var allTriangles = document.querySelectorAll('.triangle');
        var triangles = getUnsortedTriangles(allTriangles);
        trianglesResult.innerHTML = sortFigures(triangles);
        return trianglesResult.innerHTML;
    } catch(error) {
        return trianglesResult.innerHTML = error.reason;
    }
};
