import { SHAPES } from './constants.js';

const shapeBox = document.querySelector('.shape-box');

const drawShapeBox = () => {
  SHAPES.map((shape) => {
    const ele = document.createElement('div');
    ele.classList.add('shape');
    ele.classList.add(`shape-${shape.toLowerCase()}`);
    ele.setAttribute('draggable', true);
    ele.dataset.type = shape;
    ele.addEventListener('dragstart', (event) => {
      console.log('drag', event);
      event.dataTransfer.setData('shape', shape);
    });
    shapeBox.appendChild(ele);
  });
};

export default drawShapeBox;
