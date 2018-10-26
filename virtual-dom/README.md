## Virtual DOM

A few months ago, when I was interviewing a unicorn company(confidential), I was asked to implement a simple version of diff algorithm. I totally screwed up.
Personally, I think it's perfect as a interview question.
We could simplify the question by add more restriction, such as, It's unessential to consider about `key`.
Also, we could implement this step by step. 

I wrote this one in terms of my thoughts by myself. After that I checked others's approaches. But I think the solutions are almost same. 
There's one of them, [How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060).
That version is not ideal. The problem with `index` is  that it will fail if you try to remove more than one element. 
```
parentNode.removeChild(parentNode.children[index]);
```
It's obvious that the position has been changed after you remove a element from parent node.
My version: As you can see, I add a property `$ele` to connect with real DOM.
