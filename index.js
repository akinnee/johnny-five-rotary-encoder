const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const upButton = new five.Button(13);
  const downButton = new five.Button(12);
  const pressButton = new five.Button(11);

  let waveform = '';

  upButton.on('up', () => {
    waveform += '1';
    handleWaveform();
  });

  downButton.on('up', () => {
    waveform += '0';
    handleWaveform();
  });

  pressButton.on('up', () => {
    console.log('press');
  });

  function handleWaveform() {
    if (waveform.length < 2) {
      return;
    }

    if (waveform === '01') {
      console.log('up');
    } else if (waveform === '10') {
      console.log('down');
    }

    waveform = '';
  }
});