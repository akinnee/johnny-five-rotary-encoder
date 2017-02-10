const five = require('johnny-five');
const rotaryEncoder = require('./index');

const board = new five.Board();

board.on('ready', () => {
  const upButton = new five.Button(13);
  const downButton = new five.Button(12);
  const pressButton = new five.Button(11);

  rotaryEncoder({
    upButton,
    downButton,
    pressButton,
    onUp: () => {
      console.log('up');
    },
    onDown: () => {
      console.log('down');
    },
    onPress: () => {
      console.log('press');
    },
  });
});