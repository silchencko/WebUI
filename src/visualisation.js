/* Task 1 */
// var chessBoardBtn = document.querySelector('.chessBoard-btn');
// var chessBoardResult = document.querySelector('.chessBoard-result');

// function ChessBoard(width, length, symbol) {
//     this.width = width;
//     this.length = length;
//     this.symbol = symbol;
// };

// function getChessBoard() {
//     var result;
//     try {
//         var boardWidth = document.querySelector('#boardWidth').value;
//         var boardLength = document.querySelector('#boardLength').value;
//         var boardSymbol = document.querySelector('#boardSymbol').value;

//         if (existParams(boardWidth, boardLength, boardSymbol)) {
//             if (isNumeric(boardWidth, boardLength)) {
//                 var myBoard = new ChessBoard(boardWidth, boardLength, boardSymbol);
//                 result = drawChessBoard(myBoard); 
//             }
//         }
//     } catch(error) {
//         result = error.reason;
//     };
//     return chessBoardResult.innerHTML = result;
// }

/* Task 2 */
// var envelopesBtn = document.querySelector('.envelopes-btn');
// var envelopesResult = document.querySelector('.envelopes-result');

// function Envelope(width, height) {
//     this.width = width;
//     this.height = height;
// };

// function checkEnvelopes() {
//     try {
//         var env1Width = document.querySelector('#env1__width').value;
//         var env1Height = document.querySelector('#env1__height').value;
//         var env2Width = document.querySelector('#env2__width').value;
//         var env2height = document.querySelector('#env2__height').value;
        
//         if (existParams(env1Width, env1Height, env2Width, env2height)) {
//             if (isNumeric(env1Width, env1Height, env2Width, env2height)) {
//                 var env1 = new Envelope(env1Width, env1Height);
//                 var env2 = new Envelope(env2Width, env2height);
//                 var result = putInEnvelopes([env1, env2]);
//                 if (result == 1) {
//                     result = "Yes";
//                 } else if (result == 0) {
//                     result = "No";
//                 }
//             }
//         }
//     } catch(error) {
//         result = error.reason; 
//     }
//     return envelopesResult.innerHTML = result;
// }

/* Task 3 */
// var trianglesBtn = document.querySelector('.triangles-btn');
// var trianglesResult = document.querySelector('.triangles-result');
// var addTriangleBtn = document.querySelector('.add-btn');
// var triangleList = document.querySelector('.triangle-list');

// function Triangle(vertices, side1, side2, side3) {
//     this.vertices = vertices;
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
// };
/* Add new trangle */
// function addNewTriangle() {
//     var newTriangle = document.createElement('div');
//     newTriangle.className = 'triangle';
//     var newTriangleNomber = findTriangleNomber() + 1;
//     newTriangle.innerHTML = '<p class="triangle' + newTriangleNomber + '">Triangle ' + newTriangleNomber + ':</p>'
//                             + '<div>'
//                                 + '<label for="triangle' + newTriangleNomber + '__name">Name</label>'
//                                 + '<input id="triangle' + newTriangleNomber + '__name" type="text" name="name" required="required" />'
//                             + '</div>'
//                             + '<div>'
//                                 + '<label for="triangle' + newTriangleNomber + '__side1">Side 1</label>'
//                                 + '<input id="triangle' + newTriangleNomber + '__side1" type="text" name="side1" required="required" />'
//                             + '</div>'
//                             + '<div>'
//                                 + '<label for="triangle' + newTriangleNomber + '__side2">Side 2</label>'
//                                 + '<input id="triangle' + newTriangleNomber + '__side2" type="text" name="side2" required="required" />'
//                             + '</div>'
//                             + '<div>'
//                                 + '<label for="triangle' + newTriangleNomber + '__side3">Side 3</label>'
//                                 + '<input id="triangle' + newTriangleNomber + '__side3" type="text" name="side3" required="required" />'
//                             + '</div>'

//     triangleList.appendChild(newTriangle);
// }

// function findTriangleNomber() {
//     var allTriangles = document.querySelectorAll('.triangle');
//     return allTriangles.length;
// }
// /* Add new triangle - END */

// function buildTriangle(elem, name){
//     var triangleName  = elem.querySelector('#'+name+'__name' ).value;
//     var triangleSide1 = elem.querySelector('#'+name+'__side1').value;
//     var triangleSide2 = elem.querySelector('#'+name+'__side2').value;
//     var triangleSide3 = elem.querySelector('#'+name+'__side3').value;  
//     if (existParams(triangleName, triangleSide1, triangleSide2, triangleSide3)) {
//         if (isNumeric(triangleSide1, triangleSide2, triangleSide3)) {
//             return new Triangle(triangleName, parseFloat(triangleSide1), parseFloat(triangleSide2), parseFloat(triangleSide3));
//         }
//     }
// };

// function getUnsortedTriangles() {
//     var allTriangles = document.querySelectorAll('.triangle');
//     var triangleArr =[];
//     for (var i = 0; i < allTriangles.length; i++) {
//         var name = 'triangle' + (i+1);
//         triangleArr.push(buildTriangle(allTriangles[i], name));
//     }
//     return triangleArr;
// }

// function getSortedtriangles() {
//     try {
//         var triangles = getUnsortedTriangles();
//         return trianglesResult.innerHTML = sortFigures(triangles);
//     } catch(error) {
//         return trianglesResult.innerHTML = error.reason;
//     }
//     return trianglesResult.innerHTML = result;
// }

/* Task 4 */ 
// var palindromBtn = document.querySelector('.palindrom-submit');
// var palindromResult = document.querySelector('.palindrom-result');

// function Numb(number) {
//     this.number = number;
// };

// function getPalindrom() {
//     try {
//         var palindromField = document.querySelector('#palindrom-field').value;
//         if (existParams(palindromField) && isNumeric(palindromField) && palindromField > 10) {
//             var numb = new Numb(palindromField);
//             var palindroms = findPalindrom(numb.number);
//             return palindromResult.innerHTML = palindroms;
//         }
//     } catch(error) {
//         return palindromResult.innerHTML = error.reason;
//     }
// }

/* Task 5 */
// var ticketsBtn = document.querySelector('.tickets-btn');
// var ticketsResult = document.querySelector('.tickets-result');

// function TicketsRange(min, max) {
//     this.min = min;
//     this.max = max;
// };
// function HappyTicketsResult(vinner, numHappyByMirror, numHappyEvenOdd) {
//     this.vinner = vinner;
//     this.numHappyByMirror = numHappyByMirror;
//     this.numHappyEvenOdd = numHappyEvenOdd;
// };
// function Ticket(number) {
//     this.number = number;
// }

// ticketsSubmit.addEventListener('click', function () {
//     var ticketMin = document.querySelector('#ticket-min').value;
//     var ticketMax = document.querySelector('#ticket-max').value;
//     var content = new TicketsRange(ticketMin, ticketMax);
//     var result = new HappyTicketsResult;
//     // var result
//     var happyTickets = countHappyTickets(content, result);
//     return ticketsResult.innerHTML = 'Vinner: ' + happyTickets.vinner + 
//         '; happy tickets by Mirror method: ' + happyTickets.numHappyByMirror + 
//         '; happy tickets by Even-odd method: ' + happyTickets.numHappyEvenOdd;
// });