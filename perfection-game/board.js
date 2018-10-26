import Shape from './shape.js';

const boardContainer = document.querySelector('.board-container');

const drawBoard = (shapes) => {
  let fillCount = 0;
  shapes.map((shape) => {
    const shapeWidget = new Shape(shape);
    shapeWidget.addFillListener(() => {
      fillCount++;
      console.log(fillCount, shapes.length);
      if (fillCount === shapes.length) {
        alert('You win!');
      }
    });
    shapeWidget.appendTo(boardContainer);
  });
}

export default drawBoard;
