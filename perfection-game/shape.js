class Shape {
  constructor(shape) {
    const ele = document.createElement('div');
    ele.classList.add('shape');
    ele.classList.add(`shape-${shape.toLowerCase()}`);
    ele.setAttribute('draggable', true);
    ele.dataset.type = shape;
    this.ele = ele;
    this.shape = shape;
    this.isDropped = false;
    this.onDragover = this.onDragover.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.registerEvent();
    this.listener = null;
    // shapeBox.appendChild(ele);
  }

  appendTo(container) {
    container.appendChild(this.ele);
  }

  registerEvent() {
    const ele = this.ele;
    ele.addEventListener('dragover', this.onDragover);
    ele.addEventListener('drop', this.onDrop);
  }

  onDragover(event) {
    event.preventDefault();
  }
  onDrop(event) {
    event.preventDefault();
    const draggedShape = event.dataTransfer.getData('shape');
    if (!this.isDropped && draggedShape === this.shape) {
      this.isDropped = true;
      this.ele.classList.add('fixed');
      this.listener && this.listener();
    }
    // console.log('drop', event);
    console.log(event.dataTransfer.getData('shape'));
  }
  addFillListener(listener) {
    this.listener = listener;
  }
}

export default Shape;
