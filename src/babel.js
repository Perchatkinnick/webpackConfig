// JavaScript source code
async function start() {
    return await Promise.resolve('async is working');
}

start().then(console.log);

const unused = 42;

class Util {
    static id = Date.now();
}

console.log('Util.id: ', Util.id);
console.log(unused);

// dynamic import
import * as _ from 'lodash'
console.log('Lodash', _.random(0, 42, true))

