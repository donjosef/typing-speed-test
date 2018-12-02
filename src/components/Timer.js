import React from 'react';

function Timer(props) {
  //First remove the last element of array representing the ms, then add a leading 0 if number is less than 10, join to string
  const formattedTimer = props.timer.filter((number, idx) => idx !== 3 ).map(number => {
    return number < 10 ? "0" + number : number;
  }).join(":");

    return(
        <div className='timerContainer'>
          {formattedTimer}
        </div>
    );
}

export default Timer;
