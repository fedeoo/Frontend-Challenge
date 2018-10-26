import { rawTree, addedItemTree, removedItemTree, modifiedItemTree, switchedItemTree } from './mockData.js';

const removeOldNode = (oldNode, rootNode) => {
  if (oldNode && oldNode.$ele) {
    rootNode.removeChild(oldNode.$ele);
    oldNode.$ele = null;
  }
};

const insertElementAt = (element, parentNode, index = 0) => {
  if (index >= parentNode.children) {
    parentNode.appendChild(element);
  } else {
    parentNode.insertBefore(element, parentNode.children[index]);
  }
};


const createNewNode = (node, parentNode, index = 0) => {
  const element = node.tag === 'text' ? document.createTextNode(node.content) : document.createElement(node.tag);
  node.$ele = element;
  node.$index = index;
  insertElementAt(element, parentNode, index);
  (node.children || []).forEach((childElement, i) => createNewNode(childElement, element, i));
};

const diffLayer = (oldLayer = [], newLayer = []) => {
  const keyIndexInOldLayer = {};
  oldLayer.forEach((item) => {
    if (item.key) {
      keyIndexInOldLayer[item.key] = item;
    }
  });
  const keyIndexInNewLayer = {};
  newLayer.forEach((item) => {
    if (item.key) {
      keyIndexInNewLayer[item.key] = item;
    }
  });
  const maxLen = Math.max(oldLayer.length, newLayer.length);
  const paris = [];

  for (let index = 0; index < maxLen; index++) {
    const hasOldKey = oldLayer[index] && oldLayer[index].key;
    const hasNewKey = newLayer[index] && newLayer[index].key;
    if (hasOldKey || hasNewKey) {
      const oldMatch = hasOldKey ? keyIndexInNewLayer[oldLayer[index].key] : undefined;
      const newMatch = hasNewKey ? keyIndexInOldLayer[newLayer[index].key] : undefined;
      if (!oldMatch) { // Avoid to be push twice.
        paris.push([oldLayer[index], undefined, index]);
      }
      paris.push([newMatch, newLayer[index], index]);
    } else  {
      paris.push([oldLayer[index], newLayer[index], index]);
    }
  }
  return paris;
};

const replaceNode = (oldNode, newNode) => {
  if (oldNode.tag === 'text') {
    if (oldNode.content !== newNode.content)  {
      oldNode.$ele.textContent = newNode.content;
    }
  } else {
    const paris = diffLayer(oldNode.children, newNode.children);
    paris.forEach(([leftNode, rightNode, positionInNew]) => {
      renderLayer(leftNode, rightNode, oldNode.$ele, positionInNew);
    });
  }
};

const renderLayer = (oldNode, newNode, parentNode, index) => {
  if (!newNode) {
    removeOldNode(oldNode, parentNode);
  } else if (!oldNode) {
    createNewNode(newNode, parentNode, index);
  } else {
    newNode.$ele = oldNode.$ele;
    if (oldNode.tag !== newNode.tag || oldNode.key !== newNode.key) {
      removeOldNode(oldNode, parentNode);
      createNewNode(newNode, parentNode, index);
    } else {
      if (oldNode.$index !== index) {
        insertElementAt(oldNode.$ele, parentNode, index);
      }
      replaceNode(oldNode, newNode, index);
    }
  }
};

let currentTree;
const render = (oldTree, newTree, rootNode) => {
  renderLayer(oldTree, newTree, rootNode, 0);
  currentTree = newTree;
};

const deepCloneJSONObject = (json) => {
  return JSON.parse(JSON.stringify(json));
} ;
const run = () => {
  const root = document.querySelector('#root');
  render(undefined, deepCloneJSONObject(rawTree), root);
  document.querySelector('#addBtn').addEventListener('click',
    () => render(currentTree, deepCloneJSONObject(addedItemTree), root)
  );
  document.querySelector('#removeBtn').addEventListener('click',
    () => render(currentTree, deepCloneJSONObject(removedItemTree), root)
  );
  document.querySelector('#modifyBtn').addEventListener('click',
    () => render(currentTree, deepCloneJSONObject(modifiedItemTree), root)
  );
  document.querySelector('#switchBtn').addEventListener('click',
    () => render(currentTree, deepCloneJSONObject(switchedItemTree), root)
  );
};

run();


