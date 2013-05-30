cagify.js
=========
A Javascript plugin to spice up your placeholder images.

How It Works
------------
When the page loads, Cagify.js traverses the page, finding all image tags with the class "cagify". It replaces the image's source with a corresponding query to [CageMe](http://cageme.herokuapp.com), a placeholder image generator which uses images of Nicolas Cage in... interesting... situations.

Get Started
-----
Include the source file in your html.

```html
<script src="js/cagify.js"></script>
```

Include an image tag with the class name "cagify". Be sure to specify its width and height.

```html
<img class="cagify" width="400" height="320">
```

Want a greyscale image? Use the class name "cagify-grey"!

```html
<img class="cagify-grey" width="300" height="300">
```
