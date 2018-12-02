import React, {Component} from 'react';

class ControlledForm extends Component {

    state = {
        value: ''
    }

handleTextChange = (e) => {
    this.setState({
        value: e.target.value
    });
}

resetTextArea = () => {
    this.setState({
       value: ''
    });
}

    render() {
      const {start} = this.props;

       return(
        <div className='textAreaContainer'>
            <textarea
                value={this.state.value}
                onChange={this.handleTextChange}
                placeholder='The clock start when you start typing.'
                onKeyPress={start}
           ></textarea>
           <button onClick={this.resetTextArea}>Start Over</button>
        </div>
    );

    }
}

export default ControlledForm;
