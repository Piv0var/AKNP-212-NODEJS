import EventEmitter from "node:events";
// Task 1
const emitterClick = new EventEmitter();
emitterClick.on('click', () => {
  console.log('Первый');
});
emitterClick.on('click', () => {
  console.log('Второй');
});
emitterClick.emit('click');

// Task 2
const emitterError = new EventEmitter();
const errorHandler1 = () => {
  console.log('Первый');
};
const errorHandler2 = () => {
  console.log('Второй');
};
emitterError.on('error', errorHandler1);
emitterError.on('error', errorHandler2);
emitterError.removeListener('error', errorHandler1);
emitterError.emit('error');
// Task 3
class Dice extends EventEmitter {
  roll() {
    const result = Math.floor(Math.random() * 6) + 1;
    this.emit('rolled', result);
  }
}
const dice = new Dice();
dice.on('rolled', (result) => {
  console.log(`${result}`);
});
dice.roll();
// Task 4
class Logger extends EventEmitter {
  info(message) {
    this.emit('info', message);
  }
  warn(message) {
    this.emit('warn', message);
  }
  error(message) {
    this.emit('error', message);
  }
}
const logger = new Logger();
logger.on('info', (message) => {
  console.log(`INFO: ${message}`);
});
logger.on('warn', (message) => {
  console.log(`WARN: ${message}`);
});
logger.on('error', (message) => {
  console.log(`ERROR: ${message}`);
});
logger.info('info');
logger.warn('warn.');
logger.error('error');
