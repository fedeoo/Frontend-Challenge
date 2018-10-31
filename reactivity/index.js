
const observe = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    let shadowValue = obj[key];
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        return shadowValue;
      },
      set: (newVal) => {
        shadowValue = newVal;
        callback();
      },
    });
  });
};

function _proxy(data, callback) {
  const that = this;
  Object.keys(data).forEach(key => {
    const deps = [];
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (currentRender) {
          deps.push(currentRender);
        }
        return data[key];
      },
      set: (newVal) => {
        data[key] = newVal;
        // callback();
        deps.forEach((dep) => {
          dep.apply(that);
        });
      },
    });
  });
}

let currentRender = null;

class Vue {
  constructor(options = {}) {
    this.render = options.render;
    const wrapperRender = () => {
      currentRender = wrapperRender;
      this.render();
    };
    _proxy.apply(this, [options.data, wrapperRender]);
    currentRender = wrapperRender;
    this.render();
  }
}

module.exports = {
  observe,
  Vue,
};

