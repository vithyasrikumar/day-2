# Introduction to JavaScript
JavaScript is the programming language of the web. Although it's capable of so much more, today we'll focus on how it can be used to add interactivity to your webpages.

We link Javascript files to our webpages by like this:

```HTML
<html>
	<head>
    <title></title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <div>
      <h1>Hello, Gakko!</h1>
      <h2>We are the <a href="">Code Forward</a> class of 2018.</h2>
      <p></p>
    </div>
  </body>
</html>
```

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


>Important note: JavaScript syntax is slightly different from CSS. For example:

>```CSS
>body {
>	text-transform: uppercase; 
>}
>``` 

> accomplishes the same thing as 

>```Javascript
>document.querySelector('body').style.textTransform = "uppercase";
>```
> The key difference is `text-transform` in CSS vs `textTransform` in JS




