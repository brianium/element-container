ElementContainer
================

[![Build Status](https://travis-ci.org/brianium/element-container.png)](https://travis-ci.org/brianium/element-container) 

> Wrap a dom element with events and state

`ElementContainer` lets you use DOM events and custom events behind the same interface. It's useful for creating models
that sit on top of dom elements.

```js
var ElementContainer = require('element-container');

var playerElement = document.getElementById('player'),
    player = new ElementContainer(playerElement);

function doADomThing() {
  var child = document.createElement('div');
  this.appendChild(child);
}

player.on('click', doADomThing);
player.on('custom', function() {
  this.doPlayerThing();
  this.emit('thing:complete', this);
});
```

## Running tests

Tests leverage the karma test runner and can be run via `npm test`.

```
npm test
```
