import fs from 'fs';
import { Transform } from 'stream';

const readableStream = fs.createReadStream('input.txt', {
  encoding: 'utf8',
});

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

function readWithDelay(stream, delay = 100) {
  stream.on('data', (chunk) => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < chunk.length) {
        console.log(chunk[index]); 
        index++;
      } else {
        clearInterval(intervalId); 
      }
    }, delay);
  });

  stream.on('end', () => {
    console.log('Читання завершено');
  });
}

readableStream
  .pipe(uppercaseTransform)
  .on('data', (chunk) => {
    readWithDelay(fs.createReadStream('input.txt', { encoding: 'utf8' })); 
    console.log('Трансформовані дані:', chunk); 
  })
  .on('end', () => {
    console.log('Читання та трансформація завершені');
  });
