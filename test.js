import expect from 'expect';

import Emitter from '.';

// Step 1

let test = 0;

const emitter = new Emitter();

emitter.emit('sum', 1); // should trigger nothing

expect(test).toBe(0);

const sub1 = emitter.subscribe('sum', num => test = test + num);

emitter.emit('sum', 1); // should trigger 1 callback

expect(test).toBe(1);

const sub2 = emitter.subscribe('sum', num => test = test * num);

emitter.emit('sum', 2); // should trigger 2 callbacks

expect(test).toBe(6);

// Step 2

sub1();

emitter.emit('sum', 3); // should trigger 1 callback

expect(test).toBe(18);

// Step 3

const myEvent1 = emitter.subscribe('myEvent', () => 1);
const myEvent2 = emitter.subscribe('myEvent', () => 2);
const myEvent3 = emitter.subscribe('myEvent', () => true);
const result = emitter.emit('myEvent');

expect(result).toEqual([1, 2, true]);

console.info('You passed the test!!! 👏🏼 👏🏼 👏🏼');
