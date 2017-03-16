/*
 * Create an event emitter that goes like this
 *   const emitter = new Emitter();
 *
 * Its instance allows you to subscribe to some event by passing a callback function
 *   const sub1 = emitter.subscribe('event_name', () => {});
 * ...any times you want...
 *   const sub2 = emitter.subscribe('event_name', () => {});
 *
 * You can emit the event you want and pass any number of arguments
 *   emitter.emit('event_name', 'foo', 'bar');
 *
 * The return from the subscribe method allows you to release THAT callback subscription
 *   sub1();
 */

export default class Emitter {
    constructor() { }
}
