import Emitter from './emitter';

const emitter = new Emitter();
emitter.emit('log', 0, 'should trigger nothing');

const sub1 = emitter.subscribe('log', (...args) => console.log('sub1', ...args));
emitter.emit('log', 1, 'should trigger 1 callback');

const sub2 = emitter.subscribe('log', (...args) => console.log('sub2', ...args));
emitter.emit('log', 2, 'should trigger 2 callbacks');

sub1();
emitter.emit('log', 3, 'should trigger 1 callback');
