# Introduction to JavaScript
JavaScript is the programming language of the web. Although it's capable of so much more, today we'll focus on how it can be used to add interactivity to your webpages.


### It can make alerts
```javascript
alert("NOOOOO!!!!");
```

### It can modify content
```javascript
document.querySelector('h1').textContent = "New Title";
```

We're pretty much telling the browser, "Hey, `document`! Select an `h1`, and change its text to say 'New Title'."

###  It can change styles
In other words, we can write CSS with JavaScript!

```javascript
document.querySelector('div').style.background = "red";
```

We're telling the browser, "Hey, `document`! Select a `div`, and change its `style` (its CSS) so its `background` property is `red`."

