## Reactivity

The key point of reactivity system is dependency collection.  
The goal of this task is learn how it works and when it will be trigger. If you know how often it will be trigger, you will be clear about the cost and performance of it.

Next steps:
1. consider there's condition in render methods, we have to collecting dependency again. Considering this situation:
```js
if (this.flag) {
  access(this.name);
} else {
  access(this.title);
}
```
2. performance If there's more than variable are changed, render should be only called once. 
Given render
```js
render() {
  access(this.name);
  access(this.title);
}
app.name = 'newName';
app.title = 'newTitle';
```
3. Complex data, like array, nested object.
render() {
  access(this.user.name);
}
app.user.name = 'King';

4. lots of details, Such as set a new Object.
```js
Vue({
  data: {
    user: {},
  },
});
```
Sometimes, we don't want to observe whole `user` since we know we won't change it. Maybe we will set a new User but never change a user.

5. computed is little bit intricate, it's an observer and watcher. 

----
I Never worked with `Vue.js`, just read some source code of `Mobx`. I know currently we could implement observe by Proxy other than `set` `get` 
if you found something missed or wrong, welcome to PR.

