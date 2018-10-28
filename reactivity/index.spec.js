const { observe } = require('./index');

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
