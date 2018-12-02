import React, { Component } from 'react';
import ControlledForm from './ControlledForm';
import Timer from '../components/Timer';

class TestArea extends Component {
  render() {
    return (
      <div className='mainContent'>
          <section className='textToMatch'>
              <p>Sentence to test</p>
          </section>
          <ControlledForm />
          <Timer />
      </div>

    )
  }
}

export default TestArea;
