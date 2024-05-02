import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello World' + name);
}

function goodByHandler(name) {
    console.log('GoodBy World ' + name);
}



// Register event listerners

myEmitter.on('greet', greetHandler);
myEmitter.on('goodBy', goodByHandler);


myEmitter.emit('greet', 'john');
myEmitter.emit('goodBy', 'john');


myEmitter.on('error', (err) => {
    console.log('An error occurred', err);
})


myEmitter.emit('error' , new Error('Something Went Wrong'));