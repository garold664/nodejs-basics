// const EventEmitter = require('events');

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const customEventListener = (userName) => {
  console.log("Custom Event emitted and user's name is: ", userName);
};

myEmitter.on('customEvent', customEventListener);

setTimeout(() => {
  myEmitter.emit('customEvent', 'John');
  myEmitter.emit('customEvent', 'Jane');

  //# turning off the eventListener
  myEmitter.off('customEvent', customEventListener);
}, 2000);

setTimeout(() => {
  myEmitter.emit('customEvent', 'After off');
}, 4000);

//# Once
myEmitter.once('singleCustomEvent', (userName) => {
  console.log("Single Custom Event emitted and user's name is: ", userName);
});

setTimeout(() => {
  myEmitter.emit('singleCustomEvent', 'Tom');
  myEmitter.emit('singleCustomEvent', 'John');
}, 2000);

console.log('myEmitter.eventNames() :', myEmitter.eventNames());
console.log('max listeners by default: ', myEmitter.getMaxListeners());
myEmitter.setMaxListeners(25);
console.log('max listeners after setting: ', myEmitter.getMaxListeners());
