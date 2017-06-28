import Emitter from './emitter';

const emitter = new Emitter();
emitter.emit('log', 0, 'should trigger nothing');

const sub1 = emitter.subscribe('log', (...args) => console.log('sub1', ...args));
emitter.emit('log', 1, 'should trigger 1 callback');
// "sub1" 1 "should trigger 1 callback"

const sub2 = emitter.subscribe('log', (...args) => console.log('sub2', ...args));
emitter.emit('log', 2, 'should trigger 2 callbacks');
// "sub1" 2 "should trigger 2 callback"
// "sub2" 2 "should trigger 2 callback"

sub1();
emitter.emit('log', 3, 'should trigger 1 callback');
// "sub2" 3 "should trigger 1 callback"

const myEvent1 = emitter.subscribe('myEvent', () => 1);
const myEvent2 = emitter.subscribe('myEvent', () => 2);
const myEvent3 = emitter.subscribe('myEvent', () => true);
const result = emitter.emit('myEvent');

console.log(result);
// [1, 2, true]
