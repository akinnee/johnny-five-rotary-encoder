module.exports = function rotaryEncoder({
  upButton,
  downButton,
  pressButton,
  onUp,
  onDown,
  onPress,
}) {
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
    onPress();
  });

  function handleWaveform() {
    if (waveform.length < 2) {
      return;
    }

    if (waveform === '01') {
      onUp();
    } else if (waveform === '10') {
      onDown();
    }

    waveform = '';
  }
}