
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
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        return data[key];
      },
      set: (newVal) => {
        data[key] = newVal;
        callback();
      },
    });
  });
}

class Vue {
  constructor(options = {}) {
    _proxy.apply(this, [options.data, options.render]);
  }
}

module.exports = {
  observe,
  Vue,
};

