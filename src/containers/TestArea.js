import React, { Component } from 'react';
import ControlledForm from './ControlledForm';
import Timer from '../components/Timer';

class TestArea extends Component {

 state = {
   timerRunning: false,
   timer: [0,0,0,0]
 }
  startTimer = (e) => {
    if(e.target.value.length === 0 && this.state.timerRunning === false) { //se non si controlla timerRunning dentro la condizione, si rischia di far partire l'interval ogni qualvolta ritorno a 0 e ricomincio a scrivere
        this.setState({
            timerRunning: true
        });
        this.ID = setInterval(this.tick, 10);
    }
}

tick = () => {
    const timer = this.state.timer.slice();
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60); //minuti
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //secondi
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //centesimi
    this.setState({timer});
}
  render() {
    return (
      <div className='mainContent'>
          <section className='textToMatch'>
              <p>Sentence to test</p>
          </section>
          <ControlledForm
             start={this.startTimer}/>
          <Timer timer={this.state.timer}/>
      </div>

    )
  }
}

export default TestArea;
