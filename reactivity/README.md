## Reactivity

The key point of reactivity system is dependency collection.
The goal of this task is to understand how it works and when it will be trigger. If you know how often it will be trigger, you will be clear about the cost and performance of your application.

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
Sometimes, we don't want to observe whole `user` since we know we won't change it. Maybe we will set a new User but never change a user. So it'll be nice if we could just watch the reference of user.

5. computed is little bit intricate, it's an observer and watcher.

----
I've `never` worked with `Vue.js`, just read part of source code of `Mobx`. I know currently we could implement observe by Proxy instead of `set` `get`
if you found anything is missed or wrong, welcome to raise a PR.

