const { observe, Vue } = require('./index');

describe('observer()', () => {
  it('should observe a object', () => {
    const callback = jest.fn();
    const todos = {
      count: 0
    };
    observe(todos, callback);
    todos.count = 1;
    expect(callback).toHaveBeenCalled();
  });
});

describe('Vue', () => {
  it('should call render when data is changed', () => {
    const render = jest.fn();
    const app = new Vue({
      data: {
        count: 0,
      },
      render,
    });
    app.count = 1;
    expect(render).toHaveBeenCalled();
  });

  it('should not call render when the render is not rely on that changed data', () => {
    const render = jest.fn(function() {
      console.log(this.count);
    });
    const app = new Vue({
      data: {
        count: 0,
        todo: 'wake up',
      },
      render,
    });
    render.mockClear();
    expect(render).toHaveBeenCalledTimes(0);
    app.count = 1;
    expect(render).toHaveBeenCalledTimes(1);
    app.todo = 'sleep';
    expect(render).toHaveBeenCalledTimes(1);
  });
});
