import React, { Component } from 'react';
import ControlledForm from './ControlledForm';
import Timer from '../components/Timer';

class TestArea extends Component {

 state = {
   timerRunning: false,
   timer: [0,0,0,0],
   partialMatch: false,
   completed: false,
   error: false,
   originText: 'Seventy seven benevolent elephants.'
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

checkMatch = (e) => {
    const textEntered = e.target.value;
    if(textEntered !== "") { //keyup event triggers before textarea will have a value
        const partialMatch = this.state.originText.substring(0, textEntered.length);
       if(textEntered === this.state.originText) {
           clearInterval(this.ID);
           this.setState({
               completed: true,
               error: false,
               partialMatch: false
           });
       } else {
           if(textEntered === partialMatch) {
               this.setState({
                   completed: false,
                   partialMatch: true,
                   error: false
               });
           } else {
               this.setState({
                   partialMatch: false,
                   error: true,
                   completed: false
               });
           }
       }
    } else {
        this.setState({
            completed: false,
            partialMatch: false,
            error: false
        });
    }
}

  render() {
    return (
      <div className='mainContent'>
          <section className='textToMatch'>
              <p>{this.state.originText}</p>
          </section>
          <ControlledForm
             start={this.startTimer}
             checkMatch={this.checkMatch}
             completed={this.state.completed}
             partialMatch={this.state.partialMatch}
             error={this.state.error}/>
          <Timer timer={this.state.timer}/>
      </div>

    )
  }
}

export default TestArea;
