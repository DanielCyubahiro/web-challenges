import Circle from './components/Circle/Circle.js';
import Pentagon from './components/Pentagon/Pentagon.js';
import Square from './components/Square/Square.js';

console.clear();

const root = document.getElementById('root');

const circleElement = Circle();
const square = Square();
const pentagonElement = Pentagon();

root.append(circleElement, square, pentagonElement);
