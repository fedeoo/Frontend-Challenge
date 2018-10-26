# challenge myself

This repo aims for collecting some challenged tasks and complete them.
You could complete them by yourself just as a programming workouts.  Or you can choose them as a question in [pair programming interviews](https://medium.freecodecamp.org/things-ive-learned-from-pair-programming-interviews-35a4db7d7443).
Some of them are marked as ⭐, which means I was asked to implement it in an interview.

Tips:
1. **DO NOT** rely on any library or tools but you don't need to consider old browser.
2. You'd better complete it with valina JS in given time.  Complete them by yourself.
 

## Perfection Game ⭐️   
![Perfection Game](./perfection-game/shortcut.jpg)  
Video: https://www.youtube.com/watch?v=BjLzzLq765Q   
Time: 1 hour   
Desc: You could simplify the game by ignoring the timer and assuming that shapes are infinite. 

## Virtual DOM Diff ⭐
In this version, we don't consider `key`. Given the data structure like this, 
```
const rawTree = {
  tag: 'ul',
  children: [{
    tag: 'li',
    children: '🍎',
  }, {
    tag: 'li',
    children: '🍇',
  }],
};
```
We could do this step by step:
1. Render whole tree in page.
2. Copy`rawTree` to `addedItemTree` and add a new item. then add a button in page, 
when given button was clicked, then render this tree again. Ensure the old dom won't be rendered more than once.
3. Copy `rawTree` to `removedItemTree` and remove last item, then add a button in page,
when given button was clicked, then render this tree again. Ensure the first item be rendered.
4. Copy `rawTree` to `modifiedItemTree` and modify one item, then same as above.

Time: It depends on the how many features you want to complete.  

--------
