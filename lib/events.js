'use strict';

var standardDomEvents = [
  'abort',
  'afterprint',
  'animationend',
  'animationiteration',
  'animationstart',
  'audioprocess',
  'beforeprint',
  'beforeunload',
  'beginEvent',
  'blocked',
  'blur',
  'cached',
  'canplay',
  'canplaythrough',
  'change',
  'chargingchange',
  'chargingtimechange',
  'checking',
  'click',
  'close',
  'complete',
  'compositioned',
  'compositionstart',
  'compositionupdate',
  'contextmenu',
  'copy',
  'cut',
  'dblclick',
  'devicelight',
  'devicemotion',
  'deviceorientation',
  'deviceproximity',
  'dischargingtimechange',
  'downloading',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'endEvent',
  'error',
  'focus',
  'fullscreenchange',
  'fullscreenerror',
  'gamepadconnected',
  'gamepaddisconnected',
  'hashchange',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'languagechange',
  'levelchange',
  'load',
  'loadeddata',
  'loadedmetadeta',
  'loadend',
  'loadstart',
  'message',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'noupdate',
  'obsolete',
  'offline',
  'online',
  'open',
  'orientationchange',
  'pagehide',
  'pageshow',
  'paste',
  'pause',
  'pointerlockchange',
  'pointerlockerror',
  'play',
  'playing',
  'popstate',
  'progress',
  'ratechange',
  'readystatechange',
  'repeatEvent',
  'reset',
  'resize',
  'scroll',
  'seeked',
  'seeking',
  'select',
  'show',
  'stalled',
  'storage',
  'submit',
  'success',
  'suspend',
  'timeupdate',
  'touchcancel',
  'touchend',
  'touchenter',
  'touchleave',
  'touchmove',
  'touchstart',
  'transitioned',
  'unload',
  'updateready',
  'upgradeneeded',
  'userproximity',
  'versionchange',
  'visibilitychange',
  'volumechange',
  'waiting',
  'wheel'
];

var pattern = new RegExp(standardDomEvents.join('|'), 'i');

/**
 * Determine if the passed in type is a dom event.
 *
 * @param {String} type - the event type
 * @returns {Boolean}
 */
module.exports.isDomEvent = function(type) {
  return pattern.test(type);
};
