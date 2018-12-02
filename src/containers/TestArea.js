import React, { Component } from 'react';
import ControlledForm from './ControlledForm';

class TestArea extends Component {
  render() {
    return (
      <div className='mainContent'>
          <section className='textToMatch'>
              <p>Sentence to test</p>
          </section>
          <ControlledForm />

      </div>

    )
  }
}

export default TestArea;
