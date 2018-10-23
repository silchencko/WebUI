describe('Task 3', function() {
    var triangle,
    triangle1,
    triangle2,
    triangle3,
    triangles,
    vertices,
    square;

    it('Should return an object Triangle', function() {
        triangle = new Triangle('ABC', 3, 4, 5);
        expect(createTriangleObj('ABC', 3, 4, 5)).toEqual(triangle);
    });

    it('Should throw an error about missing params', function() {
        expect(function() { createTriangleObj('ABC', 3, 4, ''); }).toThrow(new Error('Enter all params'));
    });

    it('Should throw an error about not numeric params', function() {
        expect(function() { createTriangleObj('ABC', 3, 4, 'f'); }).toThrow(new Error('f is not a nomber or is 0'));
    });

    it('Should throw an error about 0 params', function() {
        expect(function() { createTriangleObj('ABC', 3, 0, 5); }).toThrow(new Error('0 is not a nomber or is 0'));
    });

    it('Should return vertices of the triangle', function() {
        triangle = new Triangle('ABC', 3, 4, 5);
        vertices = 'ABC';
        expect(returnVertices(triangle)).toEqual(vertices);
    });

    it('Should return the square of the triangle', function() {
        triangle = new Triangle('ABC', 3, 4, 5);
        square = 6;
        expect(countSquare(triangle)).toEqual(square);
    });

    it('Should throw an error about unreal triangle', function() {
        triangle = new Triangle('ABC', 3, 3, 7);
        expect(function() { countSquare(triangle); }).toThrow(new Error('The triangle with sides 3, 4 and 7 does not exist'));
    });

    it('Should return sorted triangles', function() {
        triangle1 = new Triangle('ABC', 7, 4, 5);
        triangle2 = new Triangle('DEF', 2, 4, 5);
        triangle3 = new Triangle('GHI', 4, 4, 5);
        triangles = [triangle1,triangle2, triangle3];
        vertices = ['DEF', 'GHI', 'ABC'];
        expect(sortFigures(triangles)).toEqual(vertices);
    });
});