import React from 'react';

const CharCounter = (props) => {
  const {charCount, completed, timer} = props;
  let timeElapsed;
  let charPerSecond = 0;
  if(completed) {
    const [, seconds, hundredths] = timer;
    timeElapsed = +(seconds + (hundredths / 100)).toFixed(2);
    charPerSecond = (charCount / timeElapsed).toFixed(2);
  }

  return (
    <div className='charCounter'>
      {charPerSecond}
      <p>Chars/sec</p>
    </div>
  )
}

export default CharCounter;
