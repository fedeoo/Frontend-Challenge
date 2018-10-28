
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

module.exports = {
  observe,
};

