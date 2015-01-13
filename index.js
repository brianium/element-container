'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var events = require('./lib/events');

/**
 * Set multiple attributes based on object keys.
 *
 * @param {HTMLElement} elem - the element to set attributes on
 * @param {Object} attrs - object with key/value pairs to set attributes
 */
function setAttrs(elem, attrs) {
  var k;
  for(k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      elem.setAttribute(k, attrs[k]);
    }
  }
}

/**
 * An object that wraps an underlying dom element.
 *
 * @constructor
 * @param {HTMLElement} element
 */
function ElementContainer(element) {
  this.element = element;
}

util.inherits(ElementContainer, EventEmitter);

/**
 * Add a class to the underlying element.
 * @param {String} cls - the class to add
 */
ElementContainer.prototype.addClass = function(cls) {
  this.element.classList.add(cls);
  return this;
};

/**
 * Remove a class from the underlying element.
 * @param {String} cls - the class to remove
 */
ElementContainer.prototype.removeClass = function(cls) {
  this.element.classList.remove(cls);
  return this;
};

/**
 * Check if the underlying element has a class.
 * @param {String} cls - the class to check for
 */
ElementContainer.prototype.hasClass = function(cls) {
  return this.element.classList.contains(cls);
};

/**
 * Check if the underlying element has the named attribute.
 *
 * @param {String} attr - the attr name to check for
 */
ElementContainer.prototype.hasAttr = function(attr) {
  return this.element.hasAttribute(attr);
};
  
/**
 * Get or set attributes on the underlying element.
 *
 * If one argument is provided as a string it will fetch the attribute.
 * If one argument is provided as an object, multiple attrs are set and the mixin is returned.
 * If two arguments are provided the named attr is set and the mixin is returned.
 */
ElementContainer.prototype.attr = function() {
  if (arguments.length === 2) {
    this.element.setAttribute(arguments[0], arguments[1]);
    return this;
  }
  var arg = arguments[0];
  if (typeof(arg) === 'object') {
    setAttrs(this.element, arg);
    return this;
  }
  return this.element.getAttribute(arg);
};

/**
 * Simple event delegation to the element's addEventListener method. If
 * the given type is not a standard dom event, it will be registered as a custom event on the ElementContainer
 * itself.
 *
 * @param {String} type - the event type
 * @param {Function} listener - a function to execute when the event is triggered
 * @param {Boolean} useCapture - prevent bubble when set to true - only valid for event callbacks
 */
ElementContainer.prototype.on = function(type, listener, useCapture) {
  if (!events.isDomEvent(type)) {
    return EventEmitter.prototype.on.call(this, type, listener);
  }

  this.element.container = this;
  this.element.addEventListener(type, listener, !!useCapture);
  return this;
};

/**
 * Simple event delegation to the element's removeEventListener method.
 *
 * @param {String} type - the event type
 * @param {Function} listener - the listener to remove
 * @param {Boolean} useCapture - if the original listener was set to use capture or not
 */
ElementContainer.prototype.off = function(type, listener, useCapture) {
  if (!events.isDomEvent(type)) {
    return EventEmitter.prototype.removeListener.call(this, type, listener);
  }

  this.element.removeEventListener(type, listener, !!useCapture);
};

/**
 * Append the underlying element to the target element
 * @param {HTMLElement} element - the element to append to
 * @return {ElementContainer}
 */
ElementContainer.prototype.appendTo = function(element) {
  element.appendChild(this.element);
  return this;
};

module.exports = ElementContainer;
