
export const rawTree = {
  tag: 'ul',
  children: [{
    tag: 'li',
    key: 'apple',
    children: [{ tag: 'text', content: '🍎' }],
  }, {
    tag: 'li',
    key: 'banana',
    children: [{ tag: 'text', content: '🍌' }],
  }],
};

export const addedItemTree = {
  tag: 'ul',
  children: [{
    tag: 'li',
    key: 'apple',
    children: [{ tag: 'text', content: '🍎' }],
  }, {
    tag: 'li',
    key: 'grape',
    children: [{ tag: 'text', content: '🍇' }],
  }, {
    tag: 'li',
    key: 'banana',
    children: [{ tag: 'text', content: '🍌' }],
  }],
};

export const removedItemTree = {
  tag: 'ul',
  children: [{
    tag: 'li',
    key: 'banana',
    children: [{ tag: 'text', content: '🍌' }],
  }],
};

export const modifiedItemTree = {
  tag: 'ul',
  children: [{
    tag: 'li',
    key: 'apple',
    children: [{ tag: 'span', children: [{ tag: 'text', content: '🍌' }]}, { tag: 'text', content: '🍏' }],
  }, {
    tag: 'li',
    key: 'banana',
    children: [{ tag: 'text', content: '🍌' }],
  }],
};
